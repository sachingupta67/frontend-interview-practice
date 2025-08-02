Here’s a **clean, well-structured Markdown file** for your **JavaScript `this` keyword interview prep**. I’ve formatted it professionally, corrected typos, and added small clarifications to make it crystal clear.

---

````markdown
# JavaScript `this` Keyword

The **`this` keyword** in JavaScript:

- Refers to the **"owner" of the current execution context**.
- Its **value depends on *where* and *how* the function is called**, not where it is defined.

---

## 1. `this` in the Global Context

- **Global scope (non-strict mode)** → `this` refers to the **global object**.
- **Strict mode** → `this` is **`undefined`**.

**Examples:**

```js
console.log(this); 
// Browser: window
// Node.js: global

"use strict";
console.log(this); 
// undefined in strict mode
````

---

## 2. `this` in a Regular Function

* **Depends on how the function is called.**
* In **non-strict mode**, `this` defaults to the **global object** due to **this substitution**.
* In **strict mode**, `this` remains **undefined**.

```js
function hello() {
  console.log(this);
}

hello(); 
// Non-strict: global object
// Strict mode: undefined

window.hello(); 
// Browser: window object
```

---

## 3. `this` in an Object Method

* **When called as a method**, `this` refers to the **object before the dot**.

```js
const student = {
  name: "Sachin",
  getName: function () {
    console.log(this); // student object
  },
};

student.getName(); // { name: 'Sachin', getName: ƒ }
```

---

## 4. `this` in Arrow Functions

* **Arrow functions do not have their own `this`.**
* They **lexically inherit `this`** from the enclosing scope.

```js
const student = {
  name: "Sachin",
  getName: () => {
    console.log(this); // In browser: window (from global scope)
  },
};

student.getName();
```

---

## 5. `this` in Nested Functions

* **Regular nested functions** lose the outer `this`.
* **Arrow functions** inside methods can capture the outer `this`.

```js
const obj2 = {
  a: 10,
  x: function () {
    const y = () => {
      console.log(this); // obj2
    };
    y();
  },
};

obj2.x();
```

---

## 6. `this` in DOM Event Handlers

* In **regular functions**, `this` refers to the **DOM element** that received the event.
* In **arrow functions**, `this` is inherited from the surrounding lexical scope (often `window`).

```html
<button id="btn">Click Me</button>

<script>
document.getElementById("btn").addEventListener("click", function () {
  console.log(this);          // <button> element
  console.log(this.tagName);  // BUTTON
});

document.getElementById("btn").addEventListener("click", () => {
  console.log(this); // window (or undefined in strict mode)
});
</script>
```

---

## 7. Manual `this` Binding

* Use `.call()`, `.apply()`, or `.bind()` to **explicitly set `this`**.

```js
function greet() {
  console.log(this.name);
}

const obj = { name: "Charlie" };

greet.call(obj);   // Charlie
greet.apply(obj);  // Charlie

const bound = greet.bind(obj);
bound();           // Charlie
```

---

## 🔑 Key Takeaways

1. **Regular functions** → `this` depends on **how they are called**.
2. **Arrow functions** → `this` is **lexically inherited** from the surrounding scope.
3. **In classes/constructors** → `this` refers to the **new instance**.
4. **Event listeners** → `this` is the **element**, unless using arrow functions.
5. **Manual binding** → Use `.call()`, `.apply()`, `.bind()` to control `this`.

```


Here’s a Markdown version of your questions with answers hidden using a **toggle-style collapsible section**, perfect for use in a GitHub README or learning notes:

---

````md
# 🔍 JavaScript `this` & Execution Context — Real Interview Questions

---

## ✅ Question 1 (Asked in Amazon)

```js
var a = 10;

x();
y();
z(); // ReferenceError

function x() {
  var a = 20;
  console.log(this.a);
}
function y() {
  console.log(this.a);
}
const z = () => {
  console.log(this.a);
}
````

<details>
<summary>🧠 Answer</summary>

* `x()` → logs `10` → `this` is global → `this.a = 10`
* `y()` → same → `10`
* `z()` → ReferenceError → TDZ for `z`

</details>

---

## ✅ Question 2

```js
let a = 10;

x();
y();
z(); // ReferenceError

function x() {
  console.log(this.a);
}
function y() {
  console.log(this.a);
}
const z = () => {
  console.log(this.a);
}
```

<details>
<summary>🧠 Answer</summary>

* `x()` → `undefined` (in strict mode, `this` is `undefined`; in loose, `window.a = 10`)
* `y()` → same
* `z()` → ReferenceError if `z` is called before it's defined (`const` in TDZ)

</details>

---

## ✅ Question 3

```js
const myObject = {
  name: "Test",
  getFunctionName: function () {
    console.log(this.name);
  },
  getArrowFunctionName: () => {
    console.log(this.name);
  },
  updateArrowFunctionScope: function () {
    const innerArrowFunction = () => {
      console.log(this.name);
    };
    innerArrowFunction();
  },
};

myObject.getFunctionName();
myObject.getArrowFunctionName();
myObject.updateArrowFunctionScope();
```

<details>
<summary>🧠 Answer</summary>

* `getFunctionName()` → `"Test"` (regular function uses `this` as `myObject`)
* `getArrowFunctionName()` → `undefined` (arrow function uses outer `this`, which is global)
* `updateArrowFunctionScope()` → `"Test"` (arrow inside regular function captures `this` from outer)

</details>

---

## ✅ Question 4

```js
var doc = "Soni's frontend doc";
const obj = {
    doc:'soni',
    printName: function(){
        return this.doc;
    },
    printNameArrow: () => {
        return this.doc;
    },
    IIFE: (function(){
        return this.doc;
    })(),
    IIFEArrow: (() => {
        return this.doc;
    })()
};

console.log(obj.printName());
console.log(obj.printNameArrow());
console.log(obj.IIFE);
console.log(obj.IIFEArrow);
```

<details>
<summary>🧠 Answer</summary>

| Function           | Output                  | Why?                                          |
| ------------------ | ----------------------- | --------------------------------------------- |
| `printName()`      | `'soni'`                | Regular method → `this = obj`                 |
| `printNameArrow()` | `"Soni's frontend doc"` | Arrow → `this = global`, `doc` from `var doc` |
| `IIFE`             | `"Soni's frontend doc"` | Regular IIFE → global `this`                  |
| `IIFEArrow`        | `"Soni's frontend doc"` | Arrow IIFE → lexical `this`, still global     |

</details>

---

✅ **Pro Tip:** Always pay attention to how functions are defined and invoked. Arrow functions do **not** bind their own `this`!

Would you like a downloadable `.md` file or this exported as a GitHub Gist?

```
```
