## Installation

Install nested-mutate with npm

```bash
  npm i nested-mutate

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
