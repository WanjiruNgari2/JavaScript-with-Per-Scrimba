//THE ONCLICK EVENT LISTENER: listen for clicks on the increment button
// function increment(){
//     alert("btn was clicked!!");
// }

//USING FUNTIONS TO WRITE LESS CODE:
// QUIZ:Pretend to build a race car game with three steps:
        // step1: setup the race
        function countDown(){
            console.log(4);
            console.log(3);
            console.log(2);
            console.log(1);
        }
         countDown();
        //go!
        //race is finished!
        //get ready for new race
        countDown()

// QUIZ:Create a func that logs out the number 42 to the console
//call the function
        function showNum(){
            console.log(42);
        }
        showNum()
//Quiz (i.): create a func that logs ou the sum of all the lap times in
        let lap1 = 34, lap3 = 36, lap2 = 33
        function sumLaps(){
            let total = lap1 +lap2 + lap3;
            console.log(total);
        }
        sumLaps()
//Quiz (ii.)create a func that increments the lapsCompleted variable
    //with one. run it three times.
        let lapsCompleted = 0

        function increaseLaps(){
            lapsCompleted = lapsCompleted + 1
        }
        increaseLaps()
        increaseLaps()
        increaseLaps()

        console.log(lapsCompleted);

//EXERCISES: 
let firstName = "Michael"
let lastName = "Scott"
let fullName = firstName +" " + lastName
console.log(fullName); //Michael Scott

// create a func that logs out :"Hi there, Linda!" when called
let named = "Linda"
let greeting = "Hi there"
function sayGreeting() {
        console.log(greeting + ","+ named + "!");//Hi there,Linda!
}
sayGreeting()

// create two funcs add3Points() and remove1Point() and have them add 
// or remove points to/from the myPoints var
                let myPoints = 3
                function adds3Points(){
                        myPoints += 3
                }
                function removes1Point() {
                        myPoints -= 1
                }
                adds3Points()
                adds3Points()
                adds3Points()
                adds3Points() //3+3+3+3 = 12
                removes1Point()
                removes1Point() //12 - 1 - 1 = 10
                console.log(myPoints); //10
//predict
                console.log("2" + 2);//'22'
                console.log(11 + 7);//18
                console.log(7 + "3");//'73'
                console.log("my Points: " + 4 + 9);//'my points:49'
                console.log(2 + 2);//4
                console.log("11" + "14"); //'1114'


//RENDERING AN ERROR MESSAGE:When user clicks purchase btn, render 
// out "something went wrong, please try again" in the paragraph that has the id= error
// imagine you working for an online store 

function errorMessage(){
    let para = document.getElementById("error")
    para.innerHTML = "Something went wrong, please try again"
    console.log(para);
    
}


// CALCULATOR
let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


//create 4 functions: add(), subtract(), divide(), multiply()
//call the correct function when the user clicks on one of the buttons
//perform the givven calculation using num1 and num2
//Render the result of the calculation in the program wih id="sum-el"
//eg if a user clicks on the "plus" btn, you should render:
//  "sum: 10" (since 2+8 = 10) inside the paragragh with id="sum-el"

let sum = document.getElementById("sum-el")
function add() {
    let result = num1 + num2
    sum.textContent = "Sum: " + result
    
}

function subtract() {
    let result = num1 - num2 
    sum.textContent = "Sum: " + result
       
}

function divide() {
    let result = num1 / num2
    sum.textContent = "Sum: " + result
    
}

function multiply() {
    let result = num1 * num2
    sum.textContent = "Sum: " + result
    
}

