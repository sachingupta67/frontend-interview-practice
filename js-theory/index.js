// let obj = { name: 'John' };
// let weakMap = new WeakMap();
// weakMap.set(obj, 'Person');

// console.log(weakMap.has(obj)); 

// obj = null; 

// setTimeout(() => {
//   console.log(weakMap.has(obj));  
// }, 1000);

// const obj = { value: 10 };

// function calculate(add, multiply) {
//   return (this.value + add) * multiply;
// }

// const newObj = { value: 20 };

// console.log(calculate.call(obj, 5, 2));  //  
// console.log(calculate.apply(newObj, [3, 4])); 

// const boundCalc = calculate.bind(obj, 2); 
// console.log(boundCalc(3));


const obj = {
  name: "John",
  getName: function () {
    return this.name;
  },
};

const bound1 = obj.getName.bind({ name: "Frank" });
const bound2 = bound1.bind({ name: "Grace" });

console.log(bound1());
console.log(bound2());