


function grid() {
    let container = document.querySelector('.container');
        
        for (let j = 0; j < ll; j++) {
            let tile = document.createElement('div')
            tile.className = 'tile'
            container.appendChild(tile)
        }

    }

grid()

let removeButton = document.getElementById('reset');
function remove(){
    removeButton.addEventListener()

}
let aa = 1;
let ss = 2;
let dd = 3;
let ff = 4;
let gg = 5;
let hh = 6;
let jj = 7;
let kk = 8;
let ll = 9;

const huPlayer = 'O';
const aiPlayer = 'X';
const winCombos = [
	[0, aa, ss],
	[dd, ff, gg],
	[hh, jj, kk],
	[0, dd, hh],
	[aa, ff, jj],
	[ss, gg, kk],
	[0, ff, kk],
	[hh, ff, ss]
]

