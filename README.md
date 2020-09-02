[![mikeyhogarth](https://circleci.com/gh/mikeyhogarth/number-sequences.svg?style=svg)](https://circleci.com/gh/mikeyhogarth/number-sequences)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d86b1fb82cf54880854ac0649ef3ab0f)](https://www.codacy.com/manual/mikeyhogarth/number-sequences?utm_source=github.com&utm_medium=referral&utm_content=mikeyhogarth/number-sequences&utm_campaign=Badge_Grade)

# Number Sequences

JS library to generate number sequences.

## Installation

This library is not yet published.

## Example

All sequence types expose an API to return the next item in
the sequence or the next N items. Sequences manage their own
state.

```javascript
import { Arithmetic } from "number-sequences";

const seq = Arithmetic(1, 1);
seq.next(); // 1
seq.next(); // 2
seq.next(); // 3

const seq = Arithmetic(1, 1);
seq.nextN(3); // [1, 2, 3]
```

## Available sequences

The following types of sequence are available with the following parameters being permitted for each.

- `Arithmetic(start, commonDifference)`
- `Geometric(start, commonRatio)`
- `Fibonacci()`

# Contributing

## Build

```
npm build
```

## Tests

```
npm test
npm run test:watch
```
