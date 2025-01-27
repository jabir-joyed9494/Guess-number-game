let rendomNumber=Math.floor(Math.random() * 100)+1;

const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");

const guessSubmit=document.querySelector(".guessSubmit");
const guessField=document.querySelector(".guessField");

let guessCount=1;
let resetButton;
guessField.focus();

function checkGuess(){
    
    const userGuess=Number(guessField.value);

    if(guessCount===1)
    {
        guesses.textContent="Previous gusses :";
    }
   
    guesses.textContent = `${guesses.textContent} ${userGuess}`;

    if(userGuess===rendomNumber)
    {
        lastResult.textContent="Congratulations! You got it right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent="";
        setGameOver();
    }
    else if(guessCount===10)
    {
        lastResult.textContent="!!!GAME OVER!!!";
        lastResult.style.backgroundColor="red";
        lowOrHi.textContent="";
        setGameOver();
    }
    else
    {
        lastResult.textContent="Wrong";
        lastResult.style.backgroundColor="red";

        if(userGuess>rendomNumber)
        {
            lowOrHi.textContent="Last guess was too high!";
        }
        else if(rendomNumber>userGuess)
        {
            lowOrHi.textContent="Last guess was too low!"
        }
    }

    guessCount++;
    guessField.value="";
    guessField.focus();

}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver()
{
   guessField.disable = true;
   guessSubmit.disable = true;
   
   resetButton=document.createElement("button");
   resetButton.textContent="Start new game";
   document.body.append(resetButton);
   resetButton.addEventListener("click" , resetGame);
}

function resetGame()
{
    guessCount=1;

    const resetParas=document.querySelectorAll(".resultParas p");
    for( const resetPara of resetParas)
    {
        resetPara.textContent="";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disable=false;
    guessSubmit.disable=false;
     guessField.value="";
     guessField.focus();

     lastResult.style.backgroundColor="white";
     rendomNumber=Math.floor(Math.random()*100)+1;
}
