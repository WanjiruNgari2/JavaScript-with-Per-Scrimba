//learn how to count in javascript. count to ten
//you must specify...
        //1. where should we START counting?
        //2. where does it END?
        //3. what's the STEP SIZE to use ie odd, even, divisible by 4 etc


//   START    ;           END;             STEP SIZE;
    for(let count = 1;       count < 11;         count += 1)   {
        //console.log(count); //logs all num from 1 to 10
    }

    for(let count = 1;       count < 11;         count += 3)   {
        //console.log(count); //logs 1, 4, 7, 10 jumping 3 steps everytime
    }

    for(let count = 10;       count < 21;         count += 1)   {
        //console.log(count); //logs all num from 10 to 20
    }



//QUIZ:create a loop that counts from 10 to 100 in steps of 10
//use consl.log to log out the numbers;
    for(let count = 10; count < 101; count +=10) {
        //console.log(count);//logs out 10, 20, 30, 40......100
        
    }


//QUIZ: create a for loop that logs all the cards in this array.
//use crads.length to specify how long the loop should run:
let myCards = [7, 4, 8, 9, 20]

for(let i = 0; i < myCards.length; i+= 1){
    //console.log(myCards[i]); //7, 4, 8, 9, 20
    

}

//render the sentence in the greetingsEL paragraph using a for
//  loop and .textContent:
// let sentences = ["Hello ", "my ", "name ", "is ", "Jim Carrey"]
// let greetinggEL = document.getElementById("greetings-el")

// for (i = 0; i < sentences.length; i++) {
//     greetinggEL.textContent += sentence[i] + " " //now each word is spaced
    
// }


// RETURNING VALUES IN JAVASCRIPT
        // let player1Time = 102
        // let player2Time = 107

        // function getFastestTime() {
        //     if(player1Time < player2Time){
        //         return player1Time
        //     }else if (player2Time < player1Time) {
        //         return  player2Time
        //     }else{
        //         return player1Time
        //     }
        // }

        // let fastestRace = getFastestTime()
        // console.log(fastestRace); //102

//QUIZ:write a func that returns the total race time.
//call the function and store the returned value in a new var/
//then log the var out

        // function totalRaceTime(){
        //     return player1Time + player2Time
        // }

        // newTotal = totalRaceTime()
        // console.log(newTotal); //209


//MATH.RANDOM FUNCTION
//let num = Math.random() //0.83787 //0.756788 //0.474583
//console.log(num); //generates numbers from 0.0000 to 0.999 ie 

// let num = Math.random() * 6 //1.6826 //4.73990  //5.501498
// console.log(num);//gives num from 0 to 5.999

// let flooredNum = Math.floor(-3.45632) //3
// console.log(flooredNum);//returns whole numbers, without the decimal nums

//COMBINE ALL 3:
// let randomNess = Math.floor( Math.random()*6 )  //0 //1 //2 //3 //4 //5 //6
// console.log(randomNess); gives whole nums 0 to 6

//generate a range from 1 to 6:
// let randomNess = Math.floor( Math.random()*6 ) + 1   //1 //2 //3 //4 //5 //6

//create a func rollDice() that returns a random num btwn 1 and 6
// function rollDice(){
//     return  Math.floor( Math.random()*6 ) + 1
// }
// console.log(rollDice()); //4  //4 //2 //1 //6 //0  //5

