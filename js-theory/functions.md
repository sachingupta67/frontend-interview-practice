# function
  
  ```
  function sum(x){ // x ==> parameter
    return x+x;
  }

  sum(4) // 4 ==> arg

  ```

# Function Declartion vs Function Expression
 
- Function Declartion
  - Hoisted : YES
  - Name Required : YES


- Function Expression
  - Hoisted : NO
  - Name Required : NO

# Difference between regular function vs Arrow function

 - Regular Function
   - Syntax
   - This Binding : Yes , but it depends how we are calling 
   - Hoisted :  YES
   - Manual THis binding : YES
   - Arguments : yes built in
   - Constructor Capability - 
    ```
     function Person(name) {
      this.name = name;
     }

     const p1 = new Person("Sachin"); // ✅ Works

   ```


 - Arrow Function
   - Syntax : Smaller 
   - This Binding : NO , it inhericts from its lexical scope
   - Hoisted : NO
   - Manual This bind : NO
   - Arguments :  doesn't has it own argument
   - Constructor Capability

      ```
      const PersonArrow = (name) => {
            this.name = name;
      };

      const p2 = new PersonArrow("Sachin"); // ❌ TypeError: PersonArrow is not a constructor

      ```
# First-Class & Higher-Order Functions

 - First Class
   - JS treats function as first class citizen
      - we can pass function into a variable
      - we can pass function as an argument : Callback
      - return from another function

- High Order Functions
  - we take function as argument , and return a function 


# IIFE (Immediately Invoked Function Expression)

```
(function() {
  console.log("IIFE runs immediately");
})();
```

# Closure
 - a function that remembers the variables from its lexical scope , form closure

 eg: Currying