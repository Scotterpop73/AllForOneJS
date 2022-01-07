//Mini Challenge 6 ids
let ch6Num = document.getElementById("ch6Num");
let ch6SubmitBtn = document.getElementById("ch6SubmitBtn");
let ch6Return = document.getElementById("ch6Return");
let ch6FunctionNum = "";
let oddOrEven = "";

//add Event Listener
ch6SubmitBtn.addEventListener('click', function(e){
    ch6FunctionNum = ch6Num.value;

    if(ch6FunctionNum > 2147483647 || ch6FunctionNum < -2147483647 ){
        ch6Return.textContent = "The number you entered exceeded the range";
    }else{
        oddOrEven = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh6/" + ch6FunctionNum;
        urlMethod(oddOrEven);
    }
})

function urlMethod(url)
{
    fetch(url).then(response => response.text()
    ).then(data => {
        ch6Return.textContent = data;
        console.log(data);
    })
}