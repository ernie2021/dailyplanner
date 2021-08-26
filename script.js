// global variables for timeblocks //
var Input9El = $("#9am").find("input");
var Input10El = $("#10am").find("input");
var Input11El = $("#11am").find("input");
var Input12El = $("#12pm").find("input");
var Input1El = $("#1pm").find("input");
var Input2El = $("#2pm").find("input");
var Input3El = $("#3pm").find("input");
var Input4El = $("#4pm").find("input");
var Input5El = $("#5pm").find("input");
var currentDayNow = moment();
//Input and schedule variables//
var scheduleList = $("ul")
var input = $("input")
//This will display current date//
var currentDay = $("#currentDay")
currentDay.text(currentDayNow.format("dddd, MMMM Do"))

//This function will update all the values and place them in the local storage//
function valuesUpdate() {
    var savedInputs = JSON.parse(localStorage.getItem("savedInputs")) || ["", "", "", "", "", "", "", "", "", ];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        element.value = savedInputs[i];
    }

}

valuesUpdate();

//This will save the info inside the text input in the empty array onto the local storage//
scheduleList.on("click", ".saveButton", function(){
    var newInputs = [];
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        newInputs.push(element.value)
        localStorage.setItem("savedInputs", JSON.stringify(newInputs))
    }

})
  
//This will validate times for all times on the site/app// 
if (today.hour() === 9) {
    Input9El.css("background-color", "red")
} else if (today.hour() < 9) {
    Input9El.css("background-color", "green")
}

if (today.hour() === 10) {
    Input10El.css("background-color", "red")
} else if (today.hour() < 10) {
    Input10El.css("background-color", "green")
}

if (today.hour() === 11) {
    Input11El.css("background-color", "red")
} else if (today.hour() < 11) {
    Input11El.css("background-color", "green")
}

if (today.hour() === 12) {
    Input12El.css("background-color", "red")
} else if (today.hour() < 12) {
    Input12El.css("background-color", "green")
}

if (today.hour() === 13) {
    Input1El.css("background-color", "red")
} else if (today.hour() < 13) {
    Input1El.css("background-color", "green")
}

if (today.hour() === 14) {
    Input2El.css("background-color", "red")
} else if (today.hour() < 14) {
    Input2El.css("background-color", "green")
}

if (today.hour() === 15) {
    Input3El.css("background-color", "red")
} else if (today.hour() < 15) {
    Input3El.css("background-color", "green")
} 

if (today.hour() === 16) {
    Input4El.css("background-color", "red")
} else if (today.hour() < 16) {
    Input4El.css("background-color", "green")
}

if (today.hour() === 17) {
    Input5El.css("background-color", "red")
} else if (today.hour() < 17) {
    Input5El.css("background-color", "green")
}