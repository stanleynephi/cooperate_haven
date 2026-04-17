import { NextResponse } from "next/server"

/**http post nethod to get form and cart data */
export async function POST(req: Request) {
  const body = await req.json()

  const order = {
    item: body.items,
    prices: body.price,
    form: body.customer,
  }

  console.log("This is the order basket", order)

  return NextResponse.json(
    {
      success: true,
      message: "order created",
      redirectUrl: "/",
    },
    { status: 200 },
  )
}
