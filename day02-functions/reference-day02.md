# **Function** Types

| Type                 | Description                                  | Example                  |
| :------------------- | :------------------------------------------- | :----------------------- |
| Function Declaration | Named function defined with function keyword | function greet() {}      |
| Function Expression  | Function stored in a variable                | const fn = function() {} |
| Arrow Function       | Shorter syntax using =>                      | const fn = () => {}      |

# Parameters

- Parameter: variable listed in function definition.
- Argument: value passed when calling the function.
- Default parameter: function greet(name = 'friend') {}.

# Return Statement

- Ends function execution.
- Sends a value back to the caller.
- Early return pattern:

  ```**js**
  if (condition) return value;
  return otherValue;
  ```

# Arrow Functions

## Syntax Variants

| Pattern         | Example                             |
| :-------------- | :---------------------------------- |
| Basic           | const fn = (x) => x \* 2            |
| No params       | const fn = () => 123                |
| Multiple params | const fn = (a, b) => a + b          |
| Implicit return | const fn = n => n \* n              |
| Return object   | const fn = () => ({ key: 'value' }) |

# Notes

- Parentheses required when returning an object literal.
- Implicit return only works with single expressions.

# Function Expressions

- Assigned to variables.
- Can be anonymous.
- Useful for callbacks and storing functions as values.

```js
const multiply = function (x, y) {
  return x * y;
};
```

# Scope

- Block Scope:
  Variables declared with let or const inside {} are not accessible outside.
- Function Scope:
  Variables declared inside a function exist only within that function.
- Global Scope:
  Accessible everywhere unless shadowed by a local variable.
- Shadowing:
  A local variable with the same name hides the global variable inside its scope.

# Returning Objects

- Must wrap object literal in parentheses:
  
  ```js
  const makeUser = (name, age) => ({ name, age });
  ```

# Template Literals in Functions

- Useful for multi‑line or formatted returns:
  return `Name: ${name}\nAge: ${age}`;

# Gotchas

- Arrow functions do not have their own this.
- Returning objects requires parentheses.
- Missing return in a block body returns undefined.
- Global variables can be mutated unintentionally.

