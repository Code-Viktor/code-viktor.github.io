var introductionH1 = document.querySelector("h1");
introductionH1.onclick = function () {
    let textContent = introductionH1.textContent;
    if (textContent === "Welcome to Code-Viktor's Website") {
        introductionH1.textContent = "歡迎來到彬彬的網站";
    } else {
        introductionH1.textContent = "Welcome to Code-Viktor's Website";
    };
};

var goodPersonButton = document.querySelector("button");
var goodPersonH4 = document.querySelector("h4");
var getGoodPersonName = localStorage.getItem("goodPersonName");
var goodPersonSuffix = " is a good person.";
if (!getGoodPersonName || getGoodPersonName === null) {
    goodPersonH4.textContent = "Someone" + goodPersonSuffix;
} else {
    goodPersonH4.textContent = getGoodPersonName + goodPersonSuffix;
};
goodPersonButton.onclick = function () {
    let setGoodPersonName = prompt("Please enter your name.");
    if (!setGoodPersonName || setGoodPersonName === null) {
        setGoodPersonName = "Someone";
    };
    localStorage.setItem("goodPersonName", setGoodPersonName);
    goodPersonH4.textContent = setGoodPersonName + goodPersonSuffix;
};