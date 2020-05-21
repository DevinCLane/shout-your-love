const stringToShout = prompt("What is your name");
const shout = "I LOVE YOU " + stringToShout.toUpperCase();
const shoutMessage = `<h2>${shout}!!</h2>`;

document.querySelector('main').innerHTML = shoutMessage;