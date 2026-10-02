

## 🌱 Warm-Up Levels: Loop Basics

### 🤖 Quest 1: Bolt the Robot's Power-Up Training

**The Mission:** You built a robot named Bolt, but his battery needs to be charged by doing 100 power pulses. Make Bolt pulse exactly 100 times to reach full power!

**Check your work:** You should see 100 lines of output. Count them, or print a number on each line to be sure you got exactly 100.

🗺️ Step-by-Step Guide:

* Step 1: Write a `for` loop using `range(100)`.
* Step 2: Inside the loop, print a message like `"⚡ Bolt power pulse!"`.
* Step 3: Run it and check that the message printed 100 times.
* Bonus: Use `range(1, 101)` and print the loop variable so you can watch Bolt's pulse count go from 1 to 100.

> 💡 **Python tip:** `range(100)` counts from 0 to 99. That is still 100 pulses, just starting at 0!

---

### 🏊 Quest 2: Swim Meet Lane Check

**The Mission:** You're at the big swim meet! The pool has lanes numbered 1 to 10, but your team only swims in lanes 5 through 10. Call out each lane your teammates dive into, starting at lane 5 and ending at lane 10.

**Check your work:** Print lanes 5, 6, 7, 8, 9, 10. Lane 10 must be included, and no lane below 5 should appear.

🗺️ Step-by-Step Guide:

* Step 1: Write a `for` loop using `range(5, 11)`.
* Step 2: Inside the loop, print `f"🏊 Splash! Swimmer diving into lane {lane}"`.
* Step 3: Run it and confirm the first line says lane 5 and the last line says lane 10.

> 💡 **Python tip:** `range(start, stop)` stops *before* the stop number. To include 10, you need `range(5, 11)`.

---

## ⚔️ Main Levels: Break & Continue

### 🎨 Quest 3: The Mystery Paint Cans

**The Mission:** You're painting a giant mural and have 20 paint cans numbered 1 to 20. Can #13 has dried out into a crusty brick, so skip it! And if you ever reach can #18, you discover the legendary Rainbow Gold paint. That's the one you wanted, so stop searching immediately.

**Check your work:** Print every can you opened, but can 13 should never appear, and nothing after 18 should print.

🗺️ Step-by-Step Guide:

* Step 1: Write a `for` loop that counts from 1 to 20 using `range(1, 21)`.
* Step 2: Inside the loop, use an `if` statement to check if the can number is `13`.
* Step 3: If it's `13`, use `continue` to skip it (that paint is dried out!).
* Step 4: Use another `if` statement to check if the number is `18`.
* Step 5: If it's `18`, print a celebration message and use `break` to stop the loop (you found the Rainbow Gold!).
* Step 6: Otherwise, print the can number you opened.

---

### 🤖 Quest 4: Robot Invasion Defense

**The Mission:** Evil robots are attacking your base in waves numbered 1 to 30! You start with 100 ammo, and each wave uses 8 shots. Wave 10 and wave 20 are "scout waves" where the robots just fly past, so you dodge them with `continue` and use no ammo. If your ammo ever drops to 0 or below, `break` immediately. You're out of ammo!

**Check your work:** Print each wave number and your remaining ammo. After the loop, print a final message showing whether you survived all 30 waves or ran out of ammo.

🗺️ Step-by-Step Guide:

* Step 1: Create a variable `ammo = 100`.
* Step 2: Write a `for` loop counting waves from 1 to 30 using `range(1, 31)`.
* Step 3: Check if `wave == 10` or `wave == 20`. If true, print `f"Wave {wave}: Scout wave, dodged!"` and `continue`.
* Step 4: Otherwise, subtract 8 from `ammo`.
* Step 5: If `ammo <= 0`, print `"OUT OF AMMO!"` and `break`.
* Step 6: Otherwise, print the wave number and remaining ammo.
* Step 7: After the loop, print whether you survived all 30 waves.

> 💡 **Python tip:** You can write the scout wave check as `if wave in (10, 20):`.

