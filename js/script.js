// hello 
  const randomNumber = Math.floor(Math.random() * 10) +1;
  document.getElementById("demo").innerHTML = randomNumber;
  console.log(randomNumber);
  let attempts = 0;
  let usernumber = 0;

  let userResponse = prompt("Guess a number between 1 and 10");

 
  while (usernumber !== randomNumber)
  {
    usernumber = parseInt(userResponse);
    attempts++;
    if (usernumber > randomNumber)
    {
        userResponse = prompt("Your guess was too high. guess again. ");
    }
    else if (usernumber < randomNumber)
    {
        userResponse = prompt("Your number was too low. guess again. ");
    }
    else 
    {
        alert("You guessed it in " + attempts + " guesses"); 
    }
  } 
  
  
