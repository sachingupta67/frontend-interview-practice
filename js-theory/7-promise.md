# 🔐 Promise

* It's an **object** representing the **eventual completion or failure** of any asynchronous operation.
* It helps to write **better async code** compared to callbacks.

---

### ✅ States of a Promise

* `pending` → Initial state
* `fulfilled` → Operation completed successfully
* `rejected` → Operation failed

---

### 🔒 Important Notes

* **Promise response is immutable** → Once resolved or rejected, it **can’t be changed**
* A promise is **resolved only once** → Subsequent calls to `resolve` or `reject` are ignored

---

### 📌 Syntax Example:

```js
const promise = new Promise((resolve, reject) => {
  let success = true;
  
  if (success) {
    resolve("Data fetched");     // fulfilled
  } else {
    reject("Error occurred");    // rejected
  }
});

promise
  .then((res) => console.log("✅", res))
  .catch((err) => console.log("❌", err));
```

---

# 🔗 Promise Chaining

* Helps to solve the issue of **Callback Hell**
* We use **`.then()` chaining** to write sequential logic
* During chaining, we must **`return` data** to pass it to the next `.then()`

---

### 🔗 Chaining Syntax Example:

```js
fetchUser()
  .then(user => {
    console.log("User:", user);
    return fetchProfile(user); // pass to next
  })
  .then(profile => {
    console.log("Profile:", profile);
    return fetchPosts(profile); // pass to next
  })
  .then(posts => {
    console.log("Posts:", posts);
  })
  .catch(err => {
    console.error("Something went wrong:", err);
  });
```



Absolutely! Here's a **clean, real-world-like example** of Promise chaining, showing:

* How `.then()` chaining works
* What happens if an error occurs
* Why the **final `.then()`** runs no matter what

Perfect for documenting and interviews 👇

---

## 📘 Promise Chaining with `.then()`, `.catch()`, and Final Cleanup

```js
function placeOrder() {
  return Promise.resolve("OrderID_123");
}

function proceedToPayment(orderId) {
  return Promise.resolve(`Payment done for ${orderId}`);
}

function showOrderSummary(paymentInfo) {
  return Promise.resolve(`Summary: ${paymentInfo}`);
}

function showError(error) {
  console.error("❌ Error:", error);
}

// Start the promise chain
placeOrder()
  .then((orderId) => {
    console.log("✅ Order Placed:", orderId);
    return proceedToPayment(orderId); // Pass to next
  })
  .then((paymentInfo) => {
    console.log("💳", paymentInfo);
    return showOrderSummary(paymentInfo); // Pass to next
  })
  .then((summary) => {
    console.log("📦", summary);
  })
  .catch((error) => {
    showError(error); // Handles any error in the chain from above
  })
  .then(() => {
    console.log("✅ Thank you for shopping!"); // Always runs (even if error occurred)
  });
```

---

### 🧾 Output (Success Case):

```
✅ Order Placed: OrderID_123
💳 Payment done for OrderID_123
📦 Summary: Payment done for OrderID_123
✅ Thank you for shopping!
```

---

### 🔥 Output (If one step fails — simulate by rejecting in proceedToPayment):

```js
function proceedToPayment(orderId) {
  return Promise.reject("Payment failed");
}
```

```
✅ Order Placed: OrderID_123
❌ Error: Payment failed
✅ Thank you for shopping!
```

---

### ✅ Key Learnings:

| Concept                          | Meaning                                                        |
| -------------------------------- | -------------------------------------------------------------- |
| `.then()`                        | Runs on success and returns to the next `.then()`              |
| `.catch()`                       | Catches any error in the chain (even from the first `.then()`) |
| Final `.then()` after `.catch()` | Always runs — great for final messages or cleanup              |



# 🔗 JavaScript Promise APIs (with Example: P1 → 3s, P2 → 1s, P3 → 4s)

---

### 🧪 Example Setup:

```js
const P1 = new Promise((res) => setTimeout(() => res("P1 done"), 3000));
const P2 = new Promise((res) => setTimeout(() => res("P2 done"), 1000));
const P3 = new Promise((res) => setTimeout(() => res("P3 done"), 4000));
```

---

## ✅ `Promise.all([...])`

* ✔️ All Promises must succeed
* ❌ If **any one fails**, it **immediately rejects**
* 🧾 **Returns:** `Array` of resolved values (in order of input)

```js
Promise.all([P1, P2, P3])
  .then((res) => console.log("✅ All:", res))      // ["P1 done", "P2 done", "P3 done"]
  .catch((err) => console.log("❌ Error:", err));  // stops on first rejection
```

