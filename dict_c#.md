
## 🏆 Exercise 1: Build Your Starting Squad

**The Mission:** Create a `Dictionary<string, string>` called `squad` that's empty. Use the `.Add()` method three separate times to add players and their positions: `"Ronaldo"` plays `"Striker"`, `"Messi"` plays `"Forward"`, and `"Neuer"` plays `"Goalkeeper"`.

**Check your work:** Display the whole dictionary (or its `.Count`) to make sure you have 3 players signed.

🗺️ **Step-by-Step Guide:**
* Step 1: Create an empty dictionary: `Dictionary<string, string> squad = new Dictionary<string, string>();`
* Step 2: Apply `.Add()` once to sign `"Ronaldo"` as `"Striker"`.
* Step 3: Apply `.Add()` again to sign `"Messi"` as `"Forward"`.
* Step 4: Apply `.Add()` a final time to sign `"Neuer"` as `"Goalkeeper"`.
* Step 5: Use `Console.WriteLine(squad.Count)` to confirm you have 3 signed players.

---

## ⚽ Exercise 2: Goal Scorer Tracker

**The Mission:** Start with a `Dictionary<string, int>` called `goals` where `"Ronaldo"` has scored `5` and `"Messi"` has scored `7`. Ronaldo just scored again — use the indexer (`[]`) to update his goal count to `6`.

**Check your work:** Print Ronaldo's new goal total to make sure the update worked.

🗺️ **Step-by-Step Guide:**
* Step 1: Create the dictionary with starting values: `{"Ronaldo", 5}` and `{"Messi", 7}`.
* Step 2: Use the indexer like `goals["Ronaldo"] = ...` to update his score.
* Step 3: Set the new value to `6`.
* Step 4: Print `goals["Ronaldo"]` to check it shows `6`.

---

## 🔍 Exercise 3: Is That Player on the Team?

**The Mission:** You have a `squad` dictionary of players and positions. Before signing a new player, `"Mbappe"`, you need to check he isn't already on the team using `.ContainsKey()`. If he's *not* already in the dictionary, `.Add()` him as `"Striker"`.

**Check your work:** Print a message saying whether Mbappe was added or was already there.

🗺️ **Step-by-Step Guide:**
* Step 1: Use an `if` statement with `.ContainsKey("Mbappe")`.
* Step 2: Put a `!` in front to check if he's **not** already there.
* Step 3: Inside the `if`, use `.Add()` to sign him as `"Striker"`.
* Step 4: Use `Console.WriteLine()` to print whether he got added.

---

## 🚑 Exercise 4: Injury Substitution

**The Mission:** Your player `"Neuer"` got injured and must leave the `squad` dictionary. Use `.Remove()` to take him off the team, then `.Add()` a substitute, `"Donnarumma"`, as `"Goalkeeper"`.

**Check your work:** Use `.ContainsKey()` to confirm Neuer is gone and Donnarumma is in.

🗺️ **Step-by-Step Guide:**
* Step 1: Apply `.Remove("Neuer")` to take him out of the dictionary.
* Step 2: Apply `.Add()` to bring in `"Donnarumma"` as `"Goalkeeper"`.
* Step 3: Print `squad.ContainsKey("Neuer")` — it should say `False`.
* Step 4: Print `squad.ContainsKey("Donnarumma")` — it should say `True`.

---

## 📣 Exercise 5: Read Out the Whole Team

**The Mission:** Use a `foreach` loop to go through every player in your `squad` dictionary and announce their name and position, like a stadium announcer!

**Check your work:** Your console should print one line per player, showing name AND position.

🗺️ **Step-by-Step Guide:**
* Step 1: Write `foreach (KeyValuePair<string, string> player in squad)`.
* Step 2: Inside the loop, access the name with `player.Key`.
* Step 3: Access the position with `player.Value`.
* Step 4: Use `Console.WriteLine()` to print something like `"Ronaldo plays Striker"`.

---

## 🎮 Exercise 6: High Score Tracker (Bonus)

**The Mission:** You have a `Dictionary<string, int>` called `highScores` for your favorite game. Use `.TryGetValue()` to safely check if `"Level5"` has a saved high score — without crashing your game if it doesn't exist yet!

**Check your work:** If it exists, print the score. If not, print `"No score yet!"`.

🗺️ **Step-by-Step Guide:**
* Step 1: Declare an `int` variable called `score` to hold the result, starting at `0`.
* Step 2: Call `highScores.TryGetValue("Level5", out score)` inside an `if` statement.
* Step 3: If it returns `true`, print the `score`.
* Step 4: If it returns `false` (use `else`), print `"No score yet!"`.

