
# Filter Buttons — Implementation Notes

Now that all the buttons work, it's time to code the filter buttons.

## 1) All Button

This is the simplest of all, as it should just trigger the `showTasks` function, which we've already made.

**Steps:**
- a) Get the button
- b) Add a click event listener which should just trigger the `showTasks` function we already made

## 2) Active Tasks Button

This basically does the same thing as the `showTasks` function, with a few changes — we need to show only tasks that haven't been completed (i.e. `completed == false`).

**Steps:**
- a) Get the button
- b) Add a click event listener which should trigger a `showActiveTasks` function

> Note: This function is very similar to the existing `showTasks` function, except for each task we should check if `completed == false` before displaying it.

## 3) Done Button

This follows the same pattern as the Active Tasks button, but in reverse — it should only display tasks that **have** been completed (i.e. `completed == true`).

**Steps:**
- a) Get the button
- b) Add a click event listener which should trigger a `showDoneTasks` function

> Note: This function is also very similar to `showTasks`, except for each task we should check if `completed == true` before displaying it.

