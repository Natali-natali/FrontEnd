// #1
function calculateSum(arr) {
let result = arr.reduce(
  (previousValueNatali, currentValueNatali) => previousValueNatali + currentValueNatali,0);
    return result;
}

//console.log(calculateSum([1,2,3,4,5])); //15

// #2
function isTriangle(a, b, c) {  
    if (a+b > c && a+c > b && c+b > a) {
        return true;
        } else {
        return false;
    }
}
// console.log(isTriangle(5,6,7)); //true
// console.log(isTriangle(2,9,3)); //false

// #3
function isIsogram(word) {
    let nat, natt;
    for(nat = 0; nat < word.length; ++nat) {
        for(natt = nat + 1; natt < word.length; ++natt) {
            if(word[nat] === word[natt]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram('Dermatoglyphics')); //true
console.log(isIsogram('abab')); //false

// #4
function isPalindrome(word) {
let splitStringNatali = word.split('');
let reverseArrayNatali = splitStringNatali.reverse();
let joinArrayNatali = reverseArrayNatali.join('');

    if(word === joinArrayNatali) {
        return true;
        } else {
        return false;
        }
    }
console.log(isPalindrome('Dermatoglyphics')); //false
console.log(isPalindrome('abbabba')); //true

// #5
function showFormattedDate(dateObj) {
let rik = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
let misyac = new Intl.DateTimeFormat('en', { month: 'long' }).format(dateObj);
let den = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);
    return `${den} of ${misyac}, ${rik}`;
}

// console.log(showFormattedDate(new Date('05/12/22'))); //'12 of May, 2022'

// #6
const letterCount = (str, letter) => {
    return str.split(letter).length - 1;
}

console.log(letterCount('abbaba', 'b')); //3
console.log(letterCount('Marry', 'r')) // 2
console.log(letterCount('Barny', 'y')) // 1
console.log(letterCount('', 'z')) // 0

// #7
function countRepetitions(arr) {
const countsNatali = {};
arr.forEach(function (xNatali) { 
	countsNatali[xNatali] = (countsNatali[xNatali] || 0) + 1;
	});
return countsNatali;
}

//console.log(countRepetitions(['banana', 'apple', 'banana'])); // { banana: 2, apple: 1 }

// #8
function calculateNumber(arr) {
    return Number.parseInt(arr.join(''), 2);
}

//console.log(calculateNumber([0, 1, 0, 1])); //5
//console.log(calculateNumber([1, 0, 0, 1])); //9
