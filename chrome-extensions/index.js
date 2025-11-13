//1. log out "BUTTON CLICKED" when the user clicks the "SAVE INPUT" btn
        // function clickedBtn() {
        //     console.log("Button Clicked!");
        // }

        // let inputBtn = document.getElementById("input-btn")
        // inputBtn.addEventListener("click", function(){
        //     console.log("hey I was cicked by event!");
        // })

//2.Grab the box from the DOM and store it in a var.
//  Then add a click event listener to it and log out
//  "I want to open the box!" when its clicked

        // let box = document.getElementById("box")

        // box.addEventListener("click", function () {
        //    console.log("I want to open the box!");
            
        // })

//3.refactor the code so that it uses .addEventListener() 
// when you click the SAVE INPUT btn
        // let saveBtn = document.getElementById("input-btn")
        // saveBtn.addEventListener("click", function (){
        //     console.log("Button Clicked!");
        // })

//4. Create 2 vars: myLeads(should be assigned to an empty arr) 
// and inputEl(should be assigned to the text input field)
    //-push "www.awesomelead.com" to the arr when the input btn is clicked
    //-now push the value from inputEL into the myLeads arr instead 
    //- of the hardcoded  "www.awesomelead.com" value. 
    //- so check how to get value from an input field by using doc.getelmtbyId.value
    //-log out the items in the myLeads arr usinga for loop
    //-grab the unordered list you created inhtml and store it in a const var
    //-Render the leads into the unordered list using ulEl.textContent
    //-add the buy button to the div container
    //-when buy is clicked, render a paragraph under the btn (in the conatiner) 
    // that says "Thank you for Buying!"
    //- NOW use createElemnt() and append() instead of innerHTML
    //-clear out the input field using value = ""
    //-wrap the leads in <a> tags inside the <li> tags. 
    //-can you make the links open in a new tab?
   


let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

// get the leads from the localStorage using json.parse()
//store it in a var, leadsFromLocalStorage and log it out
const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads") )

//check if leadsFromLocalStorage is truthy.
//if so, set myLeads to its value and call renderLeads9
if (leadsFromLocalStorage ){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}    

//5.create a var, listItems to hold all the html for the list items
//assign it to an empty str to begin with.
//acc the item to the listItem var instead of ulEL.innerHTML
//render the listItems inside the unordered list using ulEL.innerHTML

//refactor the function render() sp that it takes a param, leads, that 
// it uses instead of the global myLeads var. 
function render(leads) {
    let listItems = " "
    for(let i = 0; i < leads.length; i++){
        // listItems +="<li><a target='_blank' href='" +  leads[i] + "'>" + leads[i] +  "</a></li>"
        listItems +=`
    <li>
        <a target='_blank' href='${ leads[i]}'>  ${ leads[i]} </a>
    </li>`

    ulEl.innerHTML = listItems 
}
}

// for(let i = 0; i< myLeads.length; i++) {
//     ulEl.innerHTML +="<li>" + myLeads[i] + "</Li> "// innerHTML converts the li into actual tags
    // create the element 
        // const li = document.createElement("li")
    //set text content
        // li.textContent = myLeads[i]
    //append to ul
        // ulEl.append[li]      }


inputEl.addEventListener("click", function (){
    myLeads.push(inputEl.value)
//clear input value using value = ""
  inputEl.value = ""
//save the myLeads array to localStorage using stingify()
  localStorage.setItem("myLeads", JSON.stringify(myLeads))  
//verify this actually works
// call the renderLeads() func
    render(myLeads)
});




const container = document.getElementById("container")
container.innerHTML = "<button onclick='buy()'> BUY! </button> "
function buy(){
    container.innerHTML += "<p> Thank you for buying! </p>"
}



 // 6. LocalStorage
// localStorage.setItem("myLeads", "www.exampleLead.com")
// console.log(localStorage.getItem(myLeads)) //www.exampleLead.com

//save a key value pair in localStorage
//refresh the page. Get the value and log it to the console
//clear the localStorage.both key and value must be strings

        localStorage.setItem("userName", "Karen Marie Moning")
        // let uName = localStorage.getItem("userName") 
        // console.log(uName)//Karen Marie Moning
        localStorage.clear() 
        let uName = localStorage.getItem("userName") 
        console.log(uName)//NULL


//     STINGIFY() VS PARSE()
        let leadsArr = `["www.exampleLeads.com"] ` //even arr must be in str

        leadsArr = JSON.parse(leadsArr) //converts from str to actual array
        leadsArr.push("www.idealLeads.com")
        console.log(leadsArr);//www.exampleLeads.com, www.idealLeads.com

        leadsArr = JSON.stringify(leadsArr)
        console.log(typeof leadsArr); //string


//7. store a delete btn in a deleteBtn Var
//listen for double clicks on the delete btn
//when clicked, clear localStorage, myleads and the DOM
const deleteBtn = document.getElementById("delete-btn")
deleteBtn.addEventListener("dblclick", function() {
    console.log("doubleclicked!");
    localStorage.clear()
    myLeads = []
    render(myLeads)
    
})


//8.CREATE A SAVE TAB FUNC that saves  a url
// const tabs = [
//     {url : "https://www.linkedin.com/in/damaris-ngari-6b1870199/"}
// ]

const tabBtn = document.getElementById("tab-btn") 

tabBtn.addEventListener("click", function() {
    // console.log( tabs[0].url );//https://www.linkedin.com/in/damaris-ngari-6b1870199/"}


    //grab the URL of the current tab the user is using 
    chrome.tabs.query({active: true, currentWindow: true, function(tabs) {
    
    // save the url instead of logging it out
    myLeads.push( tabs[0].url )
    localStorage.setItem("myLeads", JSON.stringify( myLeads ) )
    render(myLeads)

    }})
    
    
} )

//9.deploy the final version 