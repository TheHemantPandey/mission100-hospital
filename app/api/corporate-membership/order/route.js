import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const basePrices = {
  "silver-plan": { name: "Silver Corporate Care", price: 999 },
  "gold-plan": { name: "Gold Corporate Care", price: 1999 }
};

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(request) {
  try {
    const body = await request.json();
    const { planSlug, companyName } = body;

    const planConfig = basePrices[planSlug];
    if (!planConfig) {
      return NextResponse.json({ error: "Invalid corporate plan selection." }, { status: 400 });
    }

    const price = planConfig.price;

    // Generates standard Razorpay checkout orders
    const options = {
      amount: price * 100, 
      currency: "INR",
      receipt: `corporate_wellness_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({ order }, { status: 200 });

  } catch (error) {
    console.error("Corporate Order Backend Error:", error);
    return NextResponse.json({ error: "Failed to process order creation." }, { status: 500 });
  }
}
