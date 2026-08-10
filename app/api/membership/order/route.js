import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';
import { validateReferral, addPendingMembership } from '../../../lib/googleSheets';

const basePrices = {
    "free-plan": { name: "Free Employee Plan", price: 0 },
    "silver-plan": { name: "Silver Care", price: 2999 },
    "gold-plan": { name: "Gold Care", price: 4999 },
    "platinum-plan": { name: "Platinum Care", price: 9999 },
    "pro-fitness-plan": { name: "Pro Fitness Plan", price: 19999 }
};

const razorpay = new Razorpay({
    key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
    try {
        const body = await request.json();
        const {
            planSlug, referralCode, firstName, lastName, email, dob, gender,
            contactNo, bloodGroup, emergencyName, emergencyContactNo, emergencyRelationship,
            medicalConditions, appointmentDate, appointmentTime, houseNo, street, city, state, pinCode, landmark
        } = body;

        const planConfig = basePrices[planSlug];
        if (!planConfig) {
            return NextResponse.json({ error: "Invalid membership plan selection." }, { status: 400 });
        }

        let discountAmount = 0;
        if (referralCode) {
            const referralCheck = await validateReferral(referralCode);
            if (referralCheck.valid) {
                discountAmount = referralCheck.discountAmount;
            }
        }

        const finalPrice = Math.max(0, planConfig.price - discountAmount);

        const membershipData = {
            planSlug,
            firstName, lastName, email, dob, gender, contactNo, bloodGroup,
            planName: planConfig.name, emergencyName, emergencyContactNo, emergencyRelationship,
            medicalConditions, appointmentDate, appointmentTime, houseNo, street, city, state, pinCode, landmark,
            originalPrice: planConfig.price, referralCode: referralCode || 'None', discountAmount, finalPrice
        };

        // SCENARIO A: THE MEMBERSHIP DEDUCTION MAKES IT FREE
        if (finalPrice === 0) {
            await addPendingMembership({
                ...membershipData,
                status: "Free - Confirmed",
                orderId: "FREE_MEMBERSHIP_" + Date.now()
            });
            return NextResponse.json({ isFree: true, message: "Free membership activated successfully!" }, { status: 200 });
        }

        // SCENARIO B: PAID MEMBERSHIP
        const options = {
            amount: finalPrice * 100,
            currency: "INR",
            receipt: `membership_receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        await addPendingMembership({
            ...membershipData,
            status: "Pending",
            orderId: order.id
        });

        return NextResponse.json({ isFree: false, order }, { status: 200 });

    } catch (error) {
        console.error("Membership Order Backend Error:", error);
        return NextResponse.json({ error: "Failed to process membership transaction logic securely." }, { status: 500 });
    }
}