
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

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `object` | `object` | **Required**. The object to mutate in |
| `MutateFunction` |`function`  | **Required**. the function will be called on every string, your string will be passed to it, you should return the stating you want to be placed  



