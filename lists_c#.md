## 🦄 The Enchanted Forest Party 🪄

**The Mission:** You are hosting a magical tea party. Start with a `List<string>` containing `"Fairy"` and `"Wizard"`. Use the `.Add()` method three separate times to add `"Dragon"`, `"Unicorn"`, and `"Elf"` to the end of your list.

**Check your work:** Display the entire list to make sure you have 5 magical guests.

### 🗺️ Step-by-Step Guide:

* **Step 1:** Initialize your list with `"Fairy"` and `"Wizard"`.
* **Step 2:** Apply the `.Add()` method to add the `"Dragon"`.
* **Step 3:** Apply the `.Add()` method again to add the `"Unicorn"`.
* **Step 4:** Apply the `.Add()` method a final time to add the `"Elf"`.
* **Step 5:** Use a `foreach` loop or a `for` loop to print all 5 guests.

---

## 🏆 The Leaderboard Glitch 👾

**The Mission:** You have a list of four high-scorers: `List<string> scores = new List<string> { "Player1", "Player2", "Cheater", "Player4" };`. Oh no! A `"Cheater"` is at **index 2**. Use the indexer `[2]` to remove them using `.RemoveAt(2)`.

**Check your work:** Print a message that says `"Final Leaderboard: "` followed by the remaining names.

### 🗺️ Step-by-Step Guide:

* **Step 1:** Create the list with the four players.
* **Step 2:** Use the `.RemoveAt(2)` method to delete the `"Cheater"`.
* **Step 3:** Use a `for` loop starting at `int i = 0` to iterate through the list.
* **Step 4:** Print each player's name inside the loop.

---

## 🎭 The Masquerade Ball Swap 🎭

**The Mission:** You have a guest list, but someone is wearing the wrong mask! Your list is `["Prince", "Jester", "Villain", "King"]`. The person at **index 2** is a `"Villain"`, but they are actually a `"Hero"` in disguise.

**Check your work:** Reassign the value at index 2 and display the list to confirm the swap.

### 🗺️ Step-by-Step Guide:

* **Step 1:** Create your `List<string>` with the four guests.
* **Step 2:** Use the bracket notation `[2]` to target the `"Villain"`.
* **Step 3:** Use the `=` operator to overwrite that spot with `"Hero"`.
* **Step 4:** Use a `for` loop (where `i = 0` and `i < list.Count`) to print every guest in the updated list.

---

## 🎒 The Backpack Emergency 🎒

**The Mission:** Your backpack is too heavy! Your list is `["Textbook", "Candy", "Heavy Rock", "Water"]`.

1. Remove `"Candy"` (it's at index 1).
2. Remove `"Heavy Rock"` (now at index 1).
3. Add `"Notebook"` to the end of your list.

**Check your work:** Use a `for` loop to count your items and display the final pack contents.

### 🗺️ Step-by-Step Guide:

* **Step 1:** Create your list with the four items.
* **Step 2:** Use `.RemoveAt(1)` to remove the candy.
* **Step 3:** Use `.RemoveAt(1)` again to get rid of that heavy rock.
* **Step 4:** Use `.Add("Notebook")` to put your notebook in.
* **Step 5:** Write a `for` loop that runs from `i = 0` to `i < list.Count` to print out your final inventory.

---
