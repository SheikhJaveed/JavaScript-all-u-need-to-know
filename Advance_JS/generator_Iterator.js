function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

let gen1=generator();
console.log(gen1.next().value); //1
console.log(gen1.next().value); //2
console.log(gen1.next().value); //3
console.log(gen1.next().value); //undefined


let gen2=generator();
console.log(gen2.next().value);
console.log(gen2.next().value);

//NOTE: this is very rarely used in real world applications. It is used in libraries like redux-saga, redux-thunk etc. to handle async operations.