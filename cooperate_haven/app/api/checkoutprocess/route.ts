/**checkout function is exported and takes the products id from the cart and the quantities and then the total price */
/**get all the products name and the quantities */
export function CheckOutProcess(cartdetails: any, totalprice: number) {
  /**get the data from the cart */
  const order = {
    items: cartdetails,
    totalprice,
  }

  console.log("This is your order", order)
}
