// Question

// console.log('Start');
// setTimeout(() => {
//   console.log('Timeout');
// }, 0);
// Promise.resolve().then(() => {
//   console.log('Promise');
// });
// console.log('End');



// Question 2

// console.log('Start');
// setTimeout(() => {
//   console.log('Timeout 1');
//   Promise.resolve().then(() => {
//     console.log('Promise 1');
//   });
//   setTimeout(() => {
//     console.log('Timeout 2');
//   }, 0);
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise 2');
// });

// console.log('End');


// Question 3

// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => {
//         throw new Error("An error occurred!");
//     })
//     .catch((err) => {
//         console.log(err.message);
//         return 5;
//     })
//     .then((x) => {
//      console.log(x)
//     });


// Question 4


// const promise = new Promise((resolve, reject) => {
//     resolve("First");
//     resolve("Second");
//     reject("Third");
// });

// promise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));


// Question 5 (HOLD)

// console.log('Start');

// async function foo() {
//   console.log('Foo Start');
//   await new Promise(resolve => setTimeout(resolve, 0));
//   console.log('Foo End');
// }

// foo().then(() => {
//   console.log('After Foo');
// });

// console.log('End');


// Question 6 (HOLD)
Promise.reject("Error")
  .catch((err) => {
    console.log("Caught:", err);
    return "Recovered";
  })
  .finally(() => {
    console.log("Finally 2");
  })
  .then((value) => {
    console.log("Then:", value);
  });