🧠 **Use Case:** When all results are required (e.g., fetch multiple APIs in parallel).

---

## ✅ `Promise.allSettled([...])`

* ✅ Waits for **all promises** to settle (**success or failure**)
* 🧾 **Returns:** `Array` of **objects** with `status`, and either `value` or `reason`

```js
Promise.allSettled([P1, P2, P3])
  .then((results) => console.log("📦 Settled:", results));
```

📦 Example output:

```js
[
  { status: "fulfilled", value: "P1 done" },
  { status: "fulfilled", value: "P2 done" },
  { status: "rejected", reason: "Some Error" }
]
```

🧠 **Use Case:** When you care about **all results**, including failed ones.

---

## ✅ `Promise.race([...])`

* ✅ Resolves/rejects with the **first promise to settle** (success or error)
* 🧾 **Returns:** **Single value** (resolved or rejected)

```js
Promise.race([P1, P2, P3])
  .then((res) => console.log("🏁 Race winner:", res))  // whichever settles first
  .catch((err) => console.log("❌ Race error:", err));
```

🧠 **Use Case:** Useful for **timeouts**, retry logic, or fastest response.

---

## ✅ `Promise.any([...])`

* ✅ Resolves with the **first fulfilled** promise
* ❌ If **all fail**, throws an **AggregateError**
* 🧾 **Returns:** **Single fulfilled value** (not an array)

```js
Promise.any([P1, P2, P3])
  .then((res) => console.log("🎯 First Success:", res)) 
  .catch((err) => console.log("❌ All Failed:", err)); // AggregateError if all fail
```

🧠 **Use Case:** When you want the **first success**, and don’t care who fails.

---

## 📊 Summary Table (with Return Types)

| API                    | Success Case                         | Failure Case                            | Return Type     |
| ---------------------- | ------------------------------------ | --------------------------------------- | --------------- |
| `Promise.all()`        | ✅ All resolve → array of values      | ❌ Any one rejects → immediately rejects | `Array`         |
| `Promise.allSettled()` | ✅ Always resolves → array of results | ✅ Never rejects                         | `Array<Object>` |
| `Promise.race()`       | ✅ First to settle (resolve/reject)   | ❌ Same → first error wins               | `Any`           |
| `Promise.any()`        | ✅ First fulfilled wins               | ❌ All fail → `AggregateError`           | `Any`           |



Perfect base! Let me now improve the structure and make your **`async/await` explanation clean and complete**, using your own words but making it fully **interview-ready and readable**, with correct behavior and example:

---

# ⏳ `async/await` in JavaScript

---

### ✅ `async`

* It's a **keyword** used to declare an **asynchronous function**
* It **always returns a Promise** — even if you return a normal value

```js
async function sayHi() {
  return "Hello";
}

sayHi().then(res => console.log(res)); // Output: Hello
```

* If you throw an error inside an `async` function → it becomes a rejected promise

```js
async function errorFn() {
  throw "Something went wrong";
}

errorFn().catch(err => console.log(err)); // Output: Something went wrong
```

---

### ✅ `await`

* `await` is used **only inside an `async` function**
* It **pauses** the function execution until the promise resolves or rejects
* It returns the **resolved value** of the Promise

```js
async function getData() {
  const res = await Promise.resolve("Data Loaded");
  console.log(res); // Output: Data Loaded
}
```

---

### ⚠️ Things to Remember

* `await` works only inside `async` functions
* If the awaited promise rejects and you don’t catch it, it will throw an uncaught error
* Use `try...catch` for handling rejections

```js
async function fetchData() {
  try {
    const res = await fetch("invalid-url");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("❌ Error:", err);
  }
}
```


## 🔍 JavaScript Async/Await & Promise Interview Questions

*(Answers are hidden in collapsible-style format for better practice)*

---

### ✅ **Question 1**

```js
async function foo() {
  console.log(1);
  await Promise.resolve();
  console.log(2);
}

foo();
console.log(3);
```

<details>
<summary>🔽 Show Output & Explanation</summary>

🖨️ **Output:**

```
1  
3  
2
```

🧠 **Explanation:**

* `1` prints synchronously.
* `await Promise.resolve()` pauses `foo()` and schedules the rest in **microtask**.
* So `console.log(3)` runs next (synchronous).
* Then `console.log(2)` runs after `await`.

</details>

---

### ✅ **Question 2**

```js
Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.reject("Error")])
  .then((values) => console.log("Resolved:", values))
  .catch((err) => console.log("Caught:", err));
```

<details>
<summary>🔽 Show Output & Explanation</summary>

🖨️ **Output:**

```
Caught: Error
```

