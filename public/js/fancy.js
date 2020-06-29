const listItems = document.querySelectorAll("#section7 .sectionContentContainer-full ul li");
let delay = 200;

console.log(listItems.length)
for(let i = 2; i < listItems.length; i++) {
    listItems[i].addEventListener("webkitAnimationEnd", animationEnded);
}

function animationEnded() {
    this.classList.remove("fancy");
}

focusTimer();

let interval = setInterval(focusTimer, delay);

function focusTimer() {
    delay = getRndInteger(200, 1000);
    let selectedItem = listItems[Math.floor(Math.random() * listItems.length)];

    if (!selectedItem.classList.contains("fancy")) {
        selectedItem.classList.add("fancy");
    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}