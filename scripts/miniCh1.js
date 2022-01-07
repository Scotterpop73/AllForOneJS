// Mini Challenge 1 ids
let ch1Name = document.getElementById("ch1Name");
let ch1SubmitBtn = document.getElementById("ch1SubmitBtn");
let ch1Return = document.getElementById("ch1Return");
let functionName = "";
let sayHelloUrl = "";

//add Event Listener
ch1SubmitBtn.addEventListener('click', function(e){
    functionName = ch1Name.value;
    sayHelloUrl = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh1/" + functionName;
    urlMethod(sayHelloUrl);
})

function urlMethod(url)
{
    fetch(url).then(response => response.text()
    ).then(data => {
        ch1Return.textContent = data;
        console.log(data);
    })
}

