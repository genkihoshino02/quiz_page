const questionWrapper=document.getElementById("question-wrapper");
const resultsQuiz=document.getElementById("results");

let questions=[
{
        "question":"Howdy?",
        "choiceA":"Great",
        "choiceB":"Huh?",
        "choiceC":"Come again?",
        "answer":"Great"
},
{
        "question":"How old are you?",
        "choiceA":"No idea",
        "choiceB":"21 yers old",
        "choiceC":"Come again?",
        "answer":"No idea"
},{
        "question":"What's up?",
        "choiceA":"Not bad",
        "choiceB":"Huh?",
        "choiceC":"Come again?",
        "answer":"Come again?"
}
];

const numberOfQuestions=questions.length-1;
for(let i =0;i<=numberOfQuestions;i++){
    questionWrapper.innerHTML+="<h3>"+ questions[i].question + "</h3>"+
    " <input type='radio' id='choiceA' name='optradio' value="+questions[i].choiceA +" onclick='checkAnswer()'>"+
    "<label class='radio-inline'> " + questions[i].choiceA + " </label>"+
    " <input type='radio' id='choiceB' name='optradio' value="+questions[i].choiceB +"  onclick='checkAnswer()'>"+
    "<label class='radio-inline'> " + questions[i].choiceB + " </label>"+
    " <input type='radio' id='choiceC' name='optradio' value="+questions[i].choiceC +"  onclick='checkAnswer()'>"+
    "<label class='radio-inline'> " + questions[i].choiceC + " </label>"
    
}



function checkAnswer(){
    var getAnswer=document.getElementsByName('optradio');
    for(var i = 0; i < getAnswer.length; i++){
        if(getAnswer[i].checked) {
          if(getAnswer[i].value==questions[i].answer){
            document.body.style.backgroundColor = "blue";
          }else{
            document.body.style.backgroundColor = "red";
          }
        }
      }
}