
### 📦 Mission 4: The Ammo Calculator

Our scouts are coming back with different amounts of ammo. We need a function that adds them up and *gives* us the total, rather than just showing it to us.

* **The Mission:** Create a function called `calculateAmmo`.
* **The Arguments:** Two arguments: `bulletsInMag` and `bulletsInBox`.
* **The Logic:** Add them together and `return` the total.
* **Check Your Work:** Save the result in a variable called `totalAmmo` and then `console.log("We have " + totalAmmo + " bullets ready!")`.

---

### 🛡️ Mission 5: The Shield Strength

The base is under attack! We need to know how much damage our shield can absorb before it breaks.

* **The Mission:** Create a function called `calculateShield`.
* **The Argument:** One argument called `energyLevel`.
* **The Logic:** If the `energyLevel` is above 50, `return` "Shield is Full". If it is 50 or less, `return` "Shield is Weak".
* **Check Your Work:** Create a variable called `status` and set it by calling the function with `30`. `console.log` the `status` to see if it works!

---

### ⚡ Mission 6: The Turbo Boost (Using Async)

The zombies are too fast! We need a function that waits for a "Turbo" charge before returning our speed.

* **The Mission:** Create an `async` function called `getTurboSpeed`.
* **The Argument:** One argument called `baseSpeed`.
* **The Logic:** Use `await sleep(1000)` (using the `sleep` helper we talked about) to simulate the charge time, then `return` the `baseSpeed * 2`.
* **Check Your Work:** Use `let newSpeed = await getTurboSpeed(20);` and then `console.log` the `newSpeed`.

---

### 🤖 Mission 7: The Final Code Breaker

We found a secure door! We need a code to open it, but the code needs to be formatted exactly right.

* **The Mission:** Create a function called `generateAccessCode`.
* **The Arguments:** Two arguments: `teamName` and `secretNumber`.
* **The Logic:** `return` a string that looks like this: `teamName + "-" + secretNumber + "-ACCESS"`.
* **Check Your Work:** Create a variable `myCode` by calling the function with your name and a favorite number. Print it to see your official pass!

---
