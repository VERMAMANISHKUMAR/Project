const emojiDetails = [
          { description: "Smiling face with sunglasses", emoji: "😎" },
          { description: "Thumbs up", emoji: "👍" },
          { description: "Heart eyes", emoji: "😍" },
          { description: "Crying face", emoji: "😢" },
          { description: "Party popper", emoji: "🎉" },
          // Add more emoji descriptions here
        ];
        
          let currentEmojiIndex = 0;
          let score = 0;
          let seconds = 60;
          let timer;
          //
        
        
          //
          const timerElement=document.getElementById("timer")
          const guessInput = document.getElementById("guess-input");
          const resultElement = document.getElementById("result");
          const scoreElement = document.getElementById("score");
        
          function displayEmoji() {
            const descriptionElement = document.getElementById("description");
            descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;
          //   timerElement.textContent=`Time: ${seconds}s`;        
          }
        
          function checkGuess() {
            const guess = guessInput.value.trim().toLowerCase();
            const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();
        
            if (guess === correctEmoji) {
              resultElement.textContent = "Correct!";
              score++;
            } else {
              resultElement.textContent = "Wrong!";
            }
            console.log(score);
            scoreElement.textContent = `Score: ${score}`;
            guessInput.value = "";
            guessInput.focus();
            nextEmoji();
          }
        
          function nextEmoji() {
            currentEmojiIndex++;
            setTimeout(()=>{resultElement.textContent = "";},1000);
        
            if (currentEmojiIndex === emojiDetails.length) {
              currentEmojiIndex = 0;
              score=0;
            }
        
            displayEmoji();
          }
        
          document
            .getElementById("guess-input")
            .addEventListener("keydown", (event) => {
              if (event.key === "Enter") {
                checkGuess();
              
              }
            });
        
          document.addEventListener("DOMContentLoaded", () => {
            displayEmoji();
            startTimer();
          });
          //timer function
           function startTimer(){
                    timer=setInterval(() => {
                              seconds--;
                      timerElement.textContent=`Time: ${seconds}s`;       

                      if(seconds<=0){
                              endGame();
                      }
                    }, 1000);
           } 
           function endGame(){
                    clearInterval(true);
                    guessInput.disabled=true;
                    timerElement.textContent="";
           }

           //Explan function number 1

          // function displayEmoji() {: This line declares a JavaScript function named displayEmoji.

          //           const descriptionElement = document.getElementById("description");: This line retrieves an HTML element with the id "description" using the getElementById() method from the Document Object Model (DOM). It assigns this element to the variable descriptionElement.
                    
          //           descriptionElement.textContent = emojiDetails[currentEmojiIndex].emoji;: This line sets the text content of the descriptionElement to the emoji corresponding to the currentEmojiIndex in the emojiDetails array.
                    
          //           emojiDetails[currentEmojiIndex]: This retrieves the object in the emojiDetails array at the index specified by currentEmojiIndex.
                    
          //           .emoji: This accesses the emoji property of the object retrieved from emojiDetails[currentEmojiIndex]. This property likely contains the actual emoji character.
                    
          //           Finally, the function updates the text content of the HTML element with the id "description" to display the emoji retrieved from the emojiDetails array.



               //Explan function number 2

          //       1   function checkGuess() {: This line declares a JavaScript function named checkGuess.

          //        2   const guess = guessInput.value.trim().toLowerCase();: This line gets the value from an input field with the id guessInput, trims any whitespace from the beginning and end, and converts the input to lowercase. This ensures that the comparison later on is case-insensitive.
                    
          //        3   const correctEmoji = emojiDetails[currentEmojiIndex].description.trim().toLowerCase();: This line gets the correct emoji's description from an array named emojiDetails at the index currentEmojiIndex. It also trims any whitespace from the beginning and end, and converts it to lowercase for consistent comparison.
                    
          //        4  if (guess === correctEmoji) {: This line checks if the user's guess matches the correct emoji's description.
                    
          //        5  resultElement.textContent = "Correct!";: If the guess is correct, it sets the text content of an element with the id resultElement to "Correct!".
                    
          //        6  score++;: It increments the score variable by 1.
                    
          //        7   } else {: If the guess is incorrect, it proceeds to this block.
                    
          //        8  resultElement.textContent = "Wrong!";: It sets the text content of resultElement to "Wrong!" if the guess is incorrect.
                    
          //         9  console.log(score);: It logs the current score to the console.
                    
          //         10  scoreElement.textContent = "Score: ${score}";: It updates the text content of an element with the id scoreElement to display the current score.
                    
          //          11   guessInput.value = "";: It clears the value of the input field, ready for the next guess.
                    
          //          12   guessInput.focus();: It puts the focus back on the input field, so the user can immediately start typing their next guess.
                    
          //           13  nextEmoji();: It calls a function named nextEmoji, presumably to load the next emoji for the user to guess.

          //Explan function number 3
          //       1  function nextEmoji() {: This line declares a JavaScript function named nextEmoji.

          //       2    currentEmojiIndex++;: This line increments the currentEmojiIndex variable by 1. It's assumed that currentEmojiIndex keeps track of the index of the currently displayed emoji.
                    
          //        3   if (currentEmojiIndex === emojiDetails.length) {: This line checks if the currentEmojiIndex has reached the length of the emojiDetails array.
                    
          //        4  currentEmojiIndex = 0;: If the currentEmojiIndex has reached the end of the emojiDetails array, it resets currentEmojiIndex to 0, effectively looping back to the first emoji in the array.
                    
          //        5   score=0;: If the currentEmojiIndex has reached the end of the emojiDetails array, it also resets the score variable to 0.
                    
          //        6  displayEmoji();: This line calls a function named displayEmoji(). Presumably, this function is responsible for showing the emoji corresponding to the updated currentEmojiIndex.