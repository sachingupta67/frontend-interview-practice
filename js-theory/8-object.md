| Concept              | Definition                                                             | Example                      |
| -------------------- | ---------------------------------------------------------------------- | ---------------------------- |
| **Object**           | A non-primitive data type used to store collections of key-value pairs | `{name: "Sachin"}`           |
| **Property**         | A key-value pair inside an object                                      | `user.name = "Sachin"`       |
| **Method**           | A function stored as an object property                                | `user.greet = function() {}` |
| **Dot Notation**     | Accessing property using dot (`.`)                                     | `user.age`                   |
| **Bracket Notation** | Accessing property using string key                                    | `user["age"]`                |
| **Dynamic Property** | Property name set at runtime                                           | `user[key] = "value"`        |



# 🧱 Ways to Create an Object in JavaScript

JavaScript provides multiple ways to create and structure objects. Here's a breakdown of the most common and interview-relevant techniques:

---

### ✅ 1. **Object Literal (Most Common)**

```js
const student = {
  name: "Sachin",
};
```

* 🔹 Simple and concise
* 🔹 Best for creating one-off objects

---

### ✅ 2. **Using `new Object()`**

```js
const student = new Object();
student.name = "Sachin";
```

* 🔹 Slightly more verbose
* 🔹 Same result as object literal but less preferred in modern code

---

### ✅ 3. **Using `Object.create()`**

```js
const prototype = {
  greet() {
    console.log("Hello");
  },
};

const student = Object.create(prototype);
student.name = "Sachin";

student.greet(); // 👉 "Hello"
```

* 🔹 Allows you to set a custom prototype
* 🔹 Useful for prototype-based inheritance without `class`

---

### ✅ 4. **Using Constructor Function**

```js
function Student(name) {
  this.studentName = name;
}

const sachin = new Student("hello");
sachin.age = "78";

console.log(sachin);
// 👉 Student { studentName: 'hello', age: '78' }
```

* 🔹 Common in pre-ES6 codebases
* 🔹 Each instance gets its own properties
* 🔹 Methods should be added to `Student.prototype` for memory efficiency

---

### ✅ 5. **Using ES6 Classes**

```js
class Student {
  constructor(name) {
    this.name = name;
  }

  getName() {
    console.log(this.name);
  }

  greet() {
    console.log(`Hi ${this.name}, welcome!`);
  }
}

const x = new Student("Sachin");
x.greet(); // 👉 "Hi Sachin, welcome!"
```

* 🔹 Syntactic sugar over prototypal inheritance
* 🔹 Cleaner and more intuitive for object-oriented design
* 🔹 Methods are shared via the prototype

---

## 🧠 Summary Comparison

| Method               | Prototype Support           | Shared Methods            | Use Case                        |
| -------------------- | --------------------------- | ------------------------- | ------------------------------- |
| Object Literal       | ❌ (uses `Object.prototype`) | ❌                         | Simple object                   |
| `new Object()`       | ❌                           | ❌                         | Rarely used                     |
| `Object.create()`    | ✅                           | ✅                         | Prototype-based inheritance     |
| Constructor Function | ✅                           | ✅ (if added to prototype) | Legacy/class-like instantiation |
| ES6 Class            | ✅                           | ✅                         | Modern OOP-style development    |





# 🧰 3. Common Object Operations in JavaScript

Working with objects is a fundamental skill in JavaScript. Here's a quick reference for common operations:

| **Operation**         | **Example**                   | **Description**                                                |
| --------------------- | ----------------------------- | -------------------------------------------------------------- |
| **Access property**   | `user.name` or `user["name"]` | Retrieve a value from an object using dot or bracket notation. |
| **Add property**      | `user.email = "a@b.com"`      | Adds a new key-value pair to the object.                       |
| **Delete property**   | `delete user.age`             | Removes a key-value pair from the object.                      |
| **Check existence**   | `"name" in user`              | Returns `true` if the property exists.                         |
| **Loop through keys** | `for (let key in user)`       | Iterates over all enumerable keys in the object.               |
| **Get keys**          | `Object.keys(user)`           | Returns an array of the object's own keys.                     |
| **Get values**        | `Object.values(user)`         | Returns an array of the object's own values.                   |
| **Get entries**       | `Object.entries(user)`        | Returns an array of `[key, value]` pairs.                      |

