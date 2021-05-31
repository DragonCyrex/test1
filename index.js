var userName = prompt("What is your name?");
function name (x){
if (x == "Tawfeeq"){
  alert("we Love you Tawfeeq");
  }
else if (x == "Waad"){
  alert("Waad don't enter the website");
  }
else {
  alert("Intruder Alert!");
}
document.write("Hello There! " + x + " How can i help you?");
alert("you are awesome " + x);
}
name(userName);


function age (){
var x = confirm("just wanted to let you know!");
if (x == true){
  alert("Thank you");
  } 
else {
  alert("why man?");
}

var userAge = prompt("What is your age?");
while (userAge <= 25){
  alert("you are not allowed!");
  userAge = prompt("you are not old enough! What is your father's age?");
  }

var graphic_Design = prompt("how much do you rate Graphic Design? -out of 10")
for (i = 0; i < graphic_Design; i++){
  document.write("<img src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Star_empty.svg/1005px-Star_empty.svg.png'>")
}
}
age()