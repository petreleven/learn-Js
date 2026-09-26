# Python & Algorithms Practice Pack

Built around what you've already learned: Python, Bubble Sort, Merge Sort, Linear Search, Binary Search, BFS, and DFS.

**How to use this:**
1. Try each problem yourself first — even a messy, half-working attempt is worth more than reading the hint.
2. If you're stuck for more than ~10-15 minutes, read the hint for that problem.
3. Only look at the Answer Key (very bottom) after you've got something working, to compare your approach — or if you're really stuck.
4. 🟢 = warm-up, 🟡 = medium, 🔴 = challenge. Don't skip straight to 🔴 — the 🟢 ones make the harder ones click faster.

---

## Section 1: Bubble Sort

### 1.1 🟢 Count the swaps
Modify bubble sort so it returns **both** the sorted list AND how many swaps it made.

```python
def bubble_sort_count(arr):
    # TODO: sort arr, and count every swap you make
    # return (sorted_list, number_of_swaps)
    pass

print(bubble_sort_count([5, 1, 4, 2, 8]))
# Expected: ([1, 2, 4, 5, 8], some number of swaps)
```

### 1.2 🟢 Sort backwards
Write `bubble_sort_descending(arr)` that sorts from biggest to smallest, without using `sort(reverse=True)` or `sorted()`.

### 1.3 🟡 Stop early if already sorted
Bubble sort keeps looping even if the list got sorted early. Add a flag so it stops as soon as one full pass makes zero swaps.

```python
def bubble_sort_optimized(arr):
    # TODO: if a full pass makes no swaps, stop immediately
    pass

print(bubble_sort_optimized([1, 2, 3, 4, 5]))  # should barely do any work
```

### 1.4 🟡 Sort by score, not name
You have a list of students as `(name, score)` pairs. Sort them so the **highest score comes first**, using bubble sort logic (compare `score`, not the whole tuple).

```python
students = [("Amy", 72), ("Ben", 95), ("Cleo", 60), ("Dan", 88)]
# Expected order: Ben (95), Dan (88), Amy (72), Cleo (60)
```

---

## Section 2: Merge Sort

### 2.1 🟢 Just the merge step
Before touching full merge sort again, write `merge(left, right)` that takes **two already-sorted lists** and combines them into one sorted list.

```python
def merge(left, right):
    # TODO
    pass

print(merge([1, 3, 5], [2, 4, 6]))  # [1, 2, 3, 4, 5, 6]
```

