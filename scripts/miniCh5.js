//Mini Challenge 5 ids
let ch5Adj1 = document.getElementById("ch5Adj1");
let ch5Noun1 = document.getElementById("ch5Noun1");
let ch5Adj2 = document.getElementById("ch5Adj2");
let ch5Plant = document.getElementById("ch5Plant");
let ch5Noun2 = document.getElementById("ch5Noun2");
let ch5BodyPart = document.getElementById("ch5BodyPart");
let ch5PluralNoun = document.getElementById("ch5PluralNoun");
let ch5Place = document.getElementById("ch5Place");
let ch5VerbING = document.getElementById("ch5VerbING");
let ch5Restaurant = document.getElementById("ch5Restaurant");
let ch5SubmitBtn = document.getElementById("ch5SubmitBtn");
let ch5Return = document.getElementById("ch5Return");
let madLibModel;
let madLibUrl = "https://scottsallforone.azurewebsites.net/AllForOne/miniCh5";





//add Event Listener
ch5SubmitBtn.addEventListener('click', function(e){
    
    madLibModel = {
        adjPlace:"" + ch5Adj1.value,
        adjFamily:"" + ch5Adj2.value,
        noun1:"" + ch5Noun1.value,
        plnoun:"" + ch5PluralNoun.value,
        verbING:"" + ch5VerbING.value,
        nounPoison:"" + ch5Noun2.value,
        plant:"" + ch5Plant.value,
        body:"" + ch5BodyPart.value,
        place:"" + ch5Place.value,
        food:"" + ch5Restaurant.value
    }

    modelMethod(madLibUrl, madLibModel);
})

function modelMethod(url, model)
{
    fetch(url, {
        "method":"POST",
        "headers":{
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(model)
    }).then(response => response.text())
    .then(data => {
        ch5Return.textContent = data;
        console.log(data)
    });
}