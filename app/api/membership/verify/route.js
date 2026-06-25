import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { confirmMembershipPayment } from '../../../lib/googleSheets';

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
            // Transitions Google Sheet status to Confirmed and sends custom confirmation Email
            await confirmMembershipPayment(razorpay_order_id, referralCode);

            return NextResponse.json({ message: "Membership activated and logged successfully!" }, { status: 200 });
        } else {
            return NextResponse.json({ message: "Invalid verification token signature match!" }, { status: 400 });
        }
    } catch (error) {
        console.error("Verification Pipeline Failure Error:", error);
        return NextResponse.json({ error: "Verification pipeline route crashed processing transaction." }, { status: 500 });
    }
}