//Mini Challenge 4 ids
let ch4Num1 = document.getElementById("ch4Num1");
let ch4Num2 = document.getElementById("ch4Num2");
let ch4SubmitBtn = document.getElementById("ch4SubmitBtn");
let ch4Return = document.getElementById("ch4Return");
let ch4FunctionNum1 = "";
let ch4FunctionNum2 = "";
let greaterThan = "";

//add Event Listener
ch4SubmitBtn.addEventListener('click', function(e){
    ch4FunctionNum1 = ch4Num1.value;
    ch4FunctionNum2 = ch4Num2.value;
    greaterThan = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh4/" + ch4FunctionNum1 + "/" + ch4FunctionNum2;
    urlMethod(greaterThan);

})

function urlMethod(url)
{
    fetch(url).then(response => response.text()
    ).then(data => {
        ch4Return.innerHTML = data;
        console.log(data);
    })
}