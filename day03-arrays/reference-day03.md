# Array Basics

- Arrays store ordered lists.
- Zero‑based indexing.
- .length returns total items.
- Arrays can contain mixed types.

# Mutation Methods

| Method   | Action              | Mutates? |
|----------|---------------------|----------|
| push()   | Add to end          |    Yes   |
| pop()    | Remove from end     |    Yes   |
| unshift()| Add to start        |    Yes   |
| shift()  | Remove from start   |    Yes   |



# Immutable Methods

| Method            | Purpose              | Mutates? |
|-------------------|----------------------|----------|
| map()             | Transform items      |    No    |
| filter()          | Keep/remove items    |    No    |
| reduce()          | Summarise values     |    No    |
| find()            | Locate first match   |    No    |
| some()            | Check if any match   |    No    |
| every()           | Check if all match   |    No    |
| concat()          | Merge arrays         |    No    |
| spread `[...]`    | Copy/extend          |    No    |



# map
```js
array.map(item => item * 2)
```

- Returns a new array.
- Does not modify original.

# filter

```js
array.filter(item => item !== 3)
```

- Removes items immutably.
- Returns a new array.

# find

```js
array.find(item => item.id === 1)
```

- Returns first match.
- Returns undefined if not found.

# reduce

```js
array.reduce((acc, item) => acc + item, 0)
```
- Reduces array → single value.
- Requires an accumulator.

| Method | Meaning                      |
|--------|------------------------------|
| some() | At least one item matches    |
| every()| All items match              |

# Spread Operator

| Operation        | Example                      | Description                     |
|------------------|------------------------------|---------------------------------|
| Copy array       | `const copy = [...arr]`      | Creates a shallow copy          |
| Add immutably    | `const updated = [...arr, x]`| Adds item without mutating      |
| Merge arrays     | `const merged = [...a, ...b]`| Combines arrays immutably       |

# Immutability

- Do not modify the original array.
- Always return a new array.
- Essential for React state updates.

# Mutability

- Directly modifies the original array.
- Avoid in React.

# Common Patterns
Remove immutably

```js
const updated = arr.filter(item => item !== target)
```

# Update immutably

```js
const updated = arr.map(item =>
  item.id === targetId ? { ...item, value: newValue } : item
)
```

# Add immutably

```js
const updated = [...arr, newItem]
```


# Mini‑Project Patterns

- Add → spread
- Remove → filter
- Total → reduce
- Format → map
- Display → console.table()
- Wrap logic in functions for reusability
