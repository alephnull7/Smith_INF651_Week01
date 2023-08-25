// update content of all h1 elements
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// add an image changer
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
