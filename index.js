const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let userChar = 0;

const updateCounter = () => {
    alert("Hey, how are you!");
}

charVal.addEventListener("keyup", () => updateCounter());