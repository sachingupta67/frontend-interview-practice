# 🔁 Callback

* A **function passed as an argument** into another function to call it later.
* It can be **invoked after a certain task is done**.

---

### ✅ Use Case

* Used in **asynchronous code**

Example:
Let’s say we want to print the name `"sachin"` after 5 seconds.
We can create a function and pass it into `setTimeout`.
It will **invoke the function after 5 seconds**.

```js
function printName() {
  console.log("sachin");
}

setTimeout(printName, 5000); // Callback runs after 5s
```

---

### ❌ Issue: Callback Hell

* Happens in **dependent API calls**
* Forms **nested callbacks**, making code hard to read and maintain

Example:

```js
getUser(id, function(user) {
  getProfile(user, function(profile) {
    getPosts(profile, function(posts) {
      console.log(posts);
    });
  });
});
```

---

### ⚠️ Inversion of Control

* We **lose control** with callbacks.
* We’re **not sure** if the function we passed will be called, or called **more than once**, or **called incorrectly**.
* The **control is inverted** to the function receiving the callback.