### 2.2 🟡 Count comparisons
Modify merge sort so it also tells you how many comparisons it made between elements. (Hint: you'll need something like a list `count = [0]` so the inner function can update it.)

### 2.3 🟡 Sort by word length
Use merge sort logic to sort a list of words by **length**, shortest first.

```python
words = ["banana", "kiwi", "apple", "fig", "watermelon"]
# Expected: ["fig", "kiwi", "apple", "banana", "watermelon"]
```

### 2.4 🔴 Which is actually faster?
Time both your bubble sort and merge sort on a list of 5,000 random numbers using Python's `time` module. Which wins, and by how much? Then try 50,000 numbers. What happens to the gap?

```python
import random, time
big_list = [random.randint(0, 100000) for _ in range(5000)]
# TODO: time bubble_sort(big_list) vs merge_sort(big_list)
```

---

## Section 3: Linear Search

### 3.1 🟢 Find ALL matches
Regular linear search stops at the first match. Write `linear_search_all(arr, target)` that returns a list of **every index** where `target` appears.

```python
print(linear_search_all([3, 7, 3, 9, 3], 3))  # [0, 2, 4]
```

### 3.2 🟡 Search a list of dictionaries
You have a list of dictionaries. Find the first one where `"name"` matches what you're looking for, and return the whole dictionary (or `None` if not found).

```python
people = [{"name": "Zoe", "age": 13}, {"name": "Kofi", "age": 12}]
# find_person(people, "Kofi") -> {"name": "Kofi", "age": 12}
```

---

## Section 4: Binary Search

### 4.1 🟢 Recursive version
You've likely written binary search as a loop. Now write it **recursively** instead.

```python
def binary_search_recursive(arr, target, lo=0, hi=None):
    # TODO
    pass
```

### 4.2 🟡 Leftmost duplicate
If a sorted list has the target value **more than once**, regular binary search might land on any one of them. Write a version that always returns the **leftmost (first)** occurrence.

```python
arr = [1, 2, 4, 4, 4, 4, 7, 9]
print(leftmost_binary_search(arr, 4))  # should return 2, not 3, 4, or 5
```

### 4.3 🔴 Closest value
Given a sorted list and a target that might NOT be in the list, find the **smallest value that is ≥ target**. (This is sometimes called a "ceiling" search.)

```python
arr = [2, 5, 9, 14, 20]
print(ceiling_search(arr, 10))  # 14 (smallest value >= 10)
print(ceiling_search(arr, 20))  # 20
print(ceiling_search(arr, 21))  # -1 (nothing that big)
```

---

## Section 5: Breadth-First Search (BFS)

Use this graph for the exercises below (as a dictionary of lists):

```python
graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C", "E"],
    "E": ["D"],
    "F": ["G"],
    "G": ["F"]
}
```

### 5.1 🟢 Visiting order
Run BFS starting from `"A"` and print the order nodes get visited in.

### 5.2 🟡 Shortest number of steps
Write `bfs_shortest_path_length(graph, start, end)` that returns how many edges are on the shortest path between two nodes (not the actual path, just the count). Test it: `A` to `E` should be 3.

### 5.3 🔴 Maze solver
Represent a maze as a grid of characters, where `#` is a wall and `.` is open space. Use BFS to find the shortest path length from `start` to `end`, moving up/down/left/right only.

```python
maze = [
    list(".........."),
    list(".####.###."),
    list("....#.#..."),
    list("###.#.#.##"),
    list("...........")
]
start = (0, 0)
end = (4, 9)
# TODO: bfs_maze(maze, start, end) -> shortest number of steps
```

---

## Section 6: Depth-First Search (DFS)

Use the same `graph` from Section 5.

### 6.1 🟢 Iterative DFS
You've probably written DFS recursively before. Now write it using a `stack` (a plain Python list with `.append()` / `.pop()`) instead of recursion.

### 6.2 🟡 Is there a path at all?
Write `path_exists(graph, start, end)` that returns `True`/`False` for whether you can reach `end` from `start` at all — don't worry about the shortest path, just whether one exists. Test: is there a path from `"A"` to `"F"`? (There shouldn't be — look at the graph.)

### 6.3 🔴 Count the "islands"
The graph above actually has two separate, disconnected groups of nodes ({A,B,C,D,E} and {F,G}). Write `count_components(graph)` that counts how many separate groups exist, using DFS.

---

## Section 7: Mixing It Together

### 7.1 🟡 Sort, then search
You're given an unsorted list of 1,000 random numbers. Sort it with your merge sort, then use binary search to check whether `12345` is in the list. Why does it make sense to sort *before* searching here, instead of just using linear search on the unsorted list?

