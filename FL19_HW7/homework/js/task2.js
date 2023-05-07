let startGame = confirm('Do you want to play a game?');
let currentMaxPrize;
let win;
let numberOfGame;
let hightNumber;
let numberOfUser;
const two = 2;
const basicMaxPrize = 100;
const inputNumbers = 4;
const attempts = 3;
const maxNumberStart = 8;
const lowNumber = 0;
let continuance = true;
let tryOneMore = true;

if(!startGame) {
    alert('You did not become a billionaire, but can.');
} else {
    while(tryOneMore === true) {
        win = 0;
        let j = 0;
        continuance = true;
        while (continuance === true) {
            currentMaxPrize = basicMaxPrize * Math.pow(two, j);
            hightNumber = maxNumberStart + inputNumbers*j;
            numberOfGame = Math.floor(lowNumber + Math.random()*(hightNumber +1-lowNumber));
            for(let i = 0; i < attempts; i++ ) {
                numberOfUser = Number(prompt(`Choose a roulette pocket number from ${lowNumber} to ${hightNumber}
                    Attempts left: ${attempts-i}
                    Total win: ${win}$
                    Posiible prize on current attempt: ${currentMaxPrize/Math.pow(two, i)}$ `));
                if (Number.isInteger(numberOfUser)===false) {
                    alert('Please enter the integer');
                }
                console.log(numberOfUser);
                if (numberOfUser === numberOfGame) {
                    if ( i === 0 ) {
                        win += currentMaxPrize/Math.pow(two, i);
                        alert(`Congratulation, you won! Your prize is: ${currentMaxPrize/Math.pow(two, i)}$.`);
                        break;
                    } else if ( i === 1 ) {
                        win += currentMaxPrize/Math.pow(two, i);
                        alert(`Congratulation, you won! Your prize is: ${currentMaxPrize/Math.pow(two, i)}$.`);
                        break;
                    } else if ( i === attempts-1 ) {
                        win += currentMaxPrize/Math.pow(two, i);
                        alert(`Congratulation, you won! Your prize is: ${currentMaxPrize/Math.pow(two, i)}$.`);
                        break;
                    }
                } else {
                    continue;
                }
            }
            if ( numberOfUser === numberOfGame ) {
                continuance = confirm('Do you want to continue?', '');
                if (continuance) {
                    j++;
                } else {
                    alert(`Thank you for your participation. Your prize is: ${win}$`);
                }
            } else {
                alert(`Thank you for your participation. Your prize is: ${win}$`);
                continuance = false;
            }
        }
        tryOneMore = confirm('Do you want to play again?');
    }
}
