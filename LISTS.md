## 🧟 The Zombie Survival Squad 🧟

**The Mission:** You start with an array called `squad` that contains `"Me"` and `"Bestie"`. A group of three more survivors just ran up to your gate! In JavaScript, we don't use `.append()`; we use **`.push()`**. Your task is to use the `.push()` method three separate times to add `"Scientist"`, `"Robot"`, and `"Pizza Guy"` to the end of your array.

**Check your work:** Log the array to the console using `console.log()` to make sure you have 5 survivors ready to fight!

### 🗺️ Step-by-Step Guide:

* **Step 1:** Start with your initial squad container that already holds `"Me"` and `"Bestie"`.
* **Step 2:** Use the `.push()` method for the first time. Inside the parentheses, hand it the `"Scientist"` to add them to the back of the line.
* **Step 3:** Use `.push()` a second time, this time passing it the `"Robot"`.
* **Step 4:** Use `.push()` a third time to bring the `"Pizza Guy"` into the safety of the squad.
* **Step 5:** Finally, use the `console.log()` command and put your squad's name inside the parentheses to print your team of 5 to the screen!

---

## 🕹️ The Player One Power-Up 🍄

**The Mission:** You have a list called `players` with four names in it: `"Mario"`, `"Luigi"`, `"James"`, `"Lilian"`. JavaScript lists are **zero-indexed**, meaning the first item is always at position 0. Use the **`[0]`** bracket notation to grab the name of the first player and store it in a variable called `winner`.

**Check your work:** Print a message to the console that says `"The Golden Mushroom goes to: "` and then include your `winner` variable.

### 🗺️ Step-by-Step Guide:

* **Step 1:** Look at your list of four players. Remember that computer coding starts counting at **0** instead of 1!
* **Step 2:** To grab the very first person ("Mario"), target the list using square brackets with the number `0` inside them: `[0]`.
* **Step 3:** Create a new storage box (a variable) named `winner` and use the equals sign (`=`) to save that first player inside it.
* **Step 4:** Use `console.log()` to print your congratulatory message. Inside the parentheses, glue the text `"The Golden Mushroom goes to: "` together with your `winner` variable using a plus sign (`+`).

---

## 🕵️ The Double Agent Swap 🕶️

**The Mission:** You have an array of heroes, but there is a `"Spy"` hiding at **index 2**. While JavaScript *does* have a `.splice()` method, for a simple one-for-one replacement, you can just "reassign" a value by targeting the index directly (like `array[index] = "New Item"`). Perform a secret swap to replace the `"Spy"` with a `"Super Dog"`.

**Check your work:** Print your array. If the `"Spy"` is gone and the `"Super Dog"` is in that middle spot, you’ve secured the team!

### 🗺️ Step-by-Step Guide:

* **Step 1:** Find the spy! The mission tells you they are hiding at index **2** (which is actually the *third* spot in the row because we start counting from 0).
* **Step 2:** Target that exact spot by writing the array's name followed immediately by `[2]`.
* **Step 3:** Use the assignment operator (the equals sign `=`) to overwrite whatever is currently in that spot.
* **Step 4:** Put `"Super Dog"` on the right side of the equals sign. This instantly boots the spy out and lets the dog take over!
* **Step 5:** Use `console.log()` on your array to make sure the swap worked perfectly.

---

## 🧹 The Messy Closet Cleanup 👕

**The Mission:** Your `closet` array is a mess: `["Shirt", "Old Socks", "Hat"]`.

1. First, use the **`.splice(1, 1)`** method to remove the `"Old Socks"` located at index 1. *(In JS, `.splice(index, howMany)` takes the starting index and tells the computer how many items you want to delete!)*
2. Next, use **`.push()`** to add a `"Cool Cape"` to the very end of the array.
3. Finally, use the **`[0]`** index to find your favorite shirt and store it in a variable.

**Check your work:** Your final array should have exactly 3 items, and those `"Old Socks"` should be nowhere to be found!

### 🗺️ Step-by-Step Guide:

* **Step 1:** Toss the socks! Grab your `closet` array and use the `.splice()` tool. Inside the parentheses, tell it to start at index `1` (where the socks are) and delete exactly `1` item.
* **Step 2:** Upgrade your style! Use the `.push()` tool on your closet array to send a `"Cool Cape"` straight to the very end of the list.
* **Step 3:** Pick your outfit. Since the shirt is at the very front of the closet, target it using the `[0]` index.
* **Step 4:** Create a brand new variable (give it a cool name like `favoriteOutfit`) and use the equals sign to store that shirt inside it.
* **Step 5:** Print out your closet array to ensure it looks clean, tidy, and ready for adventure!