---

### 🌊 Quest 5: The Open-Water Swim Challenge

**The Mission:** You're swimming across a lake in a 50-meter open-water race. Every meter you swim costs 2 energy, and you start with 100 energy. But meters 7, 14, and 21 have floating rafts where you can grab a rest. `continue` right past them, no energy lost. If your energy ever drops to 0 or below, `break` immediately. The lifeguard has to pull you out!

**Check your work:** Print each meter you swim with your energy level (except raft meters, which print "Raft rest!"). After the loop, print whether you finished all 50 meters or got rescued by the lifeguard.

🗺️ Step-by-Step Guide:

* Step 1: Create a variable `energy = 100`.
* Step 2: Write a `for` loop from meter 1 to 50 using `range(1, 51)`.
* Step 3: If `meter` is 7, 14, or 21, print `f"Meter {meter}: Raft rest!"` and `continue`.
* Step 4: Otherwise, subtract 2 from `energy`.
* Step 5: If `energy <= 0`, print a "Lifeguard to the rescue!" message and `break`.
* Step 6: Otherwise, print the meter number and remaining energy.
* Step 7: After the loop, print a final status message.

---

### 🖼️ Quest 6: The Pixel Art Masterpiece

**The Mission:** You're making a pixel art character on a canvas with 25 rows. Rows 3, 6, 9, 12, 15, 18, 21, and 24 are plain background rows, so skip painting them (`continue`). But when you reach row 20, you add the final glowing eyes and your masterpiece is finished early. `break` and show it off, no matter how many rows were left!

**Check your work:** Print each row number and whether you painted it, skipped it, or finished the masterpiece.

🗺️ Step-by-Step Guide:

* Step 1: Write a `for` loop from row 1 to 25 using `range(1, 26)`.
* Step 2: Check if the row is one of `3, 6, 9, 12, 15, 18, 21, 24`. If true, print `f"Row {row}: Background, skipping"` and `continue`.
* Step 3: Check if `row == 20`. If true, print `"Row 20: Glowing eyes added! Masterpiece complete!"` and `break`.
* Step 4: Otherwise, print `f"Row {row}: Painting pixels!"`.
* Step 5: After the loop ends, print `"Gallery opening is ready!"`.

> 💡 **Python tip:** Use `if row in (3, 6, 9, 12, 15, 18, 21, 24):` instead of writing eight `or` checks.

---

### 🔥 Quest 7: The Lava Level Speedrun

**The Mission:** You're speedrunning a tough video game level with 40 checkpoints. Checkpoints 4, 8, 12, 16, 20, 24, 28, 32, and 36 have a coin bonus. Collect it by adding 10 points, print a coin message, then `continue` (no base points that turn). Every other checkpoint gives you 5 base points. If your total score ever reaches 150 or higher, you've unlocked the secret ending. `break` immediately and celebrate!

**Check your work:** Print your score after each checkpoint. After the loop, print your final score and whether you unlocked the secret ending.

🗺️ Step-by-Step Guide:

* Step 1: Create a variable `score = 0`.
* Step 2: Write a `for` loop from checkpoint 1 to 40 using `range(1, 41)`.
* Step 3: Check if the checkpoint is one of `4, 8, 12, 16, 20, 24, 28, 32, 36`. If true, add `10` to `score`, print a coin message like `"🪙 Coin bonus!"`, then `continue`.
* Step 4: Otherwise, add `5` to `score`.
* Step 5: If `score >= 150`, print `"🎉 SECRET ENDING UNLOCKED!"` and `break`.
* Step 6: Otherwise, print the current checkpoint and score.
* Step 7: After the loop, print the final score.

> 💡 **Python tip:** You can use `score += 10` as a shortcut for `score = score + 10`.

---

### 🏆 You beat the game!

Bonus challenge: pick your favorite quest and change the numbers (more lanes, different robot waves, a new secret ending score). Predict what will happen *before* you run it!
