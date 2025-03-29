var frnd = document.querySelector("h1");
var btn = document.querySelector(".btn");

console.log(frnd);
console.log(btn);
var flag = 0;

btn.addEventListener("click", () => {
  if (flag == 0) {
    frnd.innerHTML = "You Are Now Friends !!";
    btn.innerHTML = "Unfriend";
    flag++;
  } else {
    frnd.innerHTML = "Strangers";
    btn.innerHTML = "Add Friend";
    flag--;
  }
});

