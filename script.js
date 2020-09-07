// Initialize global variables
var randomNumber1 = 0;
var randomNumber2 = 0;
var btn1Rolled = false;
var btn2Rolled = false;

// Player 1 (double roll)
function rollDice1() 
{
  if(btn1Rolled === false)
  {
    const dice = [...document.querySelectorAll(".even-roll")];   
    dice.forEach(die => 
    {  
        die.dataset.roll = getRandomNumber(1, 6);
    });
    // Allow time for 1st roll to execute 
    setTimeout(() => {rollDice1a();}, 400);
  }
  else 
  {
    alert("Player 1 has already rolled");
  }
}
function rollDice1a() 
{ 
  const dice = [...document.querySelectorAll(".even-roll")];  
  dice.forEach(die => 
  {   
    die.dataset.roll = getRandomNumber(1, 6);
    btn1Rolled = true;
    randomNumber1 = die.dataset.roll;
  });
  if(btn2Rolled === true)
  {
    setTimeout(() => {isWinner();}, 500);   
  }
}

// Player 2 (double roll)
function rollDice2() 
{
  if(btn2Rolled === false)
  {
    const dice = [...document.querySelectorAll(".odd-roll")];  
    dice.forEach(die => 
    {   
      die.dataset.roll = getRandomNumber(1, 6);
    });
    // Allow time for 1st roll to execute
    setTimeout(() => {rollDice2a();}, 400);
  }
  else 
  {
    alert("Player 2 has already rolled");
  }
}
function rollDice2a() 
{ 
  const dice = [...document.querySelectorAll(".odd-roll")];  
  dice.forEach(die => 
  {   
    die.dataset.roll = getRandomNumber(1, 6);
    randomNumber2 = die.dataset.roll;
    btn2Rolled = true;
  });
  if(btn1Rolled === true)
  {
    setTimeout(() => {isWinner();}, 500); 
  }
}

// Random number generator
function getRandomNumber(min, max) 
{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Who won?
function isWinner()
{
  if (randomNumber1 > randomNumber2)
  {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1)
  {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else
  {
    document.querySelector("h1").innerHTML = "Draw!";
  }
  // Show reset button
  document.getElementsByClassName("reset")[0].style.display = "block";
}

// Roll button click events
document.getElementById("first").addEventListener("click", rollDice1);
document.getElementById("second").addEventListener("click", rollDice2);

// Reset game button click event
document.querySelectorAll("button")[2].addEventListener("click", reset);
function reset()
{
  randomNumber1 = 0;
  randomNumber2 = 0;
  btn1Rolled = false;
  btn2Rolled = false;
  location.reload();
}
