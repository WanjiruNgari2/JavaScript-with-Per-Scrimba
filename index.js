   //STRINGS
// QUIZ:Create a var message that stores the str:"You have three new notifications"
        let message = "You have three new notifications"
        console.log(message);//You have three new notifications
        let username = "Drew"
        console.log(username);//Drew
        let wholeThing = message + ", " + username + "!"
        console.log(wholeThing);//You have three new notifications, Drew!

//QUIZ:create 2 vars name and greeting. the name var to tore your
//name and greeting to store eg:"hi, my name is "
//Create a 3rd var myGreeting that contatenates the 2 strings ang log myGreeting
        let name = "Dwight Schrute"
        let greeting = "hi, my name is "
        let myGreeting = greeting + name 
        console.log(myGreeting);//hi, my name is Dwight Schrute

        let points = 4
        let bonusPoints = "10"
        let totalPoints = points + bonusPoints // 4 + "10" = "410"
        console.log(totalPoints); //410 NOT 14!*NOTE!*

        console.log(4 + 7);//11 
        console.log("2" + "4");//"24" all are strings here
        console.log("4" + 1);//"41" num is stringified
        console.log(100 + "100");//"100100" num is stringified

// grab the welcome-el paragraph and store it in a var welcomeEl
let welcomeEl = document.getElementById("welcome-el")

//create 2 vars namer and greetings that contain your name 
  // and the greeting you prefer to render to users
let namer = "Michael Scott"
let greeting = "Welcome to Dunder Mifflin "

//Render the welcome message using the welcomeEl.innerText
welcomeEl.innerText =  greeting + namer

//add an emoji to the end 👋
//hint: count = count + 1

welcomeEl.innerText += "👋" //OR welcomeEl.innerText = welcomeEl.innerText +  "👋" 
