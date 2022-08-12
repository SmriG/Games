import questions from './questions.json' assert {type:"json"};

const TotalQuestions = questions.length;
let SCORE = 0;

function displayQuestion(question){
    const QuestionDiv = document.querySelector(".question")
    const questionHeading = document.createElement("h3");
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
    const ButtonDiv = document.querySelector(".buttons");
    const evaluateButton = document.createElement('button');
    const questionButton = document.createElement('button');
    if(i===TotalQuestions){
        questionButton.textContent = "FINISH";
        questionButton.style.backgroundColor="rgb(101, 198, 101)"
    }else{
        questionButton.textContent = "NEXT"
        questionButton.style.backgroundColor="rgb(64, 110, 197)"

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
