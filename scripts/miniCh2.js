//Mini Challenge 2 ids
let ch2Num1 = document.getElementById("ch2Num1");
let ch2Num2 = document.getElementById("ch2Num2");
let ch2SubmitBtn = document.getElementById("ch2SubmitBtn");
let ch2Return = document.getElementById("ch2Return");
let addTwoNumbers = "";
let functionNum1 = "";
let functionNum2 = "";

//add Event Listener
ch2SubmitBtn.addEventListener('click', function(e){
    functionNum1 = ch2Num1.value;
    functionNum2 = ch2Num2.value;

    if(functionNum1 > 2147483647 || functionNum1 < -2147483647){
        ch2Return.textContent = "The first number you entered exceeded the range";
        if (functionNum2 > 2147483647 || functionNum2 < -2147483647) {
            ch2Return.textContent = "Both nunbers exceeded the range";
        }
    }else if (functionNum2 > 2147483647 || functionNum2 < -2147483647) {
        ch2Return.textContent = "The second number you entered exceeded the range";
    }else{
        addTwoNumbers = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh2/" + functionNum1 + "/" + functionNum2; 
    urlMethod(addTwoNumbers);
    }
})

function urlMethod(url)
{
    fetch(url).then(response => response.text()
    ).then(data => {
        ch2Return.textContent = data;
        console.log(data);
    })
}