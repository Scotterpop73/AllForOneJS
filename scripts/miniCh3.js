//Mini Challenge 3 ids
let ch3Name = document.getElementById("ch3Name");
let ch3Time = document.getElementById("ch3Time");
let ch3SubmitBtn = document.getElementById("ch3SubmitBtn");
let ch3Return = document.getElementById("ch3Return");
let ch3FunctionName = "";
let functionTime = "";
let timeWokeUp = "";

//add Event Listener
ch3SubmitBtn.addEventListener('click', function(e){
    ch3FunctionName = ch3Name.value;
    functionTime = ch3Time.value
    timeWokeUp = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh3/" + ch3FunctionName + "/" + functionTime;
    urlMethod(timeWokeUp);
})

function urlMethod(url)
{
    fetch(url).then(response => response.text()
    ).then(data => {
        ch3Return.textContent = data;
        console.log(data);
    })
}