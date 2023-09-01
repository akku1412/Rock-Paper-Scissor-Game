
// const handOptions={
//     "rock":"/image/rock.png",
//     "scissor":"/image/scissor.png",
//     "paper":"/image/paper.png"
// }
// const btnRules=document.querySelector(".rules-btn");
// const btnClose=document.querySelector(".close-btn");
// const modalRules=document.querySelector(".modal");
// btnRules.addEventListener("click",()=>
// {
//     modalRules.classList.toggle("show-modal");
// });

// btnClose.addEventListener("click",()=>
// {
//     modalRules.classList.toggle("show-modal");
// });

// let userScore = parseInt(localStorage.getItem("userScore")) || 0;
// let compScore = parseInt(localStorage.getItem("compScore")) || 0;
// const pickUserHand=(hand)=>
// {
//     let hands=document.querySelector(".hands");
//     hands.style.display="none";

//    let contest = document.querySelector(".contest");
//    contest.style.display = "flex";
  
//    document.getElementById("userPickImage").src = handOptions[hand];
//    let cpHand=pickComputerHand();
//    referee(hand,cpHand);
// }
// const pickComputerHand=()=>
// {
    
//     let hands=["rock" ,"paper","scissor"]
     
//     let cpHand=hands[Math.floor(Math.random()*3)];
    
//     document.getElementById("computerPickImage").src=handOptions[cpHand];
//     return cpHand;

// }
// const referee = (userHand, cpHand) => {
//   let resultMessage = ""; 

//   if (userHand == "paper" && cpHand == "scissor") {
//       resultMessage = "YOU LOST";
//       setScoreComp(compScore++);
//   } else if (userHand == "paper" && cpHand == "rock") {
//       resultMessage = "YOU WIN!";
     
//       setScore(userScore++);
//   } else if (userHand == "paper" && cpHand == "paper") {
//       resultMessage = "TIE UP";
//   } else if (userHand == "rock" && cpHand == "scissor") {
//       resultMessage = "YOU WIN!";
      
//       setScore(userScore++);
//   } else if (userHand == "rock" && cpHand == "paper") {
//       resultMessage = "YOU LOST";
//       setScoreComp(compScore++);
//   } else if (userHand == "rock" && cpHand == "rock") {
//       resultMessage = "TIE UP";
//   } else if (userHand == "scissor" && cpHand == "scissor") {
//       resultMessage = "TIE UP";
//   } else if (userHand == "scissor" && cpHand == "rock") {
//       resultMessage = "YOU LOST";
//       setScoreComp(compScore++);
//   } else if (userHand == "scissor" && cpHand == "paper") {
//       resultMessage = "YOU WIN!";
//       setScore(userScore++);
      
//   }

//   setDecision(resultMessage); 

//   if (resultMessage === "TIE UP") {
//       const myElement = document.getElementById("myElement");
//       myElement.innerText = "REPLAY";
//       const against=document.getElementById("against");
//       against.innerText=" ";
//   } else {
//       const myElement = document.getElementById("myElement");
//       myElement.innerText = "PLAY AGAIN"; 
//       const against=document.getElementById("against");
//       against.innerText="AGAINST PC";
      
//   }
//   checkGameResult();
// };


// const setDecision=(decision)=>
// {
//     document.querySelector(".decision h1").innerText = decision;
// }

// const setScore=(score)=>
// { 
    
//     document.querySelector(".score-mine h1").innerText=userScore;
//     localStorage.setItem("userScore", userScore);

// }

// const setScoreComp=(score)=>
// { 
    
//     document.querySelector(".score-comp h1").innerText=compScore;
//     localStorage.setItem("compScore", compScore);
// }
// const restartGame=()=>
// {
//     let hands=document.querySelector(".hands");
//     hands.style.display="flex";

//     let contest = document.querySelector(".contest");
//     contest.style.display = "none";
//     setScore(userScore);
//     setScoreComp(compScore);
// }

// const nextBtn = document.getElementById("next-btn");

// nextBtn.addEventListener("click", () => {
    
//     if (userScore > compScore) {
       
//         window.location.href = "./index2.html";
//     } else {
        
