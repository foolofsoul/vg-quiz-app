var questionLists = [
  {
    qNum: 'question1',
    bg: 'url(img/smash.jpg) no-repeat',
    answer: 'optionA'
  },
  {
    qNum: 'question2',
    bg: 'url(img/megaman.jpg) no-repeat',
    answer: 'optionC'
  },
  {
    qNum: 'question3',
    bg: 'url(img/ryu.jpg) no-repeat',
    answer: 'optionD'
  },
  {
    qNum: 'question4',
    bg: 'url(img/gears.jpg) no-repeat',
    answer: 'optionC'
  },
  {
    qNum: 'question5',
    bg: 'url(img/minecraft.jpg) no-repeat',
    answer: 'optionB'
  },
  {
    qNum: 'question6',
    bg: 'url(img/cell.jpg) no-repeat',
    answer: 'optionD'
  },
  {
    qNum: 'question7',
    bg: 'url(img/mgs.jpg) no-repeat',
    answer: 'optionC'
  },
  {
    qNum: 'question8',
    bg: 'url(img/finalf.jpg) no-repeat',
    answer: 'optionA'
  },
  {
    qNum: 'question9',
    bg: 'url(img/sonic.png) no-repeat',
    answer: 'optionB'
  },
  {
    qNum: 'question10',
    bg: 'url(img/pokemon.png) no-repeat',
    answer: 'optionC'
  }
]

var body = document.getElementsByTagName('body')[0];
var forms = document.getElementsByTagName('form');
var button = document.querySelectorAll('button[type="button"]');
var answersRight = 0;
var answersWrong = 0;

function changeBg(){
  for( var i = 0; i < forms.length; i++ ) {
    if ( forms[i].className === 'active') {
      for (var j = 0; j < questionLists.length; j++) {
        if( forms[i].id === questionLists[j].qNum) {
          body.style.background = 'linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)), ' + questionLists[j].bg;
          body.style.backgroundSize = 'cover';
        }
      }
    }
  }
}

function showResults(){
  var resultDiv = document.createElement('div')
  resultDiv.className = 'result-container'
  var resultHeader = document.createElement('h3')
  resultHeader.className = 'result-header'
  resultHeader.textContent = 'Your results:'
  var resultText = document.createElement('p')
  resultText.innerHTML = 'Right: ' + answersRight + '<br>' + 'Wrong: ' + answersWrong
  resultText.className = 'result-text'
  resultDiv.appendChild(resultHeader)
  resultDiv.appendChild(resultText)
  body.appendChild(resultDiv)
}

function checkAnswer(e){
  e.preventDefault();
  var target = e.target;
  var targParent = target.parentNode.parentNode;
  var getOptions = targParent.elements
  var errorHead = document.getElementById('error-head')
  var header = document.getElementById('main-header')

  for (var i = 0; i < getOptions.length; i++) {
    if (getOptions[i].checked) {
      for (var j = 0; j < questionLists.length; j++) {
        if ( targParent.id === questionLists[j].qNum) {
          if (getOptions[i].value === questionLists[j].answer) {
            answersRight++;
            console.log('answersRight: ' + answersRight)
          } else {
            answersWrong++;
            console.log('answersWrong: ' + answersWrong)
          }
        }
      }
      for( var k = 0; k < forms.length; k++){
        
        if(targParent.id === forms[k].id){
          forms[k].className = ''
          if ((k + 1) === 10){
            console.log('yes')
            showResults()
          } else {
            forms[k+1].className = 'active'
          }

        }
      }
      changeBg()
      errorHead.textContent = ''
      break
    } else if (!getOptions[i].checked){
      errorHead.textContent = 'Please select an option!'

    }
  }
} // End checkAnswer function

for(var l = 0; l < button.length; l++){ 
  button[l].addEventListener('click', checkAnswer);
}

window.addEventListener('load', changeBg)



