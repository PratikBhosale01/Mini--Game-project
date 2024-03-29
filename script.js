let userScore =0;
let compscore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");
const compSc = document.querySelector("#comp-score");
const userSc = document.querySelector("#user-score"); 

const genCompChoice = () => {
    const opt = ["rk","pr","sr"];
    const rndIdx = Math.floor(Math.random() * opt.length);
    return opt[rndIdx];
};

const drawGame = () => {
  console.log("drawGame");
  msg.innerText="Game Draw !";
}

const showScore = () => {
    compSc.innerText=compscore;
    userSc.innerText=userScore;
}

const showWinner = (userwin) => {
    if(userwin) {
        console.log("You won!");
        msg.innerText = "You won!";
        userScore++;
        console.log("userScore is ",userScore);

    }else{
        console.log("You lost!");
        msg.innerText = "You lost!";
        compscore++;
        console.log("compscore is" ,compscore);
    }
};




const playGame =( userChoiceId ) => {
 console.log("user choice :", userChoiceId);
 const compChoice =genCompChoice(); 
 console.log("comp  choice :", compChoice);
 if( userChoiceId === compChoice ){
    drawGame();
 }else{
    let userwin =true ; 
    if (userChoiceId=== "rk"){
        userwin = compChoice === "pr" ? false : true ; 

    }else if (userChoiceId ==="pr"){
        userwin = compChoice === "sr" ? false : true ; 
    } else if (userChoiceId ==="sr"){
        userChoiceId = compChoice === "rk" ? false : true ; 
    }
    showWinner(userwin );
    showScore();
 }
  
};



choices.forEach((choice) => {
     console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoiceId = choice.getAttribute("id");
          playGame(userChoiceId);
    })
});