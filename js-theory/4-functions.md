
# ✅ Function Basics

```js
function sum(x) { // x ==> parameter
  return x + x;
}

sum(4); // 4 ==> argument
```

---

# ✅ Function Declaration vs Function Expression

* **Function Declaration**

  * Hoisted: ✅ YES
  * Name Required: ✅ YES

```js
sayHi(); // ✅ Works because it's hoisted

function sayHi() {
  console.log("Hi");
}
```

* **Function Expression**

  * Hoisted: ❌ NO
  * Name Required: ❌ NO

```js
sayHello(); // ❌ Error: Cannot access 'sayHello' before initialization

const sayHello = function () {
  console.log("Hello");
};
```

---

# ✅ Regular Function vs Arrow Function

### 🔹 Regular Function

* Has dynamic `this` (depends on how it's called)
* Hoisted: ✅
* Manual binding possible (`call`, `apply`, `bind`)
* Has `arguments` object
* Can be used as constructor

```js
function greet() {
  console.log("Hello", this.name);
}

const user = { name: "Sachin", greet };
user.greet(); // "Hello Sachin"
```

Constructor example:

```js
function Person(name) {
  this.name = name;
}

const p1 = new Person("Sachin"); // ✅ Works
```

---

### 🔹 Arrow Function

* Lexical `this` (inherits from parent scope)
* Not hoisted
* Cannot use `call`, `apply`, or `bind` to change `this`
* No `arguments` object
* Cannot be used as constructor

```js
const greetArrow = () => {
  console.log("Hello", this.name); // `this` from outer scope
};

greetArrow(); // In browser, likely "Hello undefined"
```

Constructor fail:

```js
const PersonArrow = (name) => {
  this.name = name;
};

const p2 = new PersonArrow("Sachin"); // ❌ TypeError
```

---

# ✅ First-Class & Higher-Order Functions

### 🔹 First-Class Functions

JavaScript allows:

* Storing functions in variables
* Passing functions as arguments
* Returning functions from functions

```js
const greet = function () {
  return "Hello!";
};

function run(fn) {
  console.log(fn());
}

run(greet); // "Hello!"
```

---

### 🔹 Higher-Order Functions

A function that:

* Accepts another function as argument
* OR returns a function

Example: `map`, `filter`, `reduce`

```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]
```

Custom higher-order function:

```js
function withLogging(fn) {
  return function (...args) {
    console.log("Calling function with", args);
    return fn(...args);
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3); // Logs args and returns 5
```

---

# ✅ IIFE (Immediately Invoked Function Expression)

Executes immediately and creates a private scope:

```js
(function () {
  const secret = "hidden";
  console.log("IIFE runs");
})(); // Logs: IIFE runs
```

🔸 **Use Cases:**

* Prevent variable pollution in global scope
* One-time setup logic
* ES5 Module Pattern (before ES6 `import/export`)

---

# ✅ Closure

A **closure** is a function that remembers variables from its outer lexical environment, even after that outer function has finished.

```js
function outer() {
  let counter = 0;
  return function () {
    counter++;
    return counter;
  };
}

const increment = outer();
increment(); // 1
increment(); // 2
```

🔸 **Use Cases:**
* Currying

---

# ✅ Real-World Use Cases of Functions (Advanced)

### 1. **Callback Functions**
### 2. **Promise & Async/Await**
### 3. **Debouncing & Throttling**
### 4. **Function Currying**
### 5. **Memoization**
