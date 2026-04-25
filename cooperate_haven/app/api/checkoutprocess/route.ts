import { NextResponse } from "next/server"

/**http post nethod to get form and cart data */
export async function POST(req: Request) {
  const body = await req.json()

  const order = {
    item: body.items,
    prices: body.price,
    form: body.customer,
  }

  console.log(order)

  /**pass the order details to the backend route localhost used for testing */
  try {
    const response = await fetch("http://localhost:3000/order/neworder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(order),
    })

    const data = response.json()

    return NextResponse.json(
      {
        success: true,
        message: "order created",
        redirectUrl: "/",
      },
      { status: 200 },
    )
  } catch (error: any) {
    console.log("Error", error)

    return NextResponse.json(
      {
        success: false,
        message: "failed to create order",
        error: error.message,
      },
      { status: 500 },
    )
  }
}