---

### ✅ Example

```js
const user = {
  name: "Sachin",
  age: 30,
};

// Access
console.log(user.name);            // "Sachin"
console.log(user["age"]);          // 30

// Add
user.email = "a@b.com";

// Delete
delete user.age;

// Check
console.log("name" in user);       // true
console.log("age" in user);        // false

// Loop
for (let key in user) {
  console.log(key, user[key]);
}

// Keys / Values / Entries
console.log(Object.keys(user));    // ["name", "email"]
console.log(Object.values(user));  // ["Sachin", "a@b.com"]
console.log(Object.entries(user)); // [["name", "Sachin"], ["email", "a@b.com"]]
```


# 🧱 Object Destructuring

```js
const user = { name: "Sachin", age: 25 };
const { name, age } = user;

```

# 🧱 This in Obj with arrow function & regular function
 - in the arrow function
   - it takes value from its lexical scope
 
 - in the regular function
  - it has own this ,

Note - for more check 6-this.md file

Here’s a complete and clear markdown document explaining **shallow vs deep cloning** in JavaScript, including all your versions, behavior, caveats, and best practices:

---

# 🔁 JavaScript Object Copying: Shallow vs Deep Cloning



## ✅ Original Object

```js
const obj1 = {
  name: "sachin",
  location: {
    city: "noida"
  }
};
```

---

## ❌ Version 1: Direct Assignment (Reference Copy)

```js
const obj2 = obj1; // Not a copy — it's a reference

obj2.name = "pavan";
obj2.location.city = "delhi";

console.log(obj1, obj2);
```

### 🔍 What happens:

* Both `obj1` and `obj2` point to the **same memory location**.
* Any changes to `obj2` (even nested ones) will reflect in `obj1`.

### ❗Why this is bad:

* It's not a copy, it's just an **alias**.
* Very risky in large apps — leads to side effects and bugs.

---

## ⚠️ Version 2: Shallow Copy using `{ ...spread }`

```js
const obj2 = { ...obj1 };

obj2.name = "pavan";               // Safe – `obj1.name` unaffected
obj2.location.city = "delhi";      // ❗Affects `obj1.location.city`

console.log(obj1, obj2);
```

### 🔍 What happens:

* Top-level properties (like `name`) are copied.
* Nested objects (like `location`) are **still shared** between the copies.

### ❗Limitation:

* This is a **shallow copy** — only copies the outer layer.
* Nested data structures remain **referenced**.

---

## ✅ Version 3: Deep Copy using `JSON.parse(JSON.stringify(...))`

```js
const obj2 = JSON.parse(JSON.stringify(obj1));

obj2.name = "pavan";
obj2.location.city = "delhi";

console.log(obj1, obj2);
```

### ✅ Pros:

* Creates a true **deep copy** — even nested objects are copied.
* Changes in `obj2` do **not** affect `obj1`.

### ❗Cons:

* ❌ Loses functions, `Date`, `Map`, `Set`, `undefined`, RegExp, etc.
* ❌ Will not work with **circular references**.
* Only works well with **pure JSON-compatible objects**.

---

## ✅✅ Version 4: Deep Copy using `structuredClone()`

```js
const obj2 = structuredClone(obj1);

obj2.name = "pavan";
obj2.location.city = "delhi";

console.log(obj1, obj2);
```

### ✅ Pros:

* **Deep copy** built into modern JavaScript.
* Supports **functions**, `Date`, `Map`, `Set`, **circular references**, etc.
* Much safer and more robust than `JSON.parse(JSON.stringify(...))`.

### ❗Cons:

* Only available in **modern browsers / Node 17+**.
* May need a polyfill for older environments.

---

## 🧠 Summary Table

