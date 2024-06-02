let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const drawGame=()=>{
    msg.innerText="game was draw.Play again";
    msg.style.backgroundColor="#081b31";
};

const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`you win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }

    
    else{
        compscore++;
        compScorePara.innerText=compscore;
        msg.innerText=`you lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}
const gencompchoice=()=>{
    const options=["rock","paper","scissor"];
    const randidx= Math.floor(Math.random() *3);
    return options[randidx]; 

}

const playgame=(userchoice)=>{
    console.log("user choice=",userchoice);
    const compchoice=gencompchoice();
    console.log("comp choice=",compchoice);
    if(userchoice==compchoice){
         drawGame();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin=compchoice==="paper"?false:true;
        }
    else if(userchoice=="paper"){
         userwin=compchoice==="scissor"?false:true;
    }else{
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin,userchoice,compchoice);
   
};
}
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
      const userChoice = choice.getAttribute("id");
      playgame(userChoice);
    });
});
  