//        restartGame();
//     }  
// });

// const checkGameResult = () => {
//     if (userScore > compScore) {
//         nextBtn.style.display = "block"; 
//     } else {
//         nextBtn.style.display = "none"; 
//     }
// };
// checkGameResult();

const handOptions = {
    rock: "/image/rock.png",
    scissor: "/image/scissor.png",
    paper: "/image/paper.png",
  };
  
  const btnRules = document.querySelector(".rules-btn");
  const btnClose = document.querySelector(".close-btn");
  const modalRules = document.querySelector(".modal");
  
  btnRules.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });
  
  btnClose.addEventListener("click", () => {
    modalRules.classList.toggle("show-modal");
  });
  
  let compScore = parseInt(localStorage.getItem("compScore")) || 0;
  let userScore = parseInt(localStorage.getItem("userScore")) || 0;
  
  const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "flex";
  
    document.getElementById("userPickImage").src = handOptions[hand];
    let cpHand = pickComputerHand();
    referee(hand, cpHand);
  };
  
  const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissor"];
  
    let cpHand = hands[Math.floor(Math.random() * 3)];
  
    document.getElementById("computerPickImage").src = handOptions[cpHand];
    return cpHand;
  };
  
  const referee = (userHand, cpHand) => {
    let resultMessage = "";
  
    if (userHand == "paper" && cpHand == "scissor") {
      resultMessage = "YOU LOST";
      setScoreComp(compScore + 1); // Increment the computer's score
    } else if (userHand == "paper" && cpHand == "rock") {
      resultMessage = "YOU WIN!";
      setScore(userScore + 1); // Increment the user's score
    } else if (userHand == "paper" && cpHand == "paper") {
      resultMessage = "TIE UP";
    } else if (userHand == "rock" && cpHand == "scissor") {
      resultMessage = "YOU WIN!";
      setScore(userScore + 1); // Increment the user's score
    } else if (userHand == "rock" && cpHand == "paper") {
      resultMessage = "YOU LOST";
      setScoreComp(compScore + 1); // Increment the computer's score
    } else if (userHand == "rock" && cpHand == "rock") {
      resultMessage = "TIE UP";
    } else if (userHand == "scissor" && cpHand == "scissor") {
      resultMessage = "TIE UP";
    } else if (userHand == "scissor" && cpHand == "rock") {
      resultMessage = "YOU LOST";
      setScoreComp(compScore + 1); // Increment the computer's score
    } else if (userHand == "scissor" && cpHand == "paper") {
      resultMessage = "YOU WIN!";
      setScore(userScore + 1); // Increment the user's score
    }
  
    setDecision(resultMessage);
  
    if (resultMessage === "TIE UP") {
      const myElement = document.getElementById("myElement");
      myElement.innerText = "REPLAY";
      const against = document.getElementById("against");
      against.innerText = " ";
    } else {
      const myElement = document.getElementById("myElement");
      myElement.innerText = "PLAY AGAIN";
      const against = document.getElementById("against");
      against.innerText = "AGAINST PC";
    }
    checkGameResult();
  };
  
  const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  };
  
  const setScore = (score) => {
    userScore = score;
    document.querySelector(".score-mine h1").innerText = userScore;
    localStorage.setItem("userScore", userScore);
  };
  
  const setScoreComp = (score) => {
    compScore = score;
    document.querySelector(".score-comp h1").innerText = compScore;
    localStorage.setItem("compScore", compScore);
  };
  
  const restartGame = () => {
    let hands = document.querySelector(".hands");
    hands.style.display = "flex";
  
    let contest = document.querySelector(".contest");
    contest.style.display = "none";
  };
  
  const nextBtn = document.getElementById("next-btn");
  
  nextBtn.addEventListener("click", () => {
    if (userScore > compScore) {
      window.location.href = "./index2.html";
    } else {
      restartGame();
    }
  });
  
  const checkGameResult = () => {
    if (userScore > compScore) {
      nextBtn.style.display = "block";
    } else {
      nextBtn.style.display = "none";
    }
  };
  
  checkGameResult();
  
  



