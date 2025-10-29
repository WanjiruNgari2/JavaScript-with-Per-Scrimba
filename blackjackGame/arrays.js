// QUIZ:Check if the person is old enough to enter the bar (21yrs)
//log a suitable message to the console in both cases:

        // let age = 14
        // if (age >= 21) {
        //     console.log("Welcome to the bar!🍻");
        // }else{
        //     console.log("Sorry, we dont serve alcohol to minors😢");
            
        // }


//QUIZ: create a variable isAlive and assign it to true. Then 
//flip its value to false in the appropritae code block:
        // let findings = 0
        // let isAlive = true

        // if (findings > 20) {
        //     console.log("We found lots of stuff🤸‍♀️😁");
            
        // } else if (findings === 10) {
        //     console.log("we hit the target!👍");
            
            
        // } else {
        //     console.log("We're out!🥺");
        //     isAlive = false
            
        // }

//QUIZ: Predict whether true or false will be consoled
        // console.log(4 === 3) //false 
        // console.log(5 > 2) //true
        // console.log(12 > 12); //false
        // console.log(3 < 0); //false
        // console.log(3 >= 3); //true
        // console.log(11 <= 11); //true
        // console.log(3 <= 2); //false 


//ARRAYS:orderd lists of items
        // let featuredPosts = [
        //     "checkout my NetFlix Clone",
        //     "Here's the code for my project",
        //     "I've just relaunched my portfolio"
        // ]
// QUIZ:create an arrr that lists your experience, education, license,
//  skills or similar. The items should be strings
        // let aboutMe = [
        //     "I've been coding for a year now","I have a diploma in Business and IT",
        //     "Great in python, not yet perfect in JS","I do have licenses to work in my country"
        // ]
        // console.log(aboutMe[2]);//Great in python, not yet perfect in JS
        // console.log(aboutMe[1]);//I have a diploma in Business and IT
        // console.log(aboutMe[0]);//I've been coding for a year now

// ARRAYS can have many datatypes: desc yourself with name(str), age(number) and
//whether you like pizza(bolean)
let myBio = [ "Damaris Ngari", 40, false ]

let cards = [7, 3]
cards.push(4)
//console.log(cards); //[ 7, 3, 4 ]

//Push the newMessage to the messages arr, then log out the arr
let messages = [
    "Hey, how's it going?", "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately"
]
let newMessage = "Same here!"
messages.push(newMessage)
//console.log(messages);//added the new message to the arr

//assume you wanted to remove the last message we just added:
messages.pop()
//console.log(messages); //PERFECT

for (let message = 0; message < messages.length; message +=1 ){
        console.log(messages[message]);
        
} //logs all items in the messages arr
