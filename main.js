const timer = document.querySelector(".text");
function countdown() {
    const endDate = new Date("june 20 2022 00:00:00").getTime()
    const now = new Date().getTime()

    const differnce = endDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24
    
    let dayTime = Math.floor(differnce / days)
    let hourTime = Math.floor((differnce % days) / hours)
    let minutesTime = Math.floor((differnce % hours) / minutes)
    let secondsTime = Math.floor((differnce % minutes) / seconds)
     dayTime = dayTime < 10 ? "0" + dayTime : dayTime;
     hourTime = hourTime < 10 ? "0" + hourTime : hourTime;
     minutesTime = minutesTime < 10 ? "0" + minutesTime : minutesTime;
    secondsTime =secondsTime < 10 ? "0" +secondsTime :secondsTime;
     document.querySelector(".days").innerHTML = dayTime;
     document.querySelector(".hours").innerHTML = hourTime;
     document.querySelector(".minutes").innerHTML = minutesTime;
     document.querySelector(".seconds").innerHTML = secondsTime;






}
setInterval(countdown, 1000)