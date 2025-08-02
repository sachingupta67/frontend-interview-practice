

# 🔁 Event Loop

* It's a mechanism that allows JavaScript (which is single-threaded) to handle multiple tasks at once without blocking the browser.
* Example: Fetching data, handling user clicks, running animations — all without freezing the browser.

---

## 🔑 Key Concepts

### ✅ Call Stack

* Executes synchronous (immediate) code.
* Works in **LIFO** (Last In First Out) order.
* Runs the current synchronous code.

### ✅ Web APIs *(Not part of JavaScript)*

* Functions like `setTimeout`, `DOM methods`, `fetch`, `console.log`, `localStorage`, etc. live in the browser (or Node), not in the JS engine.
* Accessed via the `window` object in browsers.
* Used to handle async operations like `setTimeout`, `fetch`, etc.

### ✅ Callback Queue / Task Queue (Low Priority)

* Holds tasks from Web APIs to be run **after the call stack is empty**.
* Example: Queues for `setTimeout`, `fetch` results, `event listeners`.

### ✅ Microtask Queue (High Priority)

* Holds Promises and other microtasks.
* **Always runs before the callback queue**.
* Examples: `Promise.then`, `queueMicrotask`.

### ✅ Event Loop

* Keeps checking: **Is the call stack empty?**

  * If **yes**, then:

    * Runs **all microtasks first**
    * Then runs one task from the **callback queue**

### ⚠️ Starvation

* Happens when microtasks keep queuing more microtasks and flood the event loop.
* This causes regular (macro) tasks like `setTimeout` to **never execute**.

---

## 🔄 Flow

1. JS code starts running → Global Execution Context (GEC) is created
2. Call Stack starts execution
3. JS checks each line:

   * If Sync → Runs immediately
   * If Async → Sent to Web APIs
4. Once Web APIs complete:

   * They send their callbacks to either:

     * **Microtask queue** (e.g., Promises)
     * **Macrotask queue / Callback queue** (e.g., setTimeout)
5. Event Loop checks:

   * Is Call Stack empty?

     * If Yes:

       * Runs **Microtasks first**
       * Then **Macrotasks (Callback queue)**
       * Callbacks go to call stack → then run

