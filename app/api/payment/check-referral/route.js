import { NextResponse } from 'next/server';
import { validateReferral } from '../../../lib/googleSheets';

export async function POST(request) {
    try {
        // Extract BOTH the code and the selected test name from the frontend request
        const { referralCode, testName } = await request.json();

        // Ensure both pieces of data were actually sent
        if (!referralCode || !testName) {
            return NextResponse.json({ error: "Both a referral code and a selected test are required." }, { status: 400 });
        }

        // Pass BOTH to your updated Google Sheets validation function
        const check = await validateReferral(referralCode, testName);
        
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