| Method                         | Copy Type      | Nested Copy | Supports Functions/Dates? | Safe for Complex Objects? |
| ------------------------------ | -------------- | ----------- | ------------------------- | ------------------------- |
| `const obj2 = obj1`            | Reference      | ❌           | ✅                         | ❌                         |
| `{ ...obj1 }`                  | Shallow        | ❌           | ✅ (top-level only)        | ❌                         |
| `JSON.parse(JSON.stringify())` | Deep (limited) | ✅           | ❌                         | ❌                         |
| `structuredClone(obj1)`        | Deep (native)  | ✅           | ✅                         | ✅                         |

---

## 🚀 Bonus: Deep Clone with `lodash.cloneDeep()`

```js
import cloneDeep from 'lodash/cloneDeep';

const obj2 = cloneDeep(obj1);
```

* ✅ Reliable and works with complex data.
* ✅ Works in older environments.
* ❌ Requires a library (lodash).

---

## 📌 When to Use What?

| Scenario                             | Recommended Approach                        |
| ------------------------------------ | ------------------------------------------- |
| Simple objects                       | `{ ...obj }` is fine                        |
| Deep/nested object without functions | `JSON.parse(JSON.stringify())`              |
| Complex objects or circular refs     | `structuredClone()` or `lodash.cloneDeep()` |



Here’s a clear and concise comparison of `Object.freeze()` vs `Object.seal()` with explanations, examples, and a summary table — perfect for interview prep and practical reference.

---

# 🧊 `Object.freeze()` vs 🛡️ `Object.seal()` in JavaScript

Both `Object.freeze()` and `Object.seal()` are used to control **mutability** of objects — but they differ in what they **allow or restrict**.

---

## ✅ 1. `Object.freeze(obj)` — ❄️ Immutable Object

### 🔒 What it does:

* Prevents **adding**, **deleting**, or **changing** any property.
* Makes the entire object **read-only** (including existing properties).
* Shallow — nested objects are **not frozen**.

### 📦 Example:

```js
const user = Object.freeze({
  name: "Sachin",
  age: 30
});

user.name = "Pavan";      // ❌ Ignored silently (or throws in strict mode)
user.email = "a@b.com";   // ❌ Cannot add
delete user.age;          // ❌ Cannot delete

console.log(user); // { name: "Sachin", age: 30 }
```

---

## ✅ 2. `Object.seal(obj)` — 🛡️ Sealed Object

### 🔒 What it does:

* Prevents **adding** or **deleting** properties.
* Allows **modifying existing properties**.
* Also shallow — nested objects are not sealed.

### 📦 Example:

```js
const user = Object.seal({
  name: "Sachin",
  age: 30
});

user.name = "Pavan";       // ✅ Allowed
user.email = "a@b.com";    // ❌ Cannot add
delete user.age;           // ❌ Cannot delete

console.log(user); // { name: "Pavan", age: 30 }
```

---

## 🧠 Shallow Behavior (Common to Both)

```js
const user = {
  name: "Sachin",
  address: {
    city: "Noida"
  }
};

Object.freeze(user);

user.address.city = "Delhi"; // ✅ This still works (nested is not frozen)

console.log(user.address.city); // "Delhi"
```

To deeply freeze/seal, you'd need recursion or a utility function.

---

## 📋 Summary Table

| Feature                       | `Object.freeze()`        | `Object.seal()`          |
| ----------------------------- | ------------------------ | ------------------------ |
| Add new properties            | ❌ Not allowed            | ❌ Not allowed            |
| Delete existing properties    | ❌ Not allowed            | ❌ Not allowed            |
| Modify existing properties    | ❌ Not allowed            | ✅ Allowed                |
| Object becomes non-extensible | ✅ Yes                    | ✅ Yes                    |
| Shallow or Deep?              | Shallow (nested mutable) | Shallow (nested mutable) |
| Can change property values?   | ❌ No                     | ✅ Yes                    |

---

## 🔍 How to Check

```js
Object.isFrozen(obj); // true or false
Object.isSealed(obj); // true or false
```

---

## 🛠 When to Use What?

| Situation                                   | Use                                                         |
| ------------------------------------------- | ----------------------------------------------------------- |
| You want a **completely immutable** object  | `Object.freeze()`                                           |
| You want to allow updates but no add/delete | `Object.seal()`                                             |
| You want deep immutability                  | Use a **recursive freeze** or utility library like `lodash` |


