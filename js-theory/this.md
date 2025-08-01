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