🧠 **Explanation:**

* `Promise.all` fails **immediately** if any promise rejects.
* So `.catch` is triggered with `"Error"`.

</details>

---

### ✅ **Question 3**

```js
Promise.all([Promise.resolve(1), undefined, null])
  .then((values) => console.log("Resolved:", values))
  .catch((err) => console.log("Caught:", err));
```

<details>
<summary>🔽 Show Output & Explanation</summary>

🖨️ **Output:**

```
Resolved: [1, undefined, null]
```

🧠 **Explanation:**

* `undefined` and `null` are not promises → they are wrapped in `Promise.resolve(...)` by default.
* All succeed → returns array as-is.

</details>

---

### ✅ **Question 4**

```js
console.log("Start");
new Promise((resolve, rej) => {
    console.log("Promise1");
    resolve("resolved");
    console.log("Promise2");
}).then(data => console.log(data));
console.log("end");
```

<details>
<summary>🔽 Show Output & Explanation</summary>

🖨️ **Output:**

```
Start  
Promise1  
Promise2  
end  
resolved
```

🧠 **Explanation:**

* All code inside `new Promise(...)` runs **immediately** (synchronously).
* `.then()` runs later in **microtask queue**.

</details>

---

### ✅ **Question 5**

```js
console.log('Start');
setTimeout(() => {
  console.log('Timeout');
}, 0);
Promise.resolve().then(() => {
  console.log('Promise');
});
console.log('End');
```

<details>
<summary>🔽 Show Output & Explanation</summary>

🖨️ **Output:**

```
Start  
End  
Promise  
Timeout
```

🧠 **Explanation:**

* `setTimeout` → **macrotask**
* `Promise.then` → **microtask**
* Microtasks run **before** macrotasks after call stack is empty.

</details>

---

### ✅ **Question 6**

```js
console.log('Start');

setTimeout(() => {
  console.log('Timeout 1');
  Promise.resolve().then(() => {
    console.log('Promise 1');
  });
  setTimeout(() => {
    console.log('Timeout 2');
  }, 0);
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 2');
});

console.log('End');
```

<details>
<summary>🔽 Show Output & Explanation</summary>

🖨️ **Output:**

```
Start  
End  
Promise 2  
Timeout 1  
Promise 1  
Timeout 2
```

🧠 **Explanation Order:**

1. Synchronous: Start, End
2. Microtask: Promise 2
3. Macrotask: Timeout 1
4. Nested microtask: Promise 1
5. Next macrotask: Timeout 2

</details>

---

### ✅ **Question 7**

```js
Promise.resolve(1)
  .then((x) => x + 1)
  .then((x) => {
    throw new Error("An error occurred!");
  })
  .catch((err) => {
    console.log(err.message);
    return 5;
  })
  .then((x) => console.log(x));
```

<details>
<summary>🔽 Show Output & Explanation</summary>

🖨️ **Output:**

```
An error occurred!  
5
```

🧠 **Explanation:**

* Error is thrown in `.then` → caught in `.catch`
* `.catch()` returns `5` → passed to next `.then`

</details>

---

### ✅ **Question 8**

```js
const promise = new Promise((resolve, reject) => {
    resolve("First");
    resolve("Second");
    reject("Third");
});

promise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
```

<details>
<summary>🔽 Show Output & Explanation</summary>

🖨️ **Output:**

```
First
```

🧠 **Explanation:**

* Promise can only resolve/reject **once**.
* First `resolve("First")` is used.
* Remaining `resolve` and `reject` calls are ignored.

</details>

---

### ✅ **Question 9**

```js
console.log('Start');

async function foo() {
  console.log('Foo Start');
  await new Promise(resolve => setTimeout(resolve, 0));
  console.log('Foo End');
}

foo().then(() => {
  console.log('After Foo');
});

console.log('End');
```

<details>
<summary>🔽 Show Output & Explanation</summary>

🖨️ **Output:**

```
Start  
Foo Start  
End  
Foo End  
After Foo
```

🧠 **Explanation:**

* `console.log('Foo Start')` runs immediately
* `await` pauses, and rest of `foo` goes into microtask after `setTimeout` (macrotask)
* `.then()` runs **after** the awaited code finishes

</details>

---

### ✅ **Question 10**

```js
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
```

<details>
<summary>🔽 Show Output & Explanation</summary>

🖨️ **Output:**

```
Caught: Error  
Finally 2  
Then: Recovered
```

🧠 **Explanation:**

* `.catch` handles the rejection and returns `"Recovered"`
* `.finally` runs **no matter what**
* `.then` receives the result returned from `.catch`

</details>


