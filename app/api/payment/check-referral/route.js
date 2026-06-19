import { NextResponse } from 'next/server';
import { validateReferral } from '../../../lib/googleSheets';

export async function POST(request) {
    try {
        const { referralCode } = await request.json();

        if (!referralCode) {
            return NextResponse.json({ error: "Please enter a code" }, { status: 400 });
        }

        const check = await validateReferral(referralCode);
        
        if (check.valid) {
            return NextResponse.json({ 
                valid: true, 
                discountAmount: check.discountAmount 
            }, { status: 200 });
        } else {
            return NextResponse.json({ error: check.message }, { status: 400 });
        }
    } catch (error) {
        console.error("Check Referral Error:", error);
        return NextResponse.json({ error: "Failed to verify code" }, { status: 500 });
    }
}