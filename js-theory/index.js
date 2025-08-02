// Question 1

// async function foo() {
//   console.log(1);
//   await Promise.resolve();
//   console.log(2);
// }

// foo();
// console.log(3);

// Question 2

// Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.reject("Error")])
//   .then((values) => console.log("Resolved:", values))
//   .catch((err) => console.log("Caught:", err));


// Promise.all([Promise.resolve(1), undefined, null])
//   .then((values) => console.log("Resolved:", values))
//   .catch((err) => console.log("Caught:", err));


// console.log("Start")
// new Promise((resolve, rej) => {
//     console.log("Promise1")
//     resolve("resolved")
//     console.log("Promise2")
// }).then(data => console.log(data))
// console.log("end")


// console.log('Start');
// setTimeout(() => {
//   console.log('Timeout');
// }, 0);
// Promise.resolve().then(() => {
//   console.log('Promise');
// });
// console.log('End');


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


// Promise.resolve(1)
//     .then((x) => x + 1)
//     .then((x) => {
//         throw new Error("An error occurred!");
//     })
//     .catch((err) => {
//         console.log(err.message);
//         return 5;
//     })
//     .then((x) => console.log(x));


// const promise = new Promise((resolve, reject) => {
//     resolve("First");
//     resolve("Second");
//     reject("Third");
// });

// promise
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));


// console.log('Start');

// async function foo() {
//   console.log('Foo Start');
//   await new Promise(resolve => setTimeout(resolve, 0));
//   console.log('Foo End');
// }

// foo().then(() => {
//   console.log('After Foo');
// });

// console.log('End')


// Promise.reject("Error")
//   .catch((err) => {
//     console.log("Caught:", err);
//     return "Recovered";
//   })
//   .finally(() => {
//     console.log("Finally 2");
//   })
//   .then((value) => {
//     console.log("Then:", value);
//   });