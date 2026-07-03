import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { validateReferral, addPendingBooking } from '../../../lib/googleSheets';

// 1. The Official Backend Source of Truth for Prices
const basePrices = {
    "Complete Health Checkup : 1999": 1999,
    "Heart Attack Prevention Test : 499": 499, 
    "Full Body Checkup : 999": 999              
};

// Initialize Razorpay with your secret keys
const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
    try {
        const body = await request.json();
        const { 
            testName, 
            referralCode, 
            firstName, 
            lastName, 
            age, 
            gender, 
            contactNo, 
            appointmentDate, 
            appointmentTime, 
            houseNo, 
            street, 
            city, 
            state, 
            pinCode 
        } = body;

        // 2. Look up the secure base price on the server
        const basePrice = basePrices[testName];
        if (basePrice === undefined) {
            return NextResponse.json({ error: "Invalid test selection." }, { status: 400 });
        }

        let discountAmount = 0;

        // 3. Verify the referral code from Google Sheets if provided
        if (referralCode) {
            // FIX: Explicitly passed testName here so validateReferral runs correctly without throwing undefined exceptions
            const referralCheck = await validateReferral(referralCode, testName);
            if (referralCheck.valid) {
                if (referralCheck.isPercentage) {
                    // Calculate percentage reduction securely based on server prices
                    discountAmount = Math.round((basePrice * referralCheck.percentageValue) / 100);
                } else {
                    // Assign standard flat markdown rate
                    discountAmount = referralCheck.discountAmount;
                }
            }
        }

        // 4. Calculate the secure final price (never allow negative values)
        const finalPrice = Math.max(0, basePrice - discountAmount);

        // --- SCENARIO A: THE TEST IS FREE (Price is ₹0) ---
        if (finalPrice === 0) {
            await addPendingBooking({
                firstName, 
                lastName, 
                age, 
                gender, 
                contactNo, 
                testName, 
                appointmentDate, 
                appointmentTime,
                houseNo, 
                street, 
                city, 
                state, 
                pinCode,
                price: 0,
                status: "Free - Confirmed",
                orderId: "FREE_APPOINTMENT",
                referralCode: referralCode || 'None'
            });
            
            return NextResponse.json({ isFree: true, message: "Free booking recorded successfully!" }, { status: 200 });
        }

        // --- SCENARIO B: THE TEST IS PAID (Price > ₹0) ---
        // 1. Generate the Razorpay Order FIRST using the secure backend price
        const options = {
            amount: finalPrice * 100, 
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        // 2. NOW save it to Google Sheets using the REAL order.id from Razorpay!
        await addPendingBooking({
            firstName, 
            lastName, 
            age, 
            gender, 
            contactNo, 
            testName, 
            appointmentDate, 
            appointmentTime,
            houseNo, 
            street, 
            city, 
            state, 
            pinCode,
            price: finalPrice,
            status: "Pending",
            orderId: order.id,
            referralCode: referralCode || 'None'
        });

        // Return the official order details to the frontend
        return NextResponse.json({ isFree: false, order }, { status: 200 });

    } catch (error) {
        console.error("Order Creation Backend Error:", error);
        return NextResponse.json({ error: "Failed to process appointment backend sequence." }, { status: 500 });
    }
}