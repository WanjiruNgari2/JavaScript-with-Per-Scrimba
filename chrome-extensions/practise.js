// //1. template str/literals:
// const recipient = "James"
// //Refactor the email str to use template str
// const email = "Hey " + recipient + "! How is it going? Cheers Per"
// result = `Hey ${recipient}! How is it going? Cheers Per `
// // console.log(result)


// //2.create a new var sender, and set its value to your name
// const sender = "Hedda"
// //use your sender var insteard of Per
// const message = `Hey ${recipient}! How is it going? Cheers ${sender} `
// // console.log(message);


// //3.break the message str into multiple lines
// const multipleLines = `
//     Hey ${recipient}

//     How is it going

//     Cheers ${sender} `

// // console.log(multipleLines);


// // 4.redo the listItems template str
// listItems += `
// <li>
//     <a target='_blank' href='${ myLeads[i]}' >
//         ${ myLeads[i]}
//      </a>
// </li>  `

// //5. LocalStorage
// //turn the myArr str into an array, then push a new value to the arr
// //turn the array back to a str again
// //console log the str using typeof to verify its a string
//         let myArr = `["www.greatRivers.com]`
//         myArr = JSON.parse(myArr) //converts to array
//         myArr.push("savannahRice")
//         myArr = JSON.stringify(myArr)//converts to str
//         console.log(typeof myArr) //string


// //6.            TRUTHY      VS       FALSY
// //These are different from true and false values
// //for a value to be FALSY, it is either :
//     //null, undefined, "", false, 0, NaN(not a number) 
// //a staemnt with these values will be falsy.
// //use Boolean() to check whether values are  falsy or truthy eg
//         // let checkBoolean = Boolean("hello")
//         // console.log(checkBoolean); //true bcs its a str

//         // console.log( Boolean("")); //false
//         // console.log( Boolean("0")); //true
//         // console.log( Boolean(100)); //true
//         // console.log( Boolean(null)); //false
//         // console.log( Boolean([0])); //true
//         // console.log( Boolean(-0)); //false

// //Null is how devs signalize emptiness (humans)
// //Undefined is how JScript signalize emptiness (machine)



// //7.PARAMETERS AND ARGUMENTS IN FUNC
// const welcomeEl = document.getElementsByClassName(".welcome-el")

// // Give the func a parameter for greeting and name and use template literals
// function greetUser (greeting, uName) {
//     welcomeEl.textContent = `${greeting},  ${uName}`
// }
// greetUser("welcome Back", "Perry") //welcome Back, Perry


// //passing numbers as parameters
// // create a func add(), that adds 2 numbers and returns the sum
// function add(num1, num2) {
//     sum = num1 + num2
//     return sum
// }
// console.log( add(3, 4) ); //should log 7
// console.log( add(9, 102) ); //should log 111


// //passing arrays as parameters 
// //create a func getFirst(arr) that returns the first item 
// //in the arr. call it with an arr as an argument to verify it works
//  function getFirst(arr) {
//         return arr[0]
    
    
//  }
// let item = getFirst([34, 22, 123,])
// console.log(item); //34



// //8. The Amazing Fighter Game
const player = "Hellen"
const opponent = "Grace"
const game = "AmazingFighter"
let points = 0
let hasWon = false

//playing the game
points += 100
hasWon = true

//Announce winner
if (hasWon) {
   // console.log(`${player} got ${points}  points and won the ${game} game ` );
} else {
    console.log(`The winner is ${opponent}! ${player} lost the game`);
    
}



//9.create a func that takes a single param an array
//and logs all the items of the arr in the console.
// call the func while passing in myCourses as an argument
let myCourses = ["Learn CSS  Animations", 
    "UI Design Fundamentals", "Intro to clean code"
]

function allArrays(arr) {
    for(let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);
         
    }
}
allArrays(myCourses);



//10.save a value to localStorage. delete your code and
// refresh page. fetch your value from localStorage and log it ou

// localStorage.setItem("myProduct", 234)
// let myProduct = localStorage.getItem("myProduct")
// console.log(myProduct);




//11.fetch the btn from the DOM, store it in a var
// use addEventListener() to listen for btn clicks
//log Jane's score when the btn is clicked (use data)

let data = [
    {
        customer: "Jane",
        score: 72
    },
    {
        customer: "Mark",
        score: 41
    }
]

// const showData = document.getElementById("show-data")
// showData.addEventListener("click", function() {
//         console.log(data[0].score); //72
        
    
// })




//12. The generateSentences(desc, arr) takes two params: a dscription and 
// an arr. should return a str based on the desc and the arr given
// example 1: if you pass in "largest countries" and ["china", "India", "USA"],
//it should return "The 3 largest counries are China India and USA."
// Example2: if you pass in "best fruits" and ["Apples", "Bananas"],
//it should return "The 2 best fruits are Apples and Bananas"

function generateSentences(desc, arr) {
    let reader = `The ${arr.length} ${desc} are `
    const lastItem = arr.length - 1
     for(let i = 0; i < arr.length; i++) {
        if(i === lastItem) {
            reader +="and " + arr[i]  
        } else {
            reader += arr[i] + ","
        }
     }
     return reader
}
console.log(generateSentences("best fruits", ["Apples","oranges", "Bananas", "Melons", "Kiwi"]));
