var readlinesync = require('readline-sync')
const chalk = require('chalk');
console.log(chalk.green('DO YOU KNOW SAKSHAM?'));

var userName = readlinesync.question('What is your Name?')
console.log(chalk.yellow("Welcome"   + userName));
var score = 0;


function play(question,Answer){
  var userAnswer= readlinesync.question(question);
  if(
    userAnswer== Answer

  )
  {
    console.log(chalk.green("Correct!"));
    score= score + 1;
    console.log(chalk.green("Current Score:"  +  score));




  }
  else {
    console.log(chalk.green("Wrong!")); 
     console.log(chalk.green("Current Score:"  +  score));
     console.log("-----------")
     
    
  }

}

 var questions = [{
  question: "Where does Saksham Live?",

  answer: "Varanasi",





},
{
  question: "What is Saksham's Favourite sport?",

  answer: "Cricket",





},
{
  question: "Name of Saksham's favourite film?",

  answer: "Fight Club",





},
{
  question: "Name of Saksham's favourite ?",

  answer: "David Fincher",





},
{
  question: "Name of Saksham's Facourite Superhero movie ",

  answer: "The Dark Knight",





}







 ];
 

 for(i=0;i< questions.length ; i++){

   var currentQuestion= questions[i]
   play(currentQuestion.question, currentQuestion.answer )
   
 }
 
 console.log("your final score", score)
 console.log("High Score: 5 ")








