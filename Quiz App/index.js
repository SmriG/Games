import questions from './questions.json' assert {type:"json"};

const TotalQuestions = questions.length-1;
let SCORE = 0;
let INDEX = 0;

function displayQuestion(question){
    const QuestionDiv = document.querySelector(".question_section")
    const questionHeading = document.createElement("h4");
    questionHeading.classList = "question_text";
    questionHeading.textContent = question.question_text;
    QuestionDiv.appendChild(questionHeading);
    question.options.forEach(element => {
        const option = document.createElement('p');
        option.classList = "option";
        option.textContent = element;
        QuestionDiv.appendChild(option);
    });

}

function displayButtons(i){
    const ButtonDiv = document.querySelector(".button_section");
    const evaluateButton = document.createElement('button');
    const questionButton = document.createElement('button');
    if(i===TotalQuestions){
        questionButton.textContent = "FINISH";
        questionButton.style.backgroundColor="rgb(101, 198, 101)"
    }else{
        questionButton.textContent = "NEXT"
        questionButton.style.backgroundColor="rgb(64, 110, 197)";
        questionButton.onclick = nextButton;

    }
    evaluateButton.textContent="EVALUATE";
    evaluateButton.style.backgroundColor="rgb(240, 240, 108)"
    ButtonDiv.appendChild(evaluateButton);
    ButtonDiv.appendChild(questionButton);
}

function correctAnswer(anwser, selected){
    const status = document.querySelector(".status");
    status.style.backgroundColor="yellow"
    if (anwser === selected){
        SCORE+=1;
        status.textContent="GOOD!";
        status.style.color="green";
    }
    else{
        status.textContent="SHOOT! BETTER LUCK NEXT TIME";
        status.style.color="red";
    }
}

function displayScore(){
    const score = document.querySelector(".info_section");
    score.textContent = "SCORE: " + SCORE
}

displayScore()

function startGame(){

    displayQuestion(questions[INDEX])
    displayButtons(INDEX)
}

function nextButton(){
    INDEX+=1;
    displayQuestion(questions[INDEX]);
    // displayButtons(INDEX)

};

function finishButton(){
    INDEX = 0;
    SCORE = 0;
    displayQuestion(questions[INDEX]);
    // displayButtons(INDEX)


}

window.onload = function () {
    startGame()

  };
  
  