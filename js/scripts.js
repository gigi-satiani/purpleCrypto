const dayCount = new Date('jan 01, 2023 00:00:00');
setCountdown(dayCount);

setInterval(function() {
    setCountdown(dayCount);
},1000)

function setCountdown(counting) {
    let now = new Date();
    let timeRemaining = counting - now;

    let seconds = Math.floor(timeRemaining / 1000);
    let minutes = Math.floor(timeRemaining / (1000*60));
    let hours = Math.floor(timeRemaining / (1000*60*60));
    let days = Math.floor(timeRemaining / (1000*60*60*24));


    let daysDisplay = days;
    let hoursDisplay = hours - (days * 24);
    let minutesDisplay = minutes - (hours * 60);
    let secondsDisplay = seconds - (minutes * 60);

    // console.log(daysDisplay, hoursDisplay, minutesDisplay, secondsDisplay);

    const daysE = document.querySelector("#days");
    const hoursE = document.querySelector("#hours");
    const minutesE = document.querySelector("#minutes");
    const secondsE = document.querySelector("#seconds");

    daysE.textContent = daysDisplay;
    hoursE.textContent = hoursDisplay;
    minutesE.textContent = minutesDisplay;
    secondsE.textContent = secondsDisplay;
}