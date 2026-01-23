const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.id === 'red') {
      body.style.backgroundColor = "red";
      button.innerHTML="*"
      
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = "blue";
      button.innerHTML="*"
    }
    if (e.target.id === 'green') {
      body.style.backgroundColor = "green";
      button.innerHTML="*"
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = "yellow";
      button.innerHTML="*"
    }
  });
});
