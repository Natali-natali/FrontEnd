// #1
function extractCurrencyValue(param) {

let nattaliNum = Number(param.split(' ')[0]); 
if (param.length >= 16) {
    return BigInt(nattaliNum); 
} else{
    return nattaliNum;
}
}

console.log(extractCurrencyValue('120 USD')); // 120
console.log(extractCurrencyValue('1283948234720742 EUR')); // 1283948234720742n


// #2

let object = {
    name: 'Ann',
    age: 16,
    hobbies: undefined,
    degree: null,
    isChild: false,
    isTeen: true,
    isAdult: false
}

function clearObject(obj) { 
for (let nattali in obj) {
  if (obj[nattali] === null || obj[nattali] === undefined || obj[nattali] === false) {
  delete obj[nattali];
  }
 } return obj;
}

console.log(clearObject(object)); // { name: 'Ann', age: 16, isTeen: true }



// #3

function getUnique(param) {
    param = Symbol('Test');
    return param;
} 

console.log(getUnique('Test')) // Symbol('Test')


// #4

function countBetweenTwoDays(startDate, endDate) {
startDate = new Date('03/22/22');
endDate = new Date('05/25/22');
let beetwenInTime = endDate.getTime() - startDate.getTime();
let beetwenInDays = Math.round(beetwenInTime / (1000 * 3600 * 24));
let beetwenInMonth = Math.round(beetwenInTime / (1000 * 3600 * 24 * 30));
let beetwenInWeeks = Math.round(beetwenInTime / (1000 * 3600 * 24 * 7));
return `The difference between dates is: ${beetwenInDays} day(-s),
${beetwenInWeeks} week(-s),
${beetwenInMonth} month(-s)`;
}

console.log(countBetweenTwoDays('03/22/22', '05/25/22')); // The difference between dates is: 64 day(-s), 9 week(-s), 2 month(-s)


// #5

function filterArrayOne(arr) {
    arr = [1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9];
    let filterArray = [...new Set(arr)];
    return filterArray;

}

function filterArrayTwo(arr) {
    arr = [1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9];
    let filterArray = arr.filter((n, m) => arr.indexOf(n) === m);
    return filterArray;

}

console.log(filterArrayOne([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9]))// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(filterArrayTwo([1, 2, 2, 4, 5, 5, 5, 6, 6, 7, 7, 8, 8, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
