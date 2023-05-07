// Your code goes here


//1

function getWeekDay(date) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return days[date.getDay()];
}

let date1 = new Date('2020, 9, 22');
let date = new Date();
console.log( getWeekDay(date) );
console.log( getWeekDay(date1) );


//2
let ss = 1000;
let ff = 60;
let gg = 24;
let today1 = new Date('2020, 8, 30');
let today2 = new Date('2020, 1, 1');
let year1 = today1.getFullYear();

let yearDate1 = new Date('2020, 12, 31');

let remainingDays1 = Math.ceil(
  (yearDate1.getTime() - today1.getTime()) / 
  (ss * ff * ff * gg) 
);
let remainingDays2 = Math.ceil(
  (yearDate1.getTime() - today2.getTime()) /
   (ss * ff * ff * gg)
);
console.log(remainingDays1); 
console.log(remainingDays2); 


//3
let aa = 17;
let bb = 18;
let xx = 1000;
let vv = 60;
let nn = 24;
let mm = 365;
let hh = 2004;
let qq = 12;
let ww = 29;
let ee = 2007;
let rr = 2000;
let tt = 9;
let yy = 22;

let today = new Date('2022, 1, 1');
const birthday17 = new Date(hh, qq, ww);
const birthday15 = new Date(ee, qq, ww);
const birthday22 = new Date(rr, tt, yy); 

function getApproveToPass (data) {
let age = today - data;
age = Math.round(age/xx/vv/vv/nn/mm);
let eighteen = data.setFullYear(data.getFullYear());
eighteen = Math.ceil(eighteen/xx/vv/vv/nn/mm/bb);
if (age === aa) {
  return `Hello adventurer, you are to yang for this
quest wait for (if less than one year left than “few more months”!`
} else if (age < bb) {
  return `Hello adventurer, you are to yang for this
quest wait for (if less than one year left than “few more months” if more
than year than ${eighteen} years more)!`
} else if (age > bb) {
     return `Hello adventurer, you may pass!`
  }
}

console.log(getApproveToPass(birthday17));
console.log(getApproveToPass(birthday15));
console.log(getApproveToPass(birthday22)); 

//4

const elementP = 'tag="p" class="text" style={color: #aeaeae;} value="Aloha!"';
function transformStringToHtml(string) {  
    let [tagNazva] = string.match(new RegExp('(?<=tag=")[^"]+(?=")', 'g'));  
    let [tagZnachennya] = string.match(new RegExp('(?<=value=")[^"]+(?=")', 'g'));  
    let tagZnachennyaAttrib = string.replace(/(tag=".*?")/g, '').replace(/({|})/g, '"').replace(/(value=".*?")/g, '');  
    return `<${tagNazva} ${tagZnachennyaAttrib}>${tagZnachennya}</${tagNazva}> `;  
}  
transformStringToHtml(elementP);
console.log( transformStringToHtml(elementP) );

//5

function isValidIdentifier(input) {
      let string = input;
        let result = string.match(/^\D(.+)([a-zA-Z\d_$]+)$/);
     if (result === null) {
        return false;
     } else {
      return true;
     }
    }
    


console.log(isValidIdentifier('myVar!')); // false
console.log(isValidIdentifier('myVar$'));// true
console.log(isValidIdentifier('myVar_1'));// true
console.log(isValidIdentifier('1_myVar'));// false

//6
let testStr = 'My name is John Smith. I am 27.';

const capitalize = testStr => testStr.replace(/^(.)|\s+(.)/g, c => c.toUpperCase());

capitalize(testStr);
console.log(capitalize(testStr));

//7

function isValidPassword(password) {
      let string = password;
         return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(string);
    }

console.log(isValidPassword('agent007')); // false (no uppercase letter)
console.log(isValidPassword('AGENT007'));// false  (no lowercase letter)
console.log(isValidPassword('AgentOOO'));// false (no numbers)
console.log(isValidPassword('Age_007'));// false   (too short)
console.log(isValidPassword('Agent007'));// true   


//8
let zzz = 7;
let xxx = 5;
let ccc = 2;
let vvv = 4;
let bbb = 3;
let nnn = 9;
let array = [zzz,xxx,ccc,vvv,bbb,nnn];
function sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}
console.log(sort([zzz,xxx,ccc,vvv,bbb,nnn]));

//9
let aaa = -1;
const inventory = [
{ name: 'milk', brand: 'happyCow', price: 2.1 },
{ name: 'chocolate', brand: 'milka', price: 3 },
{ name: 'beer', brand: 'hineken', price: 2.2 },
{ name: 'soda', brand: 'coca-cola', price: 1 }
];

inventory.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return aaa;
  }
  return 0;
});

console.log(sort(inventory));

