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


### ⚔️ Quest 2: Robot Invasion Defense

**The Mission:** Robots are attacking your base in waves numbered 1 to 30! You start with 100 ammo, and each wave uses 8 shots. Wave 10 and wave 20 are "scout waves" — you dodge them completely with `continue`, using no ammo. If your ammo ever drops to 0 or below, `break` immediately — you're out!

**Check your work:** Print each wave number and your remaining ammo. Print a final message showing whether you survived all 30 waves or ran out of ammo.

🗺️ Step-by-Step Guide:

* Step 1: Create an `int ammo = 100;` variable.
* Step 2: Write a `for` loop counting waves from 1 to 30.
* Step 3: Check if `wave == 10` or `wave == 20`. If true, print `"Wave {wave}: Scout wave, dodged!"` and `continue`.
* Step 4: Otherwise, subtract 8 from `ammo`.
* Step 5: If `ammo <= 0`, print "OUT OF AMMO!" and `break`.
* Step 6: Otherwise print the wave number and remaining ammo.
* Step 7: After the loop, print whether you survived all 30 waves.

---

### 🚀 Quest 3: Asteroid Field Escape

**The Mission:** Your spaceship is flying through 50 sectors of an asteroid field. Sectors 7, 14, and 21 are "safe zones" — `continue` right through them, no danger. Every other sector takes 2 damage to your shields, which start at 100. If your shields ever drop to 0 or below, `break` immediately to trigger emergency warp.

**Check your work:** Print each sector you pass through with your shield level (except safe zones, which print "Safe Zone!"). Print whether you made it through all 50 sectors or had to emergency warp.

🗺️ Step-by-Step Guide:

* Step 1: Create an `int shields = 100;` variable.
* Step 2: Write a `for` loop from sector 1 to 50.
* Step 3: If `sector == 7`, `sector == 14`, or `sector == 21`, print `"Sector {sector}: Safe Zone!"` and `continue`.
* Step 4: Otherwise, subtract 2 from `shields`.
* Step 5: If `shields <= 0`, print a shield failure message and `break`.
* Step 6: Otherwise, print the sector number and remaining shields.
* Step 7: After the loop, print a final status message.

---

### 🏆 Quest 4: The Ninja Obstacle Course

**The Mission:** You're a ninja running an obstacle course with 25 stations. Stations 3, 6, 9, 12, 15, 18, 21, and 24 are "rest stations" — you skip training there (`continue`). If you land on station 20, you find the golden scroll early and finish the course immediately (`break`), no matter how many stations were left.

**Check your work:** Print each station number and whether you trained there, rested, or found the scroll.

🗺️ Step-by-Step Guide:

* Step 1: Write a `for` loop from station 1 to 25.
* Step 2: Check if the station equals `3`, `6`, `9`, `12`, `15`, `18`, `21`, or `24`. If true, print `"Station {station}: Resting"` and `continue`.
* Step 3: Check if `station == 20`. If true, print `"Station 20: Found the Golden Scroll! Course complete!"` and `break`.
* Step 4: Otherwise, print `"Station {station}: Training hard!"`.
* Step 5: After the loop ends, print `"Ninja quest finished!"`.

---

### 🎮 Quest 5: The Lava Level Speedrun

**The Mission:** You're speedrunning a video game level with 40 checkpoints. Checkpoints 4, 8, 12, 16, 20, 24, 28, 32, and 36 have a coin bonus — collect it by adding 10 points, print a coin message, then `continue` (no base points that turn). Every other checkpoint gives you 5 base points. If your total score ever reaches 150 or higher, you've unlocked the secret ending — `break` immediately and celebrate!

**Check your work:** Print your score after each checkpoint. Print your final score and whether you unlocked the secret ending.

🗺️ Step-by-Step Guide:

* Step 1: Create an `int score = 0;` variable.
* Step 2: Write a `for` loop from checkpoint 1 to 40.
* Step 3: Check if the checkpoint equals `4`, `8`, `12`, `16`, `20`, `24`, `28`, `32`, or `36`. If true, add `10` to `score`, print a coin message, then `continue`.
* Step 4: Otherwise, add `5` to `score`.
* Step 5: If `score >= 150`, print a "SECRET ENDING UNLOCKED!" message and `break`.
* Step 6: Otherwise print the current checkpoint and score.
* Step 7: After the loop, print the final score.
