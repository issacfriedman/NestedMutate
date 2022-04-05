export const nestedMutate = function (obj, mutateFunction) {
  // basic argument check

  if (typeof mutateFunction !== "function")
    throw new Error("mutateFunction is not a function");

  // check if the object passed is really an object

  if (typeof obj !== "object" || obj === null)
    throw new Error("the Object is not really an Object");

  // we need to know what the children of the object is,
  // if a child is a sting we can mutate it with the refrence of the object like object.child = mutate(object.chilid)
  // but if the child is also an object then we need to run this function again recorcively and check again the children
  // so to get to know the what this children are we use Object.keys and filter based on the type (hope its understanable 😉 )

  const objKeys = Object.keys(obj);

  // get all keys that are objects

  const keysThatAreObjects = objKeys.filter(
    (key) => typeof obj[key] === "object" && obj[key] !== null
  );

  // get all the keys that are strings

  const keysThatAreString = objKeys.filter(
    (key) => typeof obj[key] === "string"
  );

  // mutate all the strings

  keysThatAreString.forEach(
    (string) => (obj[string] = mutateFunction(obj[string]))
  );

  // mutate all the objects
  // to mutate an object we basicly recorcively call this function again

  keysThatAreObjects.forEach((object) =>
    nestedMutate(obj[object], mutateFunction)
  );
};
