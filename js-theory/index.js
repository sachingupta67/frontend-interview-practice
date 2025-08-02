const cart = [1, 3, 4];

const promise = createOrder(cart); // orderID

promise
  .then((orderId) => {
    console.log("orderId::::", orderId);
    // proceedToPayment(orderId);
  })
  .then((x) => {
    console.log(x);
  })
  .catch((y) => {
    console.log(y);
  }).then(z=>{
    console.log(z) // it wll be called no matter what
  })

function createOrder() {
  const pr = new Promise((resolve, rejected) => {
    const orderId = "2r353";
    if (orderId) {
      return resolve(orderId);
    } else {
      const err = new Error("Failed to load");
      return rejected(err);
    }
  });
  return pr;
}
