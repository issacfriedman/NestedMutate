## Installation

Install nested-mutate with npm

```bash
  npm i nested-mutate

```

## Install with cdn

import your local script as a module

```html
<script src="script.js" type="module"></script>
```

and in your js file you can use the import

```js
import nestedMutate from "https://unpkg.com/nested-mutate@1.0.2/index.js";
```

# Nested Mutate

javascript function to mutate every string in deep nested objects

## Usage

#### pass in a mutate function

```js
  nestedMutate(someNestedObject, (str) => str.include("a") ? "Not Allowed" : str));
```

| Parameter        | Type       | Description                                                                                                                                      |
| :--------------- | :--------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| `object`         | `object`   | **Required**. The object to mutate in                                                                                                            |
| `MutateFunction` | `function` | **Required**. the function will be called on every string, your string will be passed to it, you should return the stating you want to be placed |

## Usage/Examples

```javascript
import nestedMutate from "nested-mutate";

const obj = {
  obj1: {
    name: "Abby F. Lykes",
  },
  obj2: {
    name: "Mary H. Wright",
    arr: [
      "green",
      "blue",
      "yellow",
      {
        deep: "im deep",
      },
    ],
    nested: {
      name: "George L. Clough",
    },
  },
  notAnObject: "im not an objec",
};

const addIhaveBeenModified = function (twig) {
  return twig + " I have been modified!";
};

// call the function the object will be mutated

nestedMutate(obj, addIhaveBeenModified);

console.log(obj);
```
