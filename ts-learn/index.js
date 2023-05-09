const person = {
    first: 'Jeff',
    last: 'Delaney'
};
const person2 = {
    first: 'Eden',
    last: 'Abu',
    like: '🥙'
};
function pow(x, y) {
    return Math.pow(x, y).toString();
}
pow(5, 3);
// Arrays
const arr = [];
arr.push(person);
arr.push(person2);
const arr2 = [];
arr2.push([1, 'hello', false]);
arr2.push([2, 'world', true]);
console.log(arr2);
// Generics
class Observable {
    value;
    constructor(value) {
        this.value = value;
    }
}
let x;
