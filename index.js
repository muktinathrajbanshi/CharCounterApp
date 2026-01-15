const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let char = 0;

const updateCounter = () => {
    userChar = charVal.value.length;
    
    totalCount.innerText = userChar;

    remainingCount.innerText = 150 - userChar;
}

charVal.addEventListener("keyup", () => updateCounter());