🧠 What is a Prototype in JavaScript?
- every object in JS has hidden internal property  called [prototype]
- it points to another object

How to access
 1. Object.getPrototypeOf(obj)
 2. obj.__proto__ // (older, discouraged syntax)

 This prototype acts as a fallback source for properties and methods 


## Important - DeepFreeze (nested level)

```js
const deepFreeze = function (obj) {
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    const value = obj[key];
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });

  return Object.freeze(obj);
};


```

## Important __proto__ and prototype comparision

```js
const obj = {};
console.log(obj.__proto__ === Object.prototype); // ✅ true

```



---

## 🔒 Object.freeze and Nested Mutability

```js
const obj = Object.freeze({
  a: 1,
  b: { c: 2 },
});

obj.b.c = 3; 
obj.d = 4;

console.log(obj);
````

<details>
<summary>▶️ Output Explanation</summary>

* `Object.freeze()` **only does a shallow freeze**.
* So `obj.b.c = 3` ✅ Works (mutates nested object).
* `obj.d = 4` ❌ Ignored (cannot add new properties at root).

📌 Output:

```js
{ a: 1, b: { c: 3 } }
```

</details>

---

## 📤 Shallow Copy via Spread Operator

```js
const userDetails = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
  address: { city: "Bangalore", country: "USA" }
}

let cloneUserDetails = { ...userDetails };

userDetails.age = 18;
userDetails.address.city = "chennai";

console.log(cloneUserDetails.age); 
console.log(cloneUserDetails.address.city);
```

<details>
<summary>▶️ Output Explanation</summary>

* `cloneUserDetails.age` → `25` ✅ (primitive copied)
* `cloneUserDetails.address.city` → `"chennai"` ❗ (because address is **shared reference**)

📌 Output:

```js
25
chennai
```

</details>

---

## 🐶 Prototypal Inheritance with Function Constructors

```js
function Animal() {
  this.species = "Animal";
}

Animal.prototype.getSpecies = function() {
  return this.species;
};

function Dog() {
  this.species = "Dog";
}

Dog.prototype = new Animal();

const dog = new Dog();
console.log(dog.getSpecies());
```

<details>
<summary>▶️ Output Explanation</summary>

* `dog.getSpecies()` comes from `Animal.prototype`
* `this.species = "Dog"` from `Dog` constructor overrides it

📌 Output:

```js
Dog
```

</details>

---

## 🔁 instanceof and Prototype Inheritance

```js
function A() {}
function B() {}

A.prototype = new B();

const a = new A();
console.log(a instanceof A);
console.log(a instanceof B);
```

<details>
<summary>▶️ Output Explanation</summary>

* `a instanceof A` → ✅ `true`
* `a instanceof B` → ✅ `true` (because A’s prototype is an instance of B)

📌 Output:

```js
true
true
```

</details>

---

## 👤 Constructor Function Returning Object

```js
function Person(name) {
  this.name = name;
  return { name: "John" };
}

const person = new Person("Alice");
console.log(person.name);
```

<details>
<summary>▶️ Output Explanation</summary>

* When a **constructor explicitly returns an object**, that object replaces the instance.
* So `person.name = "John"` from the returned object.

📌 Output:

```js
John
```

</details>

---

## ✅ hasOwnProperty Overriding

```js
const obj = {
  a: 1
};

console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('b'));

const obj1 = {
  hasOwnProperty: function() {
    return 'return!';
  },
  a: 1
};

console.log(obj1.hasOwnProperty('a'));
```

<details>
<summary>▶️ Output Explanation</summary>

* First part:

  * `obj.hasOwnProperty('a')` → `true`
  * `obj.hasOwnProperty('b')` → `false`

* Second part:

  * `obj1.hasOwnProperty` is **overridden**, so behaves differently.

📌 Output:

```js
true
false
return!
```

</details>

---

## 🧬 Object.create and Prototype Link

```js
const obj1 = { a: 1 };
const obj2 = Object.create(obj1);

