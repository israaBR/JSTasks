// validator Game
//Task Description: make a form with validations
// var passwordTxt = document.getElementById("password");
// var country = document.getElementById("country");
// var submitBtn = document.getElementById("submitBtn");
// var resetBtn = document.getElementById("resetBtn");

// function verifyName()
// {
//     var nameTxt = document.getElementById("name");
//     var nameMsg = document.getElementById("nameMsg");
//     if(nameTxt.value.length == 0)
//         nameMsg.style.display = "block";
//     else
//         nameMsg.style.display = "none";
// }
// function verifyEmail()
// {
//     var emailTxt = document.getElementById("email");
//     var emailMsg = document.getElementById("emailMsg");
//     if(emailTxt.value.length == 0)
//         emailMsg.style.display = "block";
//     else
//         emailMsg.style.display = "none";
// }
// function verifyGender()
// {
//     var gender = document.getElementsByName("gender");
//     var genderMsg = document.getElementById("genderMsg");
//     if(gender[0].checked || gender[1].checked)
//         genderMsg.style.display = "none";
//     else
//         genderMsg.style.display = "block";
// }
// function verifySports()
// {
//     var sports = document.querySelectorAll("input[name=sports]:checked");
//     var sportsMsg = document.getElementById("sportsMsg");
//     if(sports.length < 2)
//         sportsMsg.style.display = "block";
//     else
//         sportsMsg.style.display = "none";
//     console.log(sports);
// }
// passwordTxt.addEventListener("input", function()
// {    var passwordMsg = document.getElementById("passwordMsg");
//     if(passwordTxt.value.length > 0 && passwordTxt.value.length < 8)
//         passwordMsg.style.display= "block";
//     else
//     passwordMsg.style.display = "none";
//     console.log(passwordMsg);

// });

// country.addEventListener("change", function(event)
// {
//     var countryMsg = document.getElementById("countryMsg");
//     if(country.options[country.selectedIndex].value == "")
//         countryMsg.style.display = "block";
    
// });
// submitBtn.addEventListener("click", function(event)
// {
//     event.preventDefault();
//     verifyName();
//     verifyEmail();
//     verifyGender();
//     verifySports();
// });


// Second Task
//Task Description: take a letter and print its ASCII code, determine if shift, alt or ctrl keys were pressed and prevent context menu from appearing 
// var input = document.getElementsByTagName("input");
// var result = document.getElementsByTagName("p");
// input[0].addEventListener("input", function(event)
// {
//     result[0].innerText = "ِASCII code is: " + input[0].value.charCodeAt(input[0].value.length -1);
// });

// document.addEventListener("keypress", function(event)
// {
//     if(event.shiftKey)
//         result[1].innerText = "You've pressed shift key";
//     if(event.altKey)
//         result[1].innerText = "You've pressed alt key";
//     if(event.ctrlKey)
//         result[1].innerText = "You've pressed ctrl key";
// });
// document.addEventListener("contextmenu", function(event)
// {
//     event.preventDefault();
// });
