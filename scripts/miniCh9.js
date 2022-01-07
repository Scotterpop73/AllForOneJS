//Mini Challenge 9 ids
let ch9FoodChoice = document.getElementById("ch9FoodChoice");
let ch9SubmitBtn = document.getElementById("ch9SubmitBtn");
let ch9Return = document.getElementById("ch9Return");
let ch9FunctionName = "";
let restaurantPicker = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh9/fast";


//add Event Listener
ch9SubmitBtn.addEventListener('click', function(e){
    ch9FunctionName = ch9FoodChoice.value;
    restaurantPicker = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh9/" + ch9FunctionName;
    urlMethod(restaurantPicker);
})

function urlMethod(url)
{
    fetch(url).then(response => response.text()
    ).then(data => {
        ch9Return.textContent = data;
        console.log(data);
    })
}