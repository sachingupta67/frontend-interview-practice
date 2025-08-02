# Event Loop
- its a mechanism that allow JS(single threaded) to handle multiple Tasks at once without blocking browser
- eg: fetching data , handling user clicks , running animations without blocking browser


# Key Concepts 
- Call Stack  
  Executes synchronous(immediate) code , LIFO - Last in First Out
  Runs current synchronous code
- Web APIs (not a part of JS)
  Functions like setTimeout, DOM methods, fetch, console.log, localStorage, etc., live in the browser, not JS engine. Accessed via window 
  eg: Handles async like setTimeout, fetch
- Callback Queue / Task Queue  (Low Priority)
  Hold task from Web APis to be run after stack is empty
  eg: Queues setTimeout, fetch results
- Micro task Queue (High Priority)
  Holds Promises and other micro tasks, Always runs before callback que
  eg: Promise.then, queueMicrotask
- Event Loop
  Keep Checking "Is call stack empty" , if Yes then push next task from microtask -> callbackque
- Starvation
  When microtasks flood the event loop, regular tasks may never execute.


# Flow
1. JS code runs GEC Created
2. Call Stack
3. Check Code (Sync / Async)
   Sync - Run First
   Async - Go to Web APIS
         - Web APis Completed
           - Sends Callbacks --> Micro Task / Macro Task
           - Will check Is Call Stacks Empty ?
             - if Yes  (Event Loop Come into Picture)
               then Micro Tasks Queue Runs first then Macro Task Queue
               - Call back goes to call stack and run