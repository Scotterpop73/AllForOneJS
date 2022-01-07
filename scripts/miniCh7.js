//Mini Challenge 7 ids
let ch7Num = document.getElementById("ch7Num");
let ch7SubmitBtn = document.getElementById("ch7SubmitBtn");
let ch7OGNum = document.getElementById("ch7OGNum");
let ch7ReversedNum = document.getElementById("ch7ReversedNum");
let ch7FunctionNum = "";
let reverseIt = "";

//add Event Listener
ch7SubmitBtn.addEventListener('click', function(e){
    ch7FunctionNum = ch7Num.value;

    if(ch7FunctionNum > 2147483647 || ch7FunctionNum < -2147483647 ){
        ch7ReversedNum.textContent = "";
        ch7OGNum.textContent = "The number you entered exceeded the range";
    }else{
        ch7OGNum.textContent = ch7Num.value;
        reverseIt = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh7/" + ch7FunctionNum;
        urlMethod(reverseIt);
    }
})

function urlMethod(url)
{
    fetch(url).then(response => response.text()
    ).then(data => {
        ch7ReversedNum.textContent = data;
        console.log(data);
    })
}