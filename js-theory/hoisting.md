# Hosting
 - moving all function and variable declaration on the top of their scope before running the code
 - function and var declaration are hoisted
 - let or const are hoisted too - but stayed in Temporal Dead Zone

# Temporal Dead Zone
 - its applicable for let and const only
 - its a time between hosting and actual declaration in the coed
 - we can't access before initilisation if we do so we will get 'reference error'

````md
# JavaScript Output Prediction Snippets

This collection includes commonly asked JavaScript interview questions covering:
- Hoisting
- Closures
- Scopes
- TDZ (Temporal Dead Zone)
- `delete` operator
- `hasOwnProperty` override
- Function and Variable Hoisting
- Destructuring
- Try-Catch-Finally behavior

Use this to test yourself. Output is hidden — click to reveal and learn.

---

## 1. Hoisting with `var` and `let`

```js
function Example() {
    let y;
    console.log(x, y);
    if (true) {
        var x = 10; 
        let y = 10; 
        console.log(x, y);
    }
    console.log(x, y);
}
Example();
````

<details>
<summary>🔍 Output & Explanation</summary>

```
undefined undefined
10 10
10 undefined
```

* `var x` is hoisted to the top of the function.
* `let y` has block scope; inner `y` is separate from the outer `y`.

</details>

---

## 2. Variable Shadowing + Hoisting Inside Nested Function

```js
var p = 1;
function outerFn() {
    var p = 2;
    function innterFn() {
        p++; // using `p` before declaration → hoisted but uninitialized
        console.log(p);
        var p = 3;
        console.log(p);
    }
    innterFn();
    console.log(p);
}
outerFn();
```

<details>
<summary>🔍 Output & Explanation</summary>

```
NaN
3
2
```

* Inside `innterFn`, `var p` shadows the outer `p`. It’s hoisted but initialized as `undefined`, so `p++` becomes `undefined++` → `NaN`.

</details>

---

## 3. Try-Catch-Finally Behavior with `return`

```js
function func() {
    try {
        console.log(1);
        return;
    } catch (e) {
        console.log(2);
    } finally {
        console.log(3);
    } 
    console.log(4);
}
func();
```

<details>
<summary>🔍 Output & Explanation</summary>

```
1
3
```

* `finally` always runs even if `return` is in `try`.
* `console.log(4)` is unreachable.

</details>

---

## 4. Hoisting Function Declaration Inside Another Function

```js
function outer() {
    console.log(a);
    var a = 10;
    function inner() {
        console.log(a);
        return 10;
        function a() {
            var a = 10;
        }
    }
    inner();
}
outer();
```

<details>
<summary>🔍 Output & Explanation</summary>

```
undefined
[Function: a]
```

* First log: `a` is hoisted and undefined.
* Inside `inner`, `function a()` is hoisted, shadowing outer `a`.

</details>

---

## 5. Global vs Function Scoped Variables

```js
var name = "test";

function callName() {
    name = 'test2';
    console.log(name);
}
callName();
console.log(name);
```

<details>
<summary>🔍 Output & Explanation</summary>

```
test2
test2
```

* Assignment to global `name` since there’s no local `var/let/const` inside function.

</details>

---

## 6. Variable Shadowing with `var`

```js
var name = "test";

function callName() {
    var name = 'test2';
    console.log(name);
}
callName();
console.log(name);
```

<details>
<summary>🔍 Output & Explanation</summary>

```
test2
test
```

* Function `name` shadows global `name`.

</details>

---

## 7. Hoisting: `var` vs `let`/`const`

```js
console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
```

<details>
<summary>🔍 Output & Explanation</summary>

```
undefined
ReferenceError: Cannot access 'b' before initialization
```

* `var` is hoisted with value `undefined`.
* `let` and `const` are hoisted but in TDZ (Temporal Dead Zone).

</details>

---

## 8. Delete Object Property

```js
const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj.a);
console.log('a' in obj);
```

<details>
<summary>🔍 Output & Explanation</summary>

```
undefined
false
```

* `delete` removes the property entirely.

</details>

---

## 9. Overridden `hasOwnProperty` Causes Confusion

```js
const obj1 = {
  hasOwnProperty: function() {
    return 'return!';
  },
  a: 1
};

console.log(obj1.hasOwnProperty('a'));
```

<details>
<summary>🔍 Output & Explanation</summary>

```
return!
```

* Custom method overrides the native one.
* Use `Object.prototype.hasOwnProperty.call(obj1, 'a')` instead.

</details>

---

## 10. Native `hasOwnProperty`

```js
const obj1 = {
  a: 1
};

console.log(obj1.hasOwnProperty('a'));
```

<details>
<summary>🔍 Output & Explanation</summary>

```
true
```

* Standard behavior: own properties are detected correctly.

</details>

---

## 11. Destructuring with Default Values

```js
const { a: x = 10, b: y = 20 } = { a: undefined, b: null };
console.log(x, y);
```

<details>
<summary>🔍 Output & Explanation</summary>

```
10 null
```

* `undefined` triggers default value.
* `null` does not — it's an assigned value.

</details>

---

## 12. Function Hoisting vs Expression Hoisting

```js
console.log(foo());

function foo() {
  return "foo called";
}

console.log(bar());

var bar = function () {
  return "bar called";
};
```

<details>
<summary>🔍 Output & Explanation</summary>

```
foo called
TypeError: bar is not a function
```

* Function declarations are fully hoisted.
* Function expressions assigned to `var` are hoisted as `undefined`.

</details>

---

```