### 7.2 🔴 BFS vs DFS on the same maze
Take the maze from 5.3. Solve it with BFS **and** with DFS (DFS just needs to reach the end, path length doesn't matter for DFS the same way). Compare the path lengths each one finds. Does DFS always find the *shortest* path? Why or why not? Write a two-sentence explanation in a comment.

---
---

# 🔑 Answer Key

Try not to peek until you've attempted the problem yourself!

### 1.1
```python
def bubble_sort_count(arr):
    arr = arr[:]
    swaps = 0
    n = len(arr)
    for i in range(n):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swaps += 1
    return arr, swaps
```

### 1.3
```python
def bubble_sort_optimized(arr):
    arr = arr[:]
    n = len(arr)
    for i in range(n):
        swapped = False
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
```

### 1.4
```python
def sort_by_score(students):
    students = students[:]
    n = len(students)
    for i in range(n):
        for j in range(n - i - 1):
            if students[j][1] < students[j + 1][1]:
                students[j], students[j + 1] = students[j + 1], students[j]
    return students
```

### 2.1
```python
def merge(left, right):
    result = []
    i = j = 0
    while i < len(left) and j < len(right):
        if left[i] <= right[j]:
            result.append(left[i]); i += 1
        else:
            result.append(right[j]); j += 1
    result.extend(left[i:])
    result.extend(right[j:])
    return result
```

### 2.2
```python
def merge_sort_count(arr):
    count = [0]

    def merge(left, right):
        result = []
        i = j = 0
        while i < len(left) and j < len(right):
            count[0] += 1
            if left[i] <= right[j]:
                result.append(left[i]); i += 1
            else:
                result.append(right[j]); j += 1
        result.extend(left[i:])
        result.extend(right[j:])
        return result

    def sort(a):
        if len(a) <= 1:
            return a
        mid = len(a) // 2
        return merge(sort(a[:mid]), sort(a[mid:]))

    return sort(arr), count[0]
```

### 3.1
```python
def linear_search_all(arr, target):
    return [i for i, val in enumerate(arr) if val == target]
```

### 4.1
```python
def binary_search_recursive(arr, target, lo=0, hi=None):
    if hi is None:
        hi = len(arr) - 1
    if lo > hi:
        return -1
    mid = (lo + hi) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, hi)
    else:
        return binary_search_recursive(arr, target, lo, mid - 1)
```

### 4.2
```python
def leftmost_binary_search(arr, target):
    lo, hi = 0, len(arr) - 1
    result = -1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] == target:
            result = mid
            hi = mid - 1  # keep looking to the left for an earlier match
        elif arr[mid] < target:
            lo = mid + 1
        else:
            hi = mid - 1
    return result
```

### 4.3
```python
def ceiling_search(arr, x):
    lo, hi = 0, len(arr) - 1
    result = -1
    while lo <= hi:
        mid = (lo + hi) // 2
        if arr[mid] >= x:
            result = arr[mid]
            hi = mid - 1
        else:
            lo = mid + 1
    return result
```

### 5.2
```python
from collections import deque

def bfs_shortest_path_length(graph, start, end):
    if start == end:
        return 0
    visited = {start}
    queue = deque([(start, 0)])
    while queue:
        node, dist = queue.popleft()
        for neighbor in graph[node]:
            if neighbor == end:
                return dist + 1
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append((neighbor, dist + 1))
    return -1
```

### 5.3
```python
from collections import deque

def bfs_maze(maze, start, end):
    rows, cols = len(maze), len(maze[0])
    visited = {start}
    queue = deque([(start, 0)])
    while queue:
        (r, c), dist = queue.popleft()
        if (r, c) == end:
            return dist
        for dr, dc in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and maze[nr][nc] != "#" and (nr, nc) not in visited:
                visited.add((nr, nc))
                queue.append(((nr, nc), dist + 1))
    return -1
```

### 6.1
```python
def dfs_iterative(graph, start):
    visited = set()
    order = []
    stack = [start]
    while stack:
        node = stack.pop()
        if node not in visited:
            visited.add(node)
            order.append(node)
            for neighbor in reversed(graph[node]):
                if neighbor not in visited:
                    stack.append(neighbor)
    return order
```

### 6.2
```python
def path_exists(graph, start, end, visited=None):
    if visited is None:
        visited = set()
    if start == end:
        return True
    visited.add(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            if path_exists(graph, neighbor, end, visited):
                return True
    return False
```

### 6.3
```python
def count_components(graph):
    visited = set()
    count = 0

    def visit(node):
        visited.add(node)
        for neighbor in graph[node]:
            if neighbor not in visited:
                visit(neighbor)

    for node in graph:
        if node not in visited:
            visit(node)
            count += 1
    return count
```

### 7.2 (discussion, not code)
DFS does **not** guarantee the shortest path — it commits to going as deep as possible down one direction before backtracking, so it can find *a* path that's much longer than necessary. BFS explores level-by-level outward from the start, so the first time it reaches the end is guaranteed to be via the shortest route.
