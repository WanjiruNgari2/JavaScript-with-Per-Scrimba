// 1.create 2 vars, firstCard and secondCard. Set their 
// values to a random number between 2 and 11, as those are  the nums you can draw in blackjack.
//create a variable sum and set it to the su of the 2 cards:

// 2. RULES OF BLACKJACK:The goal is to have cards that are exacyly 21 (blackjck win!) or 
// cards <21(not bad). getting cards adding to >21 is a (loss in blackjack)

//3. javascript to remember if the player has blackjack(won), using boolean variables      

//4. declare a var called message and assign its value to an empty string.
// Reassign the var message to the sring we are logging out


// 5. create a function startGame(),move the conditions in line 64-74 into the
//  body of the func. so that that code is executed inside it.
let allCards = []
let firstCard = 0
let secondCard = 0
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = " "

// let messageEL = document.getElementById("message-el")
// let sumEl = document.querySelector("#sum-el")
// let cardsEL= document.querySelector(".cards-el")

// let hasCompletedCourse = true
// let givesCertificate = true


// if (hasCompletedCourse && givesCertificate === true ) {
//     generateCert()
// }

// function generateCert() {
//     console.log("Generating Cert!...");
    
// }


function startGame() {
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    isAlive = true
    sum = firstCard + secondCard
    allCards = [firstCard, secondCard]

    renderGame()
}



function renderGame(){

    cardsEL.textContent = "Cards: "

    for(let i = 0; i < allCards.length; i++) {
        cardsEL.textContent += allCards[i]  + " "

    }


    if (sum < 21) {
        message = "you wanna draw another card?"
    } else if (sum === 21){
        message = "You win!!You've got blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
    }
    messageEL.textContent = message

    sumEl.textContent = "sum: " + sum

//render first and second cards
    //cardsEL.textContent = "Cards: " + firstCard + " " + secondCard
//render all cards available 
    //cardsEL.textContent = "Cards: " + allCards[0] + " " + allCards[1]



}

function newCard() {
    // only allow the player to get a new card if she is alive 
    //  and doesn't have BlackJack

    if(isAlive === True && hasBlackJack === false ){
        let newCard = getRandomCard()
        sum += newCard 
        allCards.push(newCard)
        console.log(allCards);

        renderGame()
        }
    
}


function getRandomCard() {
   //return 5 check its working!
   let randomNess =  Math.floor(Math.random() * 13) + 1//random no betwn 1 and 13
    
   if (randomNess > 10) {
    return 10
   } else if( randomNess === 1) {
    return 11
   } else{
    return randomNess
   }
}


// 6. now let the messages actually DISPLAY on the screen 
// not in the console. Store the message-el paragraph in a var messageEL
// Display the message in messageEL using messageEL.textContent.
// Remove console.log from the func startGame().

//7. display the sum of our cards. Store the sum on the page with 
// format : "sum: 20"

//8. display the cards the user inputs using format "cards: 10 4"
// 9.create a new card btn, create a newCard func, style it in css


//10.let this func add to the sum when new card is clicked:
//create a var and hard code its value to a number bettwenn 2 and 11
//add the new card to the sum var. call startGame()

//11.RENAME STARTGAME FUNCtion by creating a new function
//  called startGame that calls renderGame():

        // function startGame() {
        //     renderGame()
        // }

// 12.create an array that will store all the cards called allCards
// then push the new Card to the allCards array so it will also be displayed

//13.use a for loop to render allCards

//14. Now change hardcoded crads to Random Cards in 3 steps:
    //step1, create a func getRandomCard(), that always returns the number 5
    //step2,use getRandomCard() to set values of newCard, firstCard and secondCard
    //step3, generate a random num with math.random()


//15. consider that in this game: create conditions for these in func getRandomCard()
//  1(ace or A) returns 11, 
// (J, K, Q 0r 11 to 13) returns 10


//16.LASTLY AND FINALLY, change allvariables to 0 at the beginning of the game
    // then initialize them in function startGame()


