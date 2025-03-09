const questions = [
    {
        topic: '',
        question: '',
        possibleAnswers: ['blue', 'green'],
        correctAnswer: 'blue'

    },
    {
        topic: '',
        question: '',
        possibleAnswers: ['blue', 'green'],
        correctAnswer: 'blue'

    }
]

const quizProgress = document.getElementById('quizProgress')
const questionContainer = document.getElementById('questionContainer')
const answerContainer = document.getElementById('answerContainer')

function handleQuestion(){
    questions.forEach((question) => {
        quizProgress.innerHTML += "<span></span>";
    });
}