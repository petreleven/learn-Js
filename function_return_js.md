

### 📦 Mission 1: The Galactic Treasure Hunter

You found a treasure chest on a distant planet! But the gold is split between two separate bags. We need a function that adds them together so you know your total wealth.

* **The Mission:** Create a function called `CalculateGold`.
* **The Arguments:** Two numbers: `bagOne` and `bagTwo`.
* **The Logic:** Add `bagOne` and `bagTwo` together and **return** the total.
* **Check Your Work:** Save the result in a variable called `totalGold` and then log the message to the console: `"Total treasure collected: [totalGold] coins!"`

---

### 📦 Mission 2: The Robot Speed Boost

Your racing robot needs a speed boost for the final lap! We need a function that takes its base speed and adds the turbo boost power to it.

* **The Mission:** Create a function called `ApplyTurbo`.
* **The Arguments:** Two numbers: `baseSpeed` and `turboBoost`.
* **The Logic:** Add `baseSpeed` and `turboBoost` together and **return** the new speed.
* **Check Your Work:** Save the result in a variable called `finalSpeed` and then log the message to the console: `"Robot speed increased to: [finalSpeed] km/h!"`

---

### 📦 Mission 3: The Magical Potion Mixer

To finish your level, you need to mix ingredients for a health potion. The function should calculate the total amount of "Magic Energy" based on two jars of ingredients.

* **The Mission:** Create a function called `MixPotion`.
* **The Arguments:** Two numbers: `jarOneEnergy` and `jarTwoEnergy`.
* **The Logic:** Add `jarOneEnergy` and `jarTwoEnergy` together and **return** the final energy level.
* **Check Your Work:** Save the result in a variable called `totalEnergy` and then log the message to the console: `"The potion is ready with [totalEnergy] units of magic!"`





## Mission 4: The Vending Machine Wizard

To finish your level, you need to program a Vending Machine that decides which snack to dispense based on the amount of coins inserted by a student.
The Mission: Create a function called vendingMachine.

The Arguments: One number: money.

The Logic: Use if, else if, and else statements to check the amount of money and return the correct snack name:

    If money is 10 or more, return "Chocolate Bar".

    If money is 5 or more (but less than 10), return "Bag of Chips".

    If money is less than 5, return "A piece of gum".

Check Your Work:
Save the result of the function in a variable called mySnack and then log this message to the console:"I inserted my coins and received a: [mySnack]!"

    Pro-tip: Remember that your if/else if chain should check from the highest amount to the lowest amount, or the logic might get "stuck" on the wrong snack!



## Mission 6: The Minecraft Crafting Bench

To finish your level, you need to write the logic for a **Crafting Bench**. Depending on the item you put into the input slot, the bench will output the correct "crafted" item.

---

### The Mission: Create a function called `craftItem`.

**The Arguments:** One string: `rawMaterial`.

**The Logic:** Use `if`, `else if`, and `else` to determine what item is created:

* If `rawMaterial` is `"Wood"`, return `"Crafting Table"`.
* If `rawMaterial` is `"Iron"`, return `"Iron Sword"`.
* If `rawMaterial` is `"Diamond"`, return `"Diamond Pickaxe"`.
* If the material is anything else, return `"Stick"`.

**Check Your Work:**
Save the result of the function in a variable called `myItem` and log this message to the console:
`"Success! You placed the material in the bench and got a: [myItem]!"`

---

## Mission 7: The Hacker’s Firewall Bypass

You have reached the server's firewall! To gain access, your function needs to check if the `accessLevel` provided matches the required clearance.

---

### The Mission: Create a function called `bypassFirewall`.

**The Arguments:** One number: `securityLevel`.

**The Logic:** Use `if`, `else if`, and `else` to decide if access is granted:

* If `securityLevel` is **greater than 90**, return `"Admin Access Granted"`.
* If `securityLevel` is **between 50 and 90**, return `"User Access Granted"`.
* If `securityLevel` is **less than 50**, return `"Access Denied: Firewall Locked"`.

**Check Your Work:**
Save the result of the function in a variable called `status` and log this message to the console:
`"The terminal flashes: [status]"`

---

> **Pro-tip:** When checking if a number is "between" two values, you can use the logical AND operator (`&&`). For example, `if (securityLevel >= 50 && securityLevel <= 90)` checks if the number is in that range!

---





    
