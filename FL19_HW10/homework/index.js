

const nickname = document.getElementById('nickname').value;
const buttonOpen = document.getElementById('button-btn-start'),
bestResult = document.getElementById('button-btn-best-result'),
bestResultAllTime = document.getElementById('button-btn-best-result-for-all-time'),
clearBestResultButton = document.getElementById('button-btn-clear-best-result'),
clearBestResultAllTimeButton = document.getElementById('button-btn-clear-best-result-for-all-time'),

btnClicker = document.getElementById('clicker');

	let openerHandler = function(){
    try { 
      if (nickname === '') { 
        throw 'Empty nickname' 
      } 
    } catch(err) {

  alert(err); 
} 
}
buttonOpen.addEventListener('click', openerHandler);

let openerr = document.getElementById('button-btn-start');
let clickTimesCount;
let out;
let opeNer; 
let startHandler = function(){
  if(nickname !== ''){
    opeNer.addEventListener('click', function(){
      clickTimesCount+=1;
      let objectPlay={
        nickname: nickname.value,
        times: clickTimesCount
      }
      localStorage.setItem('player',JSON.stringify(objectPlay))
    })
    setTimeout(function(){
      alert(`Your clicked ${clickTimesCount} times`);
    }, out);
    console.log(localStorage.getItem('player'));
  } 
}

openerr.addEventListener('click', startHandler);

