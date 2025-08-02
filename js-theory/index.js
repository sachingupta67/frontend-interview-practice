// const obj = Object.freeze({
//   a: 1,
//   b: { c: 2 },
// });

// obj.b.c = 3; 
// obj.d = 4;

// console.log(obj);



// const userDetails = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   address: { city: "Bangalore", country: "USA" }
// }

// let cloneUserDetails = { ...userDetails };

// //Updating original object
// userDetails.age = 18;
// userDetails.address.city = "chennai";

// console.log(cloneUserDetails.age); 
// console.log(cloneUserDetails.address.city);



// function Animal() {
//   this.species = "Animal";
// }

// Animal.prototype.getSpecies = function() {
//   return this.species;
// };

// function Dog() {
//   this.species = "Dog";
// }

// Dog.prototype = new Animal();

// const dog = new Dog();
// console.log(dog.getSpecies());


// function A() {}
// function B() {}

// A.prototype = new B();

// const a = new A();
// console.log(a instanceof A);
// console.log(a instanceof B);


// function Person(name) {
//     this.name = name;
//     return { name: "John" };
// }

// const person = new Person("Alice");
// console.log(person.name);




// const obj = {
//   a: 1
// };

// console.log(obj.hasOwnProperty('a'));
// console.log(obj.hasOwnProperty('b'));

// const obj1 = {
//   hasOwnProperty: function() {
//     return 'return!';
//   },
//   a: 1
// };

// console.log(obj1.hasOwnProperty('a'));


// const obj1 = { a: 1 };
// const obj2 = Object.create(obj1);

// console.log(obj2.__proto__ === obj1);


// const obj = { a: 1, b: 2 };
// delete obj.a;
// console.log(obj.a); 
// console.log('a' in obj);