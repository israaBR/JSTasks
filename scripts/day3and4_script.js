//success/error
// function changeImgToGreen(){
//     var img = document.getElementsByTagName("img");
//     img[0].src = "/images/success.jpg";
// }
// function changeImgToRed(){
//     var img = document.getElementsByTagName("img");
//     img[0].src = "/images/error.png";
// }



// slide show game
// var count = 1;
// function showPreviousImg()
// {
//     count--;
//     if(count == 0)
//         count = 5;
//     var img = document.getElementById("image");
//     img.src = "/images/" + String(count) + ".jpg";
// }
// function showNextImg()
// {
//     count++;
//     if(count == 6)
//         count = 1;
//         var img = document.getElementById("image");
//         img.src = "/images/" + String(count) + ".jpg";
// }
// var interval;
// function start()
// {
//     interval = setInterval(showNextImg, 800);
// }
// function stop()
// {
//     clearInterval(interval);
// }




// Count Me Game
// function countElements()
// {
//     var tags = document.getElementsByTagName(document.getElementById("tag").value);
//     var Classes = document.getElementsByClassName(document.getElementById("class").value);
//     var ID = document.getElementById(document.getElementById("id-").value);
//     var isExist;   
//     if(ID == null)
//         isExist = "does not exist";
//     else
//         isExist = "exists";
//     var name = document.getElementsByName(document.getElementById("name-").value);
//     var output = document.getElementById("output");
//      output.innerText = "Tags with this name are "+tags.length+"\n"
//      + "Classes with this name are " +Classes.length+"\n"
//      +"ID " + isExist + "\n"
//      +"Elements with this name are " + name.length;
// }



// change text properties
// function changeHtml()
// {
//     var h1 = document.getElementsByTagName("h1");
//     h1[0].innerHTML = "<p>New HTML</p>";
// }
// function changeText()
// {
//  var paragragh = document.getElementById("p1");
//  paragragh.innerText = "Inner \n Text \n Changed!";   
// }
// function changeContent()
// {
//     var paragragh = document.getElementById("p1");
//     paragragh.textContent = "Text \n Content \n Changed!!";   
// }
// function changeStyle()
// {
//  var div = document.getElementsByTagName("div");
//  div[0].style.backgroundColor="Green";   
// }
// function reverseLinks()
// {
//     var google = document.getElementById("google");
//     var linkedin = document.getElementById("linkedin");
//     var temp = google.attributes.href.value;
//     google.setAttribute("href", linkedin.attributes.href.value);
//     linkedin.setAttribute("href", temp);
// }
// function multiply()
// {
//     var num1 = parseInt(document.getElementById("num1"));
//     var num2 = parseInt(document.getElementById("num2"));
//     var result = document.getElementById("result");
//     result.value = num1.value * num2.value;
// }



// Timer
// var timer = 0;
// var interval;
// function incrementTimer()
// {
//     var timerParagraph = document.getElementById("timer");
//     timerParagraph.innerText = timer++;

// }
// function startTimer()
// {
//     interval = setInterval(incrementTimer, 1000);
// }
// function stopTimer()
// {
//     clearInterval(interval);
// }



// download link
// function showLink()
// {
//     var link = document.getElementById("link");
//     link.innerHTML = "<a href='www.google.com'> download link</a>";
// }
// function download()
// {
//     var link = document.getElementById("link");
//     link.style.display = "block";
//     window.setTimeout(showLink, 3000);
// }




// buttons window
// var myWindow;
// function openWindow()
// {
//     myWindow = open("www.google.com","", "width=200", "height=200");
// }
// function closeWindow()
// {
//     myWindow.close();
// }
// function moveWindowTo()
// {
//     myWindow.moveTo(100,150);
// }
// function moveWindowBy()
// {
//     myWindow.moveBy(100,150);
// }
// function resizeWindowTo()
// {
//     myWindow.resizeTo(150,150);
// }
// function resizeWindowBy()
// {
//     myWindow.resizeBy(50,50);
// }





// add to table
// function createRow(name, age)
// {
//     var newRow = document.createElement("tr");
//     var newCell = document.createElement("td");
//     newCell.innerText = name;
//     newRow.append(newCell);
//     var newCell = document.createElement("td");
//     newCell.innerText = age;
//     newRow.append(newCell);
//     return newRow;
// }
// function addStudent()
// {
//     var name = document.getElementById("name");
//     var age = document.getElementById("age");
//     var table = document.getElementById("tbl");
//     var newRow = createRow(name.value, age.value);
//     table.append(newRow);
// }