console.log(obj2.__proto__ === obj1);
```

<details>
<summary>▶️ Output Explanation</summary>

* `obj2` inherits from `obj1`, so its `__proto__ === obj1` ✅

📌 Output:

```js
true
```

</details>

---

## ❌ delete Operator and `in` Operator

```js
const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj.a); 
console.log('a' in obj);
```

<details>
<summary>▶️ Output Explanation</summary>

* `delete obj.a` removes the property.
* `'a' in obj` checks if the key still exists.

📌 Output:

```js
undefined
false
```

</details>


```


## 🔍 Difference Table: `call` vs `apply` vs `bind`

| Feature              | `call`                          | `apply`                           | `bind`                                  |
| -------------------- | ------------------------------- | --------------------------------- | --------------------------------------- |
| Executes Immediately | ✅ Yes                           | ✅ Yes                             | ❌ No (returns new function)             |
| Arguments Format     | Individual: `fn(arg1, arg2)`    | Array: `fn([arg1, arg2])`         | Individual: `fn(arg1)` (can be partial) |
| `this` Context Set   | ✅ Yes                           | ✅ Yes                             | ✅ Yes (permanently)                     |
| Returns              | Return value of function        | Return value of function          | New bound function                      |
| Use Case             | Quick invoke with custom `this` | Same as `call`, but args in array | Store later use with fixed `this`       |

---

## ✅ Examples

### 🔹 `call` – invoke with custom `this`, args individually

```js
function greet(greeting) {
  console.log(`${greeting}, ${this.name}`);
}
greet.call({ name: "Alice" }, "Hello");
// Output: Hello, Alice
```

---

### 🔹 `apply` – same as `call`, but args in an array

```js
greet.apply({ name: "Bob" }, ["Hi"]);
// Output: Hi, Bob
```

---

### 🔹 `bind` – doesn't call immediately, returns new function

```js
const boundGreet = greet.bind({ name: "Charlie" }, "Hey");
boundGreet();
// Output: Hey, Charlie
```


### ✅ `WeakMap` vs `WeakSet` – Simple Comparison Table

| Feature                 | **WeakMap**                                                              | **WeakSet**                                                |
| ----------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 🧱 **What it stores**   | Pairs → Object (as key) and any value                                    | Only objects (no key-value, just values)                   |
| 🎯 **Purpose**          | Attach **secret info** to objects                                        | Keep **track** of which objects you’ve seen                |
| 🧍 **Only objects?**    | ✅ Yes, only objects as keys                                              | ✅ Yes, only objects                                        |
| 🧹 **Auto cleanup?**    | ✅ Yes, when object is removed from code, its entry is auto removed       | ✅ Yes, when object is removed from code, it's auto removed |
| 🔁 **Can you loop it?** | ❌ No – You can’t see what’s inside                                       | ❌ No – You can’t loop over it                              |
| 🧰 **Real-world use**   | Store **private user data** safely (like passwords)                      | Track which **DOM elements** have been visited             |
| 🧪 **Simple Example**   | `weakMap.set(user, "loggedIn")`<br>`user = null` → entry is auto deleted | `weakSet.add(obj)`<br>`obj = null` → it will be forgotten  |

---

### 🧩 Code Examples in Simple Words

#### 🔹 `WeakMap` – Like a **secret label** on an object:

```js
const weakMap = new WeakMap();

let user = { name: "Sachin" };
weakMap.set(user, "Logged In"); // Add secret info

user = null; // Object gone
// WeakMap will automatically forget the secret
```

#### 🔹 `WeakSet` – Like a **guest list**:

```js
const weakSet = new WeakSet();

let person = { name: "Rahul" };
weakSet.add(person); // Add to guest list

person = null; // Person leaves
// WeakSet will automatically remove them
```

---

### 🧠 Easy Analogy

| Concept     | Analogy Example                                                                                                               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **WeakMap** | A **locker** where key is a person (object), and value is their secret. When the person leaves, the locker is auto-emptied.   |
| **WeakSet** | A **party guest list** where you add people (objects). If they leave and you forget them, they’re auto-removed from the list. |


- rest vs spread