var ques = document.getElementById('question');
var answerA = document.getElementById('a');
var answerB = document.getElementById('b');
var answerC = document.getElementById('c');
var answerD = document.getElementById('d');

const quizQuestions = [
    // Question no 1
    {
        question: "What is the capital of Pakistan?",
        a: "Faisalabad",
        b: "Islamabad",
        c: "Lohare",
        d: "Karachi",
        correct: 'b'
    },
    // Question no 2
    {
        question: "What is the national animal of Pakistan?",
        a: "Lion",
        b: "Markhor",
        c: "Lapord",
        d: "Zebra",
        correct: 'b'
    },
    // Question no 3
    {
        question: "What is the capital of Saudi",
        a: "Madina",
        b: "Riyad",
        c: "Makka",
        d: "Jeddah",
        correct: 'c'
    },
    // Question no 4
    {
        question: "What is the capital of Australia?",
        a: "Sedny",
        b: "Melborne",
        c: "Perth",
        d: "Coast",
        correct: 'd'
    },
    // Question no 5
    {
        question: "What is the capital of Canada?",
        a: "Toronto",
        b: "Calligary",
        c: "Missisaga",
        d: "Ottawa",
        correct: 'd'
    }, {

    }
]

// initialize the index
let currentQuestion = 0;



let reloadQuestion = () => {


    var question = quizQuestions[currentQuestion].question;
    ques.innerHTML = question;
    // Answer 1
    var choice1 = quizQuestions[currentQuestion].a;
    answerA.innerHTML = choice1;
    // Answer 2
    var choice2 = quizQuestions[currentQuestion].b;
    answerB.innerHTML = choice2;
    // Answer 3
    var choice3 = quizQuestions[currentQuestion].c;
    answerC.innerHTML = choice3;
    // Answer 4
    var choice4 = quizQuestions[currentQuestion].d;
    answerD.innerHTML = choice4;
}
let score = 0;

var selectQuestion = () => {
    // let choosed = undefined;
    let select = document.querySelectorAll(".ans");
    // console.log(select);


    select.forEach((ele) => {
        ele.addEventListener('click', () => {

            let choosed = ele.id;
            //  document.getElementById(choosed).style.backgroundColor = "Green"
            //  document.getElementById(choosed).style.color = "White"

            if (choosed ===quizQuestions[currentQuestion].correct) {
                score++;
            }
            else if (!choosed) {
                // checked(false)
                // document.getElementById(choosed).style.backgroundColor = "Red"
                // document.getElementById(choosed).style.color = "White"
                console.log('wrong');
            }
            // console.log(choosed);
        })
    });

    // document.querySelectorAll(".ans").forEach( (ele,)   =>{
    //     ele.addEventListener('click', ()=>{
    //        const get = ele.id;
    //        console.log(get,);
    //     })
    // });

}
selectQuestion();

reloadQuestion();
function showScore() {
  
}
document.getElementById('para').innerHTML = "Your Score Is Here: " + score

// To submit the question
function checked() {

    currentQuestion++
    reloadQuestion()
    if (currentQuestion+1 >= quizQuestions.length) {
        currentQuestion = 0;
        reloadQuestion();
        score = 0
    }

    // resetQuiz()
    // show Score that you made
    if (currentQuestion <= quizQuestions.length) {
        document.getElementById('para').innerHTML = "Your Score Is Here: " + score
    }

}














