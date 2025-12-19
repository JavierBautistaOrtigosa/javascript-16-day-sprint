# Variables

- let: declares a block-scoped variable.
- const: declares a block-scoped constant.

- **Question: **
- Explain what is block-scoped variable & block scoped constant.

# Data Types

|Type           |Description                        |Example            |
|:--------------|:----------------------------------|:------------------|	
|string         |Textual data                       |'hello'            |
|number         |Numeric data                       |42                 |
|boolean        |True or false                      |true               |
|null           |Intentional absence of value       |null               |
|undefined      |Variable declared but no value     |undefined          |
|bigint         |Large integers                     |9007199254740991n  |
|symbol         |Unique identifiers                 |Symbol('id')       |

# typeof Operator

- Returns the type of a variable.
- Special case: typeof null returns 'object' (a known JavaScript quirk).

# Operators

- Arithmetic: +, -, *, /, %, **
- Comparison: ==, ===, !=, !==, <, <=, >, >=
- Logical: &&, ||, !

# Template Literals

- Use backticks `.
- Embed expressions with ${expression}.
- Support multi-line strings.

# Console Methods

- console.log() - general output.
- console.error() - error messages.
- console.table() - tabular data display.

# Gotchas

- typeof null returns 'object'.
- const variables cannot be reassigned.
- == vs ===: == does type coercion, === does strict comparison.
- Uninitialized variables have the value undefined.
- BigInt literals end with n.

- **Question:**
- What is type coercion?
- What is strict comparison?
- What is uninitialized variables?
  