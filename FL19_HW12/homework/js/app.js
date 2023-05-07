import { dictionary } from './dictionary.js';

const numberGuessNatali = 6;
let zalusheniSprobu = numberGuessNatali;
let ptochnaSproba = [];
let nastypnaBykva = 0;
let aa = 0;
let bb = 5;
let cc = 6;
let dd = 1;
let gg = 250;
let pravulneSlovo = dictionary[Math.floor(Math.random() * dictionary.length)]
console.log(pravulneSlovo)

function initBoard() {
    let board = document.getElementById('game-board');

    for (let i = 0; i < numberGuessNatali; i++) {
        let row = document.createElement('div')
        row.className = 'rjadok-slova'
        
        for (let j = aa; j < bb; j++) {
            let box = document.createElement('div')
            box.className = 'slova-conteiner'
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}

initBoard()

document.addEventListener('keyup', (e) => {

    if (zalusheniSprobu === 0) {
        return
    }

    let pressedKey = String(e.key)
    if (pressedKey === 'Backspace' && nastypnaBykva !== 0) {
        deleteLetter()
        return
    }

    if (pressedKey === 'Enter') {
        checkGuess()
        return
    }

    let found = pressedKey.match
    if (!found || found.length > 1) {
        return
    } else {
        insertLetter(pressedKey)
    }
})

function insertLetter (pressedKey) {
    if (nastypnaBykva === bb) {
        return
    }
    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName('rjadok-slova')[cc - zalusheniSprobu]
    let box = row.children[nastypnaBykva]
   
    box.textContent = pressedKey
    box.classList.add('pole')
    ptochnaSproba.push(pressedKey)
    nastypnaBykva += 1
}

function deleteLetter () {
    let row = document.getElementsByClassName('rjadok-slova')[cc - zalusheniSprobu]
    let box = row.children[nastypnaBykva - 1]
    box.textContent = ''
    box.classList.remove('pole')
    ptochnaSproba.pop()
    nastypnaBykva -= 1
}

function shadeKeyBoard(letter, color) {
    for (const elem of document.getElementsByClassName('knopka')) {
        if (elem.textContent === letter) {
            let oldColor = elem.style.backgroundColor
            if (oldColor === 'green') {
                return
            } 

            if (oldColor === 'yellow' && color !== 'green') {
                return
            }

            elem.style.backgroundColor = color
            break
        }
    }
}

function checkGuess () {
    let row = document.getElementsByClassName('rjadok-slova')[cc - zalusheniSprobu]
    let guessString = ''
    let rightGuess = Array.from(pravulneSlovo)

    for (const val of ptochnaSproba) {
        guessString += val
    }

    if (guessString.length !== bb) {
        alert('Not enough letters!')
        return
    }

    if (!dictionary.includes(guessString)) {
        alert('Word not in list!')
        return
    }

    
    for (let i = aa; i < bb; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = ptochnaSproba[i]
        
        let letterPosition = rightGuess.indexOf(ptochnaSproba[i])
        
        if (letterPosition === -dd) {
            letterColor = 'grey'
        } else {
        
            if (ptochnaSproba[i] === rightGuess[i]) {
                
                letterColor = 'green'
            } else {
             
                letterColor = 'yellow'
            }

            rightGuess[letterPosition] = '#'
        }

        let delay = gg * i
        setTimeout(() => {
           
            box.style.backgroundColor = letterColor
            shadeKeyBoard(letter, letterColor)
        }, delay)
    }

    if (guessString === pravulneSlovo) {
        alert('You guessed right! Game over!')
        zalusheniSprobu = 0
        return
    } else {
        zalusheniSprobu -= 1;
        ptochnaSproba = [];
        nastypnaBykva = 0;

        if (zalusheniSprobu === 0) {
            alert('You have run out of guesses! Game over!')
            alert(`The right word was: '${pravulneSlovo}'`)
        }
    }
}

document.getElementById('keyboard-cont').addEventListener('click', (e) => {
    const target = e.target
    
    if (!target.classList.contains('knopka')) {
        return
    }
    let key = target.textContent

    if (key === 'Del') {
        key = 'Backspace'
    } 

    document.dispatchEvent(new KeyboardEvent('keyup', {'key': key}))
})




