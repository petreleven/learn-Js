# Build a Number Guessing Game — Step by Step

This guide walks you from a blank, unstyled page to the full dragon guessing game — no copy-pasting, just you building it piece by piece. Each stage ends with something you can actually run in the browser, so you always know it's working before moving on.

You already know JS basics and `addEventListener`, so this focuses on **what to build and in what order**, not syntax.

---

## Stage 0: The bare skeleton

Before any game logic, get a page on screen with three things in it:

- A number `input` field
- A `button` to submit a guess
- An empty element (a `div` or `p`) where feedback text will go — call it something like `feedback` so it's easy to find later

Nothing needs styling yet. The goal is just: can you see an input box and a button in the browser?

**Checkpoint:** open the page, click the input, type a number. Nothing happens when you click the button yet — that's expected.

---

## Stage 1: Pick the secret number

In your JS file, before anything else runs, generate one random whole number in your chosen range (1–100 works well) and store it in a variable. This has to happen **once**, when the game starts — not inside the button's click handler, or you'd get a new secret number every guess.

Two things to think through here:

- `Math.random()` gives you a decimal between 0 and 1 — you'll need to scale and round it into a whole number in your range.
- Store this in a variable that lives outside any function, so every part of your code can read it.

**Checkpoint:** temporarily `console.log` the secret number to confirm it's random and in range each time you refresh the page. (Remove the log once confirmed — no spoilers for the player.)

---

## Stage 2: Wire up the button

Add an event listener to your guess button. Inside the handler:

1. Read the current value out of the input field.
2. Convert it from text to a number (input values come in as strings, so this step matters).
3. For now, just log it or dump it into your `feedback` element to confirm you're capturing the player's guess correctly.

**Checkpoint:** type a number, click guess, see that exact number reflected back in the feedback area.

---

## Stage 3: Compare and respond

Now do the real comparison inside that same handler:

- If the guess equals the secret number → show a "you got it" message.
- If the guess is lower than the secret number → show a "go higher" message.
- If the guess is higher → show a "go lower" message.

This is a simple `if / else if / else` chain, writing the result into your `feedback` element each time.

**Checkpoint:** deliberately guess low, high, and correct — confirm each path shows the right message.

---

## Stage 4: Handle bad input

Right now, someone could submit an empty box or a letter and break your comparison logic. Add a check at the very top of your handler: if the converted guess isn't a valid number (or falls outside your range), show a message asking for a valid number **and stop the function there** — don't run the comparison logic on garbage input.

**Checkpoint:** try submitting the input empty, and try letters. You should get a friendly nudge instead of a broken message.

---

## Stage 5: Count tries

Add a variable to count attempts, starting at zero. Increment it once per valid guess (inside your handler, after the input-validation check passes). Display the running count somewhere on the page — a simple text element you update each time works fine.

**Checkpoint:** guess a few times, watch the counter go up. Refresh the page — it should reset to zero along with a new secret number.

---

## Stage 6: Lock the game once it's won

Once the player wins, two things should happen:

- The game shouldn't accept more guesses. Disable the input and the button (there's a `.disabled` property for form elements), or add a simple boolean flag like `gameOver` that you check at the top of your handler and return early if true.
- Show a "play again" button that was hidden until now.

**Checkpoint:** win the game, confirm you can't submit further guesses, and the reset button appears.

---

## Stage 7: Make "play again" actually work

Give your reset button its own event listener. It needs to redo everything Stage 1 did — pick a fresh secret number, reset the try counter to zero, clear the feedback text, clear the input field, and re-enable the input/button. The cleanest way to do this is to pull all your "start a new round" logic into one function, and call that function both when the page first loads and when reset is clicked.

**Checkpoint:** win, hit reset, and play a full second round without refreshing the page.

---

## Stage 8: Narrow the range as you go (optional but satisfying)

Track a "lowest possible" and "highest possible" number, starting at your range's min and max. Every time a guess comes back too low, raise the "lowest possible" to just above that guess; every time it's too high, lower the "highest possible." Display this shrinking range somewhere so the player can see their search space tightening.

**Checkpoint:** guess a few times and confirm the displayed range visibly narrows toward the answer.

---

## Stage 9: Track a best score

Once someone wins, compare their try count against a stored "best score." If it's better (or there isn't one yet), save it. Use `localStorage.getItem` / `localStorage.setItem` so the best score survives a page refresh — remember `localStorage` only stores strings, so you'll convert numbers when reading them back out.

**Checkpoint:** win in, say, 4 tries, refresh the page, win again in 6 tries — confirm the displayed best score stays at 4.

---

## Stage 10: Now make it look and feel good

Only once all the logic above works reliably should you touch appearance. This ordering matters — it's much easier to debug game logic against plain text than against a styled page full of animations. Some ideas, roughly in order of effort:

- **Visual identity first:** pick a theme (we went with a dragon/cave look), a couple of Google Fonts, and a small color palette before writing any CSS — this keeps you from bolting on random colors piece by piece.
- **Feedback as a "speech bubble":** style your feedback element like a speech bubble coming from a character, and swap its text based on how close the guess is (you already have the difference between guess and secret number from Stage 3 — use it to pick between "ice cold," "warm," and "so close").
- **A meter/progress bar:** a styled div whose width you set based on where the last guess falls within the full range — this reuses the min/max tracking from Stage 8.
- **A guess history:** each time a guess comes in, append a small styled element (a "chip") showing that number, colored differently depending on whether it was too low or too high.
- **A reacting character:** add/remove CSS classes on an image or inline SVG based on game state (e.g., a `.happy` class with a bounce animation on win, a `.cold`/`.hot` class with a shiver/wobble on near or far guesses) — `classList.add` / `classList.remove` are enough, the animation itself lives in CSS `@keyframes`.
- **A win celebration:** on victory, dynamically create a handful of small colored elements, position them randomly across the top of the screen, and let a CSS animation carry them down and off screen — classic confetti effect, no library needed.

---

## Suggested build order recap

1. Static HTML skeleton
2. Random secret number
3. Capture the guess
4. Compare and give feedback
5. Validate input
6. Count tries
7. Lock game on win
8. Reset/play again
9. (Optional) narrowing range display
10. (Optional) best score via `localStorage`
11. Styling and animation pass, last

Building in this order means at every single stage you have a working, testable game — just an increasingly nicer-looking one.
