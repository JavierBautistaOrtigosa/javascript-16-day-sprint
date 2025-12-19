# Arrays
- Arrays store ordered collections of values.
- Items are accessed using zero‑based indexing.
- .length returns the number of items.
- Arrays can contain mixed types (numbers, strings, booleans, objects).
- Arrays are reference types — assigning them to another variable does not create a copy.

# Accessing & Modifying
- Access items using array[index].
- Modify items by assigning to an index: array[1] = 25.
- Accessing out‑of‑range indexes returns undefined.

# Mutability vs Immutability

# Mutability
- A mutable operation changes the original array.
- Examples: push, pop, shift, unshift.
- Mutating arrays can cause bugs when multiple variables reference the same array.

# Immutability
- An immutable operation returns a new array without modifying the original.
- Essential for React state updates.
- Examples: map, filter, reduce, spread operator.

# Mutation Methods
- push() → add to end (mutates).
- pop() → remove from end (mutates).
- unshift() → add to start (mutates).
- shift() → remove from start (mutates).
- These methods directly modify the original array.

# Immutable Methods

map
- Transforms each item.
- Returns a new array.
- Does not modify the original.
- Common in React for rendering lists.

filterer
- Keeps items that match a condition.
- Returns a new array.
- Used for immutable removal.

find
- Returns the first matching item.
- Returns undefined if no match.

reduce
- Reduces an array to a single value.
- Common uses: totals, max/min, averages.

some
- Returns true if any item matches.

every
- Returns true if all items match.

Spread Operator
- Copies arrays: const copy = [...arr].
- Adds items immutably: const updated = [...arr, newItem].
- Merges arrays: const merged = [...a, ...b].
- Used heavily in React for updating state.

# Immutability (Concepts)
- Do not modify the original array.
- Always return a new version.

- Benefits:
- Predictable state
- Easier debugging
- React re-renders correctly
- Avoids side effects

# Mutability (Concepts)
- Directly changes the original array.
- Can cause unexpected behavior when multiple references exist.
- Avoid in React state.

# Deconstruction Drill (Concepts)
- map → transform
- filter → select
- find → locate
- reduce → summarise
- some/every → validate
- spread → copy or extend
- filter (again) → remove immutably
- These patterns form the foundation of modern JavaScript and React.

# Mini‑Project Concepts
- Start with a base array.
- Add items immutably using spread.
- Remove items immutably using filter.
- Summarise values using reduce.
- Transform values using map.
- Display results using console.table().
- Wrap logic in reusable functions.
