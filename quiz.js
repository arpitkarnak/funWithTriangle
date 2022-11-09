const quizForm = document.querySelector('.quiz-form')
const submitAnswer = document.querySelector('#submit-answer')
const output1 = document.querySelector('#output')

const correctAnswer = ["60°","right angle","3","180","equilateral triangle"]


function calculateScore(){
    let score = 0;
    let index = 0;
    var formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === correctAnswer[index]){
            score = score + 1;
        }
        index = index + 1;
    }
    output1.innerText = "Your score is" + score;
}

submitAnswer.addEventListener('click',calculateScore);