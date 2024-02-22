let user1 = 0;
let user2 = 0;
const choices1 = document.querySelectorAll(".choice");
const computerchoice = () => {
    const choice = ['rock', 'scissor', 'paper'];
    return choice[(Math.floor(Math.random() * 3))];

}
let s1=document.getElementById("user1_score");
let s2=document.getElementById("user2_score");
let msg=document.querySelector(".msg_box")
const showwinner =(userwin)=>{
    if(userwin){
     msg.classList.add("win");
     msg.innerText="HURRAY! YOU WIN";
     msg.style.backgroundColor="purple";
     s1.innerText=user1;
        }
    else {
        msg.classList.add("lost");
        msg.innerText="OOPS! You lost";
        msg.style.backgroundColor="red";
        s2.innerText=user2;
    }
}
const playgame = (userchoice) => {
    let compchoice = computerchoice();
    console.log(compchoice);
    if (userchoice == compchoice) {
        msg.classList.add("draw");        
        msg.innerText="game draw";
        msg.style.backgroundColor="blue";
    }
    else {
        let userwin = true;
        if (userchoice == "paper") {
            if (compchoice == "scissor") {
                user2++;
                userwin = false;
            }
           else{
                user1++;
                userwin = true;
            }
        } else if (userchoice = "rock") {
            if (compchoice == "paper") {
                user2++;
                userwin = false;
            }
           else {
                user1++;
                userwin = true;
            }
        } else if (userchoice == "scissor") {
            if (compchoice == "paper") {
                user1++;
                userwin = true;
            }
            else {
                user2++;
                userwin = false;
            }
        }
        
showwinner(userwin);
    }

}
choices1.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        // console.log("choice was clicked")
        // console.log(choiceid);
        //  choice.removeEventListener(choices1);
        playgame(choiceid);
    })
})


