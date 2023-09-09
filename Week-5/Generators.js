function* generatorsfun(arr) {
  for (const element of arr) {
    yield Symbol(element);
  }
}

const Array = ["hello", "world", "test"];

const Iterator = generatorsfun(Array);

console.log(Iterator.next().value);
console.log(Iterator.next().value);
console.log(Iterator.next().value);