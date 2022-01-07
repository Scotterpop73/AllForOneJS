// Mini Challenge 1 ids
let ch1Name = document.getElementById("ch1Name");
let ch1SubmitBtn = document.getElementById("ch1SubmitBtn");
let ch1Return = document.getElementById("ch1Return");
let functionName = "";
let sayHelloUrl = "";

//add Event Listener
ch1SubmitBtn.addEventListener('click', function(e){
    
    allLetter(ch1Name);
})

function urlMethod(url)
{
    fetch(url).then(response => response.text()
    ).then(data => {
        ch1Return.textContent = data;
        console.log(data);
    })
}

function allLetter(ch1Name)
{ 
    var letters = /^[A-Za-z]+$/;
    if(ch1Name.value.match(letters))
    {
        functionName = ch1Name.value;
        sayHelloUrl = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh1/" + functionName;
        urlMethod(sayHelloUrl);
        
    }else{
        ch1Return.textContent = "Enter a valid name";
        
    }
}
