interface Person {
    first:string;
    last:string;
    [key: string] : any;
}


const person:Person = { 
    first: 'Jeff',
    last: 'Delaney'
}

const person2 = {
    first: 'Eden',
    last: 'Abu',
    like: '🥙'
}

function pow(x:number, y:number ): string{
    return Math.pow(x, y ).toString();
}

pow(5 , 3)

// Arrays

const arr :Person[] = []

arr.push(person)
arr.push(person2)

type MyList = [number, string, boolean]

const arr2:MyList[] = []

arr2.push([1, 'hello', false])
arr2.push([2, 'world', true])

console.log(arr2)


// Generics
class Observable<T> {
    constructor(public value: T){

    }
}

let x: Observable<number>;