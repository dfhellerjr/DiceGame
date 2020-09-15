// Initialize variables
var randomNumber1 = 0;
var randomNumber2 = 0;
var btn1Rolled = false;
var btn2Rolled = false;
var player = "";
var message = "has previously rolled!";

function playerRoll(button)
{
  return function curried_func(e)
  {          
    var index = 0;
    const dice = document.querySelectorAll(button); 
    
    // Test if player has rolled already ...
    if((button === '.even-roll' && btn1Rolled === false) || (button === '.odd-roll' && btn2Rolled === false))
    // If not, start roll
    {
      // First rotation
      const dice = document.querySelectorAll(button); 
      dice.forEach(die => 
      {   
        die.dataset.roll = getRandomNumber(1, 6);
      }); 
        
      // Additional die rotations
      for(index = 1; index < 10; index += 1)
      {          
        setTimeout(() => 
        { 
          const dice = document.querySelectorAll(button);  
          dice.forEach(die => 
          {   
            die.dataset.roll = getRandomNumber(1, 6);
            // Player 1 roll
            if(button === '.even-roll')
            {
                randomNumber1 = die.dataset.roll;
                btn1Rolled = true;
            }
            // Player 2 roll
            else if(button === '.odd-roll')
            {
              randomNumber2 = die.dataset.roll;
              btn2Rolled = true;
            }
          });
        }, 300 * index);       
      }
      setTimeout(() => 
      {
        isWinner();
      }, 350 * index + 1); 
    }
    // If player previously rolled
    else
    {
      if(button === '.even-roll')
      {
        player = "Player 1 ";
      }
      else
      {
        player = "Player 2 ";
      }
      alert(player + message);
    }  
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
  if(btn1Rolled === true && btn2Rolled == true)
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
    setTimeout(() => 
    {
      showReset();
    }, 400);
  } 
}

// Roll button click events
document.getElementById("first").addEventListener('click', playerRoll(".even-roll"));
document.getElementById("second").addEventListener("click", playerRoll(".odd-roll"));

// Show reset button
function showReset()
{
  document.getElementsByClassName("reset")[0].style.display = "block";
}

// Reset button click event
document.querySelectorAll("button")[2].addEventListener("click", reset);
function reset()
{
  randomNumber1 = 0;
  randomNumber2 = 0;
  btn1Rolled = false;
  btn2Rolled = false;
  location.reload();
}
