//     QUIZ1: create a person obj that has 3 keys:name, age and country.
// use youself as an example to set the valus of those keys
// create a func logData(), that uses the person obj to create a str 
// in this format: "Per is 34 years old and lives in Norway"
// call the logData() func to verify that it works

// let human = {
//     name : "Shirleen Twain",
//     age : 22,
//     country : "Zambia"
// }

// function logData() {
//     console.log(human.name +" is " + human.age + " and lives in " + human.country ); 
// }

// logData()//Shirleen Twain is 22 and lives in Zambia

//  QUIZ 2: let age = 15
// less than 6 years has free, 6 to 17 years has child discount,
// 18 to 26 years has student discount, 27 to 66 years has full price,
// over 66 years has senior citizen discount.
// create a conditional statement that logs out the discount the 
// customer will get based on the value of the age variable

        // let passenger = {
        //     name : "Victor",
        //     age : 166
        // } 

        // function fareDiscount () {
        //     if (passenger.age < 6) {
        //         console.log(passenger.name + " your age is " + passenger.age + " so you ride free!" );
                
        //     }
        //     else if( passenger.age <= 17) {
        //         console.log(passenger.name + " your age is " + passenger.age + " so you get a child discount" );
        //     }
        //     else if( passenger.age <= 26) {
        //         console.log(passenger.name + " your age is " + passenger.age + " so you get a student discount" );
        //     }
        //     else if( passenger.age <= 66) {
        //         console.log(passenger.name + " your age is " + passenger.age + " so you pay full price." );
        //     }
        //     else {
        //         console.log(passenger.name + " your age is " + passenger.age + " so you get a senior citizen discount." );
        
        //     }

        // }
        // fareDiscount()


// QUIZ 3: USE A FOR LOOP TO LOG THESE TO THE CONSOLE:
        // let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
        // console.log("The 5 larget countries in the world:")

        // function showCountries() {
        //     for(let i = 0; i < largeCountries.length; i++) {
        //         console.log(" - " + largeCountries[i] );

        //     }
            
        // }
        // showCountries()

// QUIZ4: let largeCoutnries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// arrange the arr so that china and Pakistan are added back to the arr
// use push() and pop() , unshift() and shift()

// let largeCoutnries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// largeCoutnries.pop()//removed Monaco from the end
// console.log(largeCoutnries);//[ 'Tuvalu', 'India', 'USA', 'Indonesia' ]

// largeCoutnries.push("Pakistan")//adds 'Pakistan' to the end
// console.log(largeCoutnries);// [ 'Tuvalu', 'India', 'USA', 'Indonesia', 'Pakistan' ]

// largeCoutnries.shift("Tuvalu")//removes Tuvalu from the beginning
// console.log(largeCoutnries);//[ 'India', 'USA', 'Indonesia', 'Pakistan' ]

// largeCoutnries.unshift("China")//adds china to the start of the list
// console.log(largeCoutnries);//[ 'China', 'India', 'USA', 'Indonesia', 'Pakistan' ]


//QUIZ5: if it's Friday the 13th, log out this spooky face: 😢
    // use the logical "AND operator" 

        // let dayOfMonth = 13
        // let weekday = "Friday"

        // if(dayOfMonth === 13 && weekday === "Friday") {
        //     console.log("whoa! 😢");
            
        // }

// quiz6: ROCK PAPER SCISSORS: 4:28:46
// create a func that returns a random item from the arr

