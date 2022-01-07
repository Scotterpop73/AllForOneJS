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
    
    var numbers = /^[0-9:]+$/;
    if(ch3Time.value.match(numbers))
    {
        functionTime = ch3Time.value;
        allLetter(ch3Name);
        
    }else{
        ch3Return.textContent = "Enter a valid time";
        
    }
})

function urlMethod(url)
{
    fetch(url).then(response => response.text()
    ).then(data => {
        ch3Return.textContent = data;
        console.log(data);
    })
}

function allLetter(ch3Name)
{ 
    var letters = /^[A-Za-z]+$/;
    if(ch3Name.value.match(letters))
    {
        ch3FunctionName = ch3Name.value;
        timeWokeUp = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh3/" + ch3FunctionName + "/" + functionTime;
        urlMethod(timeWokeUp);
        
    }else{
        ch3Return.textContent = "Enter a valid name";
        
    }
}