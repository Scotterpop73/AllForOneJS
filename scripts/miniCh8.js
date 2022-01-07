//Mini Challenge 8 ids
let ch8StudentSearch = document.getElementById("ch8StudentSearch");
let ch8FNameBtn = document.getElementById("ch8FNameBtn");
let ch8LNameBtn = document.getElementById("ch8LNameBtn");
let ch8SlackBtn = document.getElementById("ch8SlackBtn");
let ch8EmailBtn = document.getElementById("ch8EmailBtn");
let ch8FNameReturn = document.getElementById("ch8FNameReturn");
let ch8LNameReturn = document.getElementById("ch8LNameReturn");
let ch8EmailReturn = document.getElementById("ch8EmailReturn");
let ch8SlackReturn = document.getElementById("ch8SlackReturn");
let ch8HobbiesReturn = document.getElementById("ch8HobbiesReturn");
let ch8FunctionName = "";
let studentDirectoryFirstNameUrl = "";
let studentDirectoryLastNameUrl = "";
let studentDirectoryEmailUrl = "";
let studentDirectorySlackUrl = "";
let students = [];
let student = document.getElementById("student");

//add Event Listeners
ch8FNameBtn.addEventListener('click', function(e){
    ch8FunctionName = ch8StudentSearch.value;
    studentDirectoryFirstNameUrl = "https://scottsallforone.azurewebsites.net/AllForOne/getByFirstName/" + ch8FunctionName;
    urlMethod(studentDirectoryFirstNameUrl);
})

ch8LNameBtn.addEventListener('click', function(e){
    ch8FunctionName = ch8StudentSearch.value;
    studentDirectoryLastNameUrl = "https://scottsallforone.azurewebsites.net/AllForOne/getByLastName/" + ch8FunctionName;
    urlMethod(studentDirectoryLastNameUrl);
})

ch8SlackBtn.addEventListener('click', function(e){
    ch8FunctionName = ch8StudentSearch.value;
    studentDirectorySlackUrl = "https://scottsallforone.azurewebsites.net/AllForOne/getBySlack/" + ch8FunctionName;
    urlMethod(studentDirectorySlackUrl);
})

ch8EmailBtn.addEventListener('click', function(e){
    ch8FunctionName = ch8StudentSearch.value;
    studentDirectoryEmailUrl = "https://scottsallforone.azurewebsites.net/AllForOne/getByEmail/" + ch8FunctionName;
    urlMethod(studentDirectoryEmailUrl);
})

student.addEventListener('change', function(e){
    ch8FunctionName = student.value;
    studentDirectoryFirstNameUrl = "https://scottsallforone.azurewebsites.net/AllForOne/getByFirstName/" + ch8FunctionName;
    urlMethod(studentDirectoryFirstNameUrl);
})

function urlMethod(url)
{
    fetch(url).then(response => response.text()
    ).then(data => {
        students = JSON.parse(data);
        if (students.firstName == "User Not Found") {
            ch8FNameReturn.textContent = students.firstName;
            ch8LNameReturn.textContent = "";
            ch8EmailReturn.textContent = "";
            ch8SlackReturn.textContent = "";
            ch8HobbiesReturn.textContent = "";
        }else{
            ch8FNameReturn.textContent = "First Name: " +students.firstName;
            ch8LNameReturn.textContent = "Last Name: " +students.lastName;
            ch8EmailReturn.textContent = "Email: " +students.email;
            ch8SlackReturn.textContent = "Slack: " +students.slackName;
            ch8HobbiesReturn.textContent = "Hobbies: " +students.hobbies;
        }
        console.log(students);
    })
}