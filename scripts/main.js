/* 
    a "hello world" example 
*/
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

/* 
    adding an image changer 
*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/firefox-icon.png") {
        newAttribute = "images/firefox2.png";
    } else {
        newAttribute = "images/firefox-icon.png";
    }
    myImage.setAttribute("src", newAttribute);
}

/* 
    adding a personalized welcome message

    slightly changed from tutorial to have heading
    content "Hello world!" by default;
    setUserName() only called on button click
*/
let myButton = document.querySelector("button");

function setHeading(name) {
    myHeading.textContent = `Mozilla is cool, ${name}`;
}

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        setHeading(myName);
    }
}

if (localStorage.getItem("name")) {
    const storedName = localStorage.getItem("name");
    setHeading(storedName);
}

myButton.onclick = () => {
    setUserName();
}
