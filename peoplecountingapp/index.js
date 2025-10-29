//           //INITIALISATION and assignment of VARIALBLES
// //STEP 1 : create a variable to hold the data ie no.of pple
// // let count = 0
// // console.log(count);

// //QUIZ: creta a var myAge and set it to your age log myAge var to the console: 
//         let myAge = 40;
//         console.log(myAge);

// //QUIZ:basic  mathematical operations
//         let firstBatch = 8
//         let secondBatch = 12
//         let count = firstBatch + secondBatch;//20 is 12+8
//         console.log(count); // 20

// //QUIZ: create 2 vars myAge and  humanDogRatio, multiply the two
//         // store the result in myDogAge and console log out myDogAge 
//         let myAge = 20
//         let humanDogRatio = 7 //where 1 human year = 7 dog years
//         let myDogAge = myAge*humanDogRatio;
//         console.log(myDogAge); //140

// //REASSIGNING and INCREMENTING VARIABLE VALUES
// let count = 8
// count = count + 10
// console.log(count);//18
// count = count + 30
// console.log(count);//48
// count = count * 10
// console.log(count);//480

// //QUIZ: Creat a var bonusPoints, initialize it as 50. increase it
// // 100, decrese it to 27 and finally increase it to 70. consolelog at each step
//             let bonusPoints = 50
//             console.log(bonusPoints); //output is:50
//             bonusPoints = bonusPoints + 50
//             console.log(bonusPoints);//output is:100
//             bonusPoints = bonusPoints - 73
//             console.log(bonusPoints);//output is:27
//             bonusPoints = bonusPoints + 43
//             console.log(bonusPoints);//output is:70

//create a func that logs out the sum of all the lap  times:
//                 let lap1 = 34
//                 let lap2 = 33
//                 let lap3 = 37

//                 function sumLaps(){
//                         let result =  lap1 + lap2 + lap3
//                         console.log(result);
                        
//                 }
//                 sumLaps()
// //create a func that increments the result of laps completed 
// // with one and run it three times:
//                 let lap1 = 34
//                 let lap2 = 33
//                 let lap3 = 37

//                 function increaseCounter(){
//                         let count = 0
//                         let result =  lap1 + lap2 + lap3
//                         count = count + result
//                         console.log();
                        
//                 }
//                 increaseCounter()//104
//                 increaseCounter()//104


// process:
//  1. initialize count to 0
//  2.listen for clicks on the increment button
//  3.increment the count variable when btn is clicked
//  4. change the value of count-el in html to reflect new count
//   grab the save-el paragragh and store it in a var saveEl.
//  create a var that holds both the count and the dash seperator, ie "12-10-4-9"
// NB: dont delete existing content of the paragragh


                let count = 0
                function increment(){
                    let countEl = document.getElementById("count-el")
                    count = count + 1 //or count += 1
                    countEl.innerText = count //now the h2 in html displays the new count
                }
                function save(){
                        let saveEl = document.getElementById("save-el")
                        let countSaves = count + " - " // combine the number with strings ie dash
                        saveEl.innerHTML += countSaves
                        console.log(count);
                        //set back to zero after saving
                        count = 0        
                 }

