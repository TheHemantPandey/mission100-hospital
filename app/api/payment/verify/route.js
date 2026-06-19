import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { markBookingAsPaid } from '../../../lib/googleSheets'; // <-- Path fixed here!

export async function POST(request) {
    try {
        const body = await request.json();
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, referralCode } = body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(sign.toString())
            .digest("hex");

        if (razorpay_signature === expectedSign) {
            // Update the Google Sheet!
            await markBookingAsPaid(razorpay_order_id, referralCode);

            return NextResponse.json({ message: "Payment verified and recorded!" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Invalid signature!" }, { status: 400 });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Verification failed" }, { status: 500 });
    }
}