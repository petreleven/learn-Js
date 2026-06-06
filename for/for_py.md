---

## 📢 Mission: The Morning Roll Call

**The Mission:** You need to make sure everyone is awake and accounted for. Use a `for` loop to go through your `squad` list and print a message for each person.

**The Goal:**

* Create a `for` loop that loops through each `person` directly inside your `squad` list.
* Inside the loop, print: **f"Survivor {Name} is present and ready to fight!"**
* *Python Hint:* You don't need to count numbers here! You can just say: `for person in squad:`

**Check your work:** If your list has 5 people, you should see 5 different lines in your console, one for each member of the squad from "Me" to "Pizza Guy."

```python
# Here is your squad list to start with!
squad = ["Me", "Bestie", "Doggo", "Neighbor", "Pizza Guy"]

# Write your for loop here:


```

---

## 🛡️ Mission: Gear Up the Squad

**The Mission:** A crate of armor just arrived! You need to give every person in your squad a shield.

**The Goal:**

* Use a `for` loop to loop through the `squad` list using its indices (their position numbers).
* *Python Hint:* Use `for i in range(len(squad)):` to count from 0 to the end of the list.
* Inside the loop, update each name to include the word **" (Shielded)"** at the end.
* *Hint: You’ll want to do something like `squad[i] = squad[i] + " (Shielded)"*`

**Check your work:** Print the `squad` list *after* the loop finishes. It should look like: `["Me (Shielded)", "Bestie (Shielded)", ...]`

```python
squad = ["Me", "Bestie", "Doggo", "Neighbor", "Pizza Guy"]

# Write your for loop here to upgrade their armor:


# Print the final squad here to see the upgrade!


```

---

## 🔋 Mission: Robot’s Power Charge

**The Mission:** Your "Robot" teammate needs to charge up its battery before the big boss fight. It needs to count from 0 to 100, but it charges in jumps of **20**.

**The Goal:**

* Write a `for` loop using Python's `range()` function.
* *Python Hint:* `range(start, stop, step)` is like a cheat code! To include 100 and count by 20s, you'll want to use `range(0, 101, 20)`. (We use 101 because Python stops right *before* the final number!)
* Inside the loop, print: **"Charging... [energy]%"**

**Check your work:** Your console should show 0%, 20%, 40%, 60%, 80%, and 100%. If it stops at 80%, make sure your stop number in `range()` is bigger than 100!

```python
# Write your charging for loop here:


```
