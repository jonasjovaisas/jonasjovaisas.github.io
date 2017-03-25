/*jslint node: true */
/*jslint devel: true */
///*global prompt */
"use strict";


//--Image changing START
var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-logo.png') {
        myImage.setAttribute('src', 'images/firefox-logo-2.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-logo.png');
    }
};
//--Image changing END

//--Name changing START
var myButtonSetChange = document.getElementById('myButtonSetChange');
var myButtonDelete = document.getElementById('myButtonDelete');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    if (myName !== null) {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
        document.getElementById('myButtonSetChange').textContent = 'Change user';
    }
}

//initialization
if (!localStorage.getItem('name')) {
    document.getElementById('myButtonSetChange').textContent = 'Set user!';
} else {
    document.getElementById('myButtonSetChange').textContent = 'Change user';
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

//change name with button
myButtonSetChange.onclick = function () {
    setUserName();
};

//delete name from localStorage
myButtonDelete.onclick = function () {
    localStorage.setItem('name', '');
    document.getElementById('myButtonSetChange').textContent = 'Set user!';
    myHeading.textContent = 'Mozilla is cool!';
};
//--Name changing END