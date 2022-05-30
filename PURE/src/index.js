import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

function Eligibility() {
  let name = prompt("What's your name?");
  let age = prompt("How old are you?");
  if (age <= 18) {
    alert("Sorry," + name + "You cannot join PURE 😢");
  } else {
    alert(
      "Hi," +
        name +
        "Welcome to PURE! 😊 Please provide your username and password"
    );
  }
}
let applyButton = document.querySelector("button");
applyButton.addEventListener("click", Eligibility);

var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

var modal = document.getElementById("id02");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
