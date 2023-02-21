const question1=document.getElementById("question");
const form1=document.getElementById("form");
const input1=document.getElementById("input");
let score1=document.getElementById("score");
let time1=document.getElementById("time");
let score=JSON.parse(localStorage.getItem("score"));
/*if(!score){
    score=0;
}
score1.innerText=`score: ${score}`;*/
newQuestion();
let timeid=setInterval(updatetime,1000);
let time=10;
function updatetime()
{
    time1.innerText=`${time}`;
    time=time-1;
    if(time===-1)
    {

        time=10;
        clearInterval(timeid);
        newQuestion();
        timeid=setInterval(updatetime,1000);
    }
}
function newQuestion(){
    const num1=Math.ceil(Math.random()*10);
    const num2=Math.ceil(Math.random()*10);    
question1.innerText=`What is ${num1} multiply by ${num2}?`;
if(!score){
    score=0;
}
score1.innerText=`score: ${score}`;
form1.addEventListener("submit",()=>{
    const correctAns= num1*num2;
    const userAns=+input1.value;
    if(userAns===correctAns){
        score=score+1;
        updateLocalstorage();
       
    }
    else 
    {
        score=score-1;
        updateLocalstorage();
    }
       
})}
function updateLocalstorage(){
    localStorage.setItem("score",JSON.stringify(score));
};