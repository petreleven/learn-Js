# 🎮 C# For Loop Quests: Break & Continue Edition

---

### 🐉 Quest 1: The Dragon's Treasure Countdown

**The Mission:** A dragon guards a cave with treasure chests numbered 1 to 20. But chest #13 is trapped with a sneeze-powder booby trap — skip it! And if you ever reach chest #18, the dragon wakes up, so stop searching immediately.

**Check your work:** Print every chest number you searched, but chest 13 should never appear, and nothing after 18 should print.

🗺️ Step-by-Step Guide:

* Step 1: Write a `for` loop that counts from 1 to 20.
* Step 2: Inside the loop, use an `if` statement to check if the number is `13`.
* Step 3: If it's `13`, use `continue` to skip printing it.
* Step 4: Use another `if` statement to check if the number is `18`.
* Step 5: If it's `18`, use `break` to stop the loop entirely (the dragon woke up!).
* Step 6: Print the chest number if neither condition was triggered.

---

### ⚔️ Quest 2: Robot Invasion Defense

**The Mission:** Robots are attacking your base in waves numbered 1 to 30! Your laser turret can only fire 100 shots total. Each robot wave takes a random number of shots (use `Random` to generate 1–10 shots per wave). If you run out of ammo mid-battle, `break` out immediately. If a wave number is divisible by 5, that's a "scout wave" you dodge instead of fight — `continue` past it without using ammo.

**Check your work:** Print each wave number, how much ammo was used, and your remaining ammo. Print a final message showing whether you survived all 30 waves or ran out of ammo.

🗺️ Step-by-Step Guide:

* Step 1: Create an `int ammo = 100;` variable and a `Random rng = new Random();`.
* Step 2: Write a `for` loop counting waves from 1 to 30.
* Step 3: Check if the wave number is divisible by 5 (`wave % 5 == 0`) — if so, `continue` (scout wave dodged, no ammo used).
* Step 4: Otherwise, generate shots used with `rng.Next(1, 11)`.
* Step 5: Subtract shots from `ammo`. If `ammo <= 0`, print "OUT OF AMMO!" and `break`.
* Step 6: Otherwise print the wave number, shots fired, and ammo remaining.
* Step 7: After the loop, print whether you survived all 30 waves.

---

### 🚀 Quest 3: Asteroid Field Escape

**The Mission:** Your spaceship is flying through 50 sectors of an asteroid field. Sectors that are multiples of 7 are "safe zones" — no danger, so `continue` right through them without checking anything. For every other sector, roll a random number 1–100 for asteroid damage; if damage ever exceeds 90, your ship's shields fail and you must `break` immediately to trigger emergency warp.

**Check your work:** Print each sector you pass through with its damage roll (except safe zones, which print "Safe Zone!"). Print whether you made it through all 50 sectors or had to emergency warp.

🗺️ Step-by-Step Guide:

* Step 1: Create a `Random rng = new Random();`.
* Step 2: Write a `for` loop from sector 1 to 50.
* Step 3: If `sector % 7 == 0`, print `"Sector {sector}: Safe Zone!"` and `continue`.
* Step 4: Otherwise, roll `int damage = rng.Next(1, 101);`.
* Step 5: If `damage > 90`, print a shield failure message and `break`.
* Step 6: Otherwise, print the sector number and damage taken.
* Step 7: After the loop, print a final status message.

---

### 🏆 Quest 4: The Ninja Obstacle Course

**The Mission:** You're a ninja running an obstacle course with 25 stations. Every 3rd station is a "rest station" — you skip training there (`continue`). If you land on station 20, you find the golden scroll early and finish the course immediately (`break`), no matter how many stations were left.

**Check your work:** Print each station number and whether you trained there, skipped it, or found the scroll.

🗺️ Step-by-Step Guide:

* Step 1: Write a `for` loop from station 1 to 25.
* Step 2: Check if `station % 3 == 0`. If true, print `"Station {station}: Resting"` and `continue`.
* Step 3: Check if `station == 20`. If true, print `"Station 20: Found the Golden Scroll! Course complete!"` and `break`.
* Step 4: Otherwise, print `"Station {station}: Training hard!"`.
* Step 5: After the loop ends, print `"Ninja quest finished!"`.

---

### 🎮 Quest 5: The Lava Level Speedrun

**The Mission:** You're speedrunning a video game level with 40 checkpoints. Checkpoints that are multiples of 4 have a coin bonus — collect it by adding 10 points, but don't stop your run, just `continue` after collecting. If your total score ever reaches 150 points or higher, you've unlocked the secret ending, so `break` immediately and celebrate!

**Check your work:** Print your score after each checkpoint, and a special message when you collect a coin bonus. Print your final score and whether you unlocked the secret ending.

🗺️ Step-by-Step Guide:

* Step 1: Create an `int score = 0;` variable.
* Step 2: Write a `for` loop from checkpoint 1 to 40.
* Step 3: Add `5` points to `score` for reaching the checkpoint (every checkpoint gives base points).
* Step 4: If `checkpoint % 4 == 0`, add `10` bonus points, print a coin message, then `continue`.
* Step 5: If `score >= 150`, print a "SECRET ENDING UNLOCKED!" message and `break`.
* Step 6: Otherwise print the current checkpoint and score.
* Step 7: After the loop, print the final score.
