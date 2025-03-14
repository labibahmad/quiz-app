const questions = [
    {
        topic: 'IQ',
        question: 'What color is the sun?',
        possibleAnswers: ['white', 'yellow'],
        correctAnswer: 'white'

    },
    {
        topic: 'Anime',
        question: 'Greatest anime ever?',
        possibleAnswers: ['AOT', 'Deathnote'],
        correctAnswer: 'AOT'

    }
]

const quizProgress = document.getElementById("quizProgress");
const questionContainer = document.getElementById("questionContainer");
const answerContainer = document.getElementById("answerContainer");

let currentQuestionIndex = 0;

function handleQuestion(index) {
    questions.forEach((question) => {
        quizProgress.innerHTML += "<span></span>";
    });

    let spans = document.querySelectorAll("span");
    for (let i=0; i<= index; i++){
        spans[i].classList.add("seen");
    }

    //topics/questions
    questionContainer.innerHTML = 
    `<p>${questions[index].topic}</p>
    <p>${questions[index].question}</p>`;

    //ANSWERS
    questions[index].possibleAnswers.forEach(answer => {
        answerContainer.innerHTML += `<button>${answer}</button>`
    });

    let answers = document.querySelectorAll("button");
    answers.forEach((answer)=>{
        answer.addEventListener("click", (e) => {
            if(e.target.textContent === questions[index].correctAnswer) {
                console.log("correct");
            } else {
                console.log("wrong");
            }
            });
        });

        

    };

handleQuestion(currentQuestionIndex);