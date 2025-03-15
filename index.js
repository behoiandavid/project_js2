function sumBigIntegers(numStr1, numStr2) {
    let BigInt1 = BigInt(numStr1);
    let BigInt2 = BigInt(numStr2);

    return BigInt1 + BigInt2;
}

console.log(sumBigIntegers('9007199254740991', '9007199254740991'));





function greetByName(msg, name) {
    return msg + ', ' + name;
}

console.log(greetByName('Hi', 'John'));
console.log(greetByName('Hey', 'Bob'));
console.log(greetByName('Hello', 'Mary'));




function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 10));
console.log(getRandomInt(40, 50));
console.log(getRandomInt(1, 100));

