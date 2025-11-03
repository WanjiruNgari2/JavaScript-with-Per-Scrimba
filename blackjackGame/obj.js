//         // objects
// // Store data in depth or key value pairs.
        let player = {
            name : "Shane",
            Chips : 143
        }

        let playerScore = document.getElementById("score-el")
        playerScore.textContent = player.name + ": $" + player.chips //Shane: $143

        console.log(playerScore);

        let course = {
            title : "Learn CSS Grid for free",
            lessons : 18,
            length : 63, //to read one hour
            level : 2, //to read intermediate 
            creator : "Per Harold",
            isFree : true,
            tags : ["html", "css"]
        }
        console.log(course.length)//63 using dot notation
        console.log(course["tags"])//[ 'html', 'css' ] using bracket notation to get obj val pairs.


// // create an obj that reps an airbnb castle listing.
// // should have at least one boolean, one str, one number and one arr
// // log out at least two of the keys using dot notation

        let availableSpots = {
            title: "Welcome to Memphis",
            isavail : true,
            distanceInMeters : 100,
            districtArea : "Memphis",
            tags : ["cozy", "affordable", "nearest", "1000ksh"]

        }
        console.log(availableSpots.distanceInMeters); //100
        console.log(availableSpots.title);//Welcome to Memphis


//         // METHODS/FUNCTION IN OBECJS
let playerT = {
     name : "Shane",
    Chips : 143,
    sayHello : function() {
        console.log("HEY THERE HON!");
        }

}
playerT.sayHello() //HEY THERE HON!

// //                   AND OPERATOR
// // create an if statement that checks that both vars are false. 
// // if so, run the showSolution() function.

        let hasSolvedChallenge = false
        let hasHintsLeft  = false

        if (hasSolvedChallenge && hasHintsLeft === false){
            showSolution()
        }

        function showSolution() {
            console.log("Showing Solution.....");
            
        }
// //                  OR OPERATOR
// // Create two boolean vars, likesDocumentaries and likesStartups.
// // Use an OR statement to call recommendedMovie() if either of the
// //    the vars is true
        let likesDocumentaries = true
        let likesStartups = true

        if(likesDocumentaries || likesStartups === true) {
            recommendedMovie()
        }
        function recommendedMovie() {
            console.log("Hey, Check out this new film we think you'll like!");
            
        }

