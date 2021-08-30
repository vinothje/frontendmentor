let days = 1;
let hours = 0;
let minutes = 1;
let seconds = 5;

document.querySelector('#days').innerText = days;
document.querySelector('#hours').innerText = hours;
document.querySelector('#minutes').innerText = minutes;
document.querySelector('#seconds').innerText = seconds;

let interval = setInterval(() => {
    if (seconds === 0) {
        if (minutes === 0) {
            if (hours === 0) {
                if (days === 0) {
                    return;
                }
                days -= 1;
                hours = 24;
            }
            hours -= 1;
            minutes = 60;
        }
        minutes -= 1;
        seconds = 60;
    }
    seconds -= 1;
    document.querySelector('#days').innerText = days;
    document.querySelector('#hours').innerText = hours;
    document.querySelector('#minutes').innerText = minutes;
    document.querySelector('#seconds').innerText = seconds;
}, 1000);
