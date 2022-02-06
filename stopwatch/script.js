let [millisec, sec, min, hour] = [0, 0, 0, 0];
let time = document.querySelector(".timerDisplay");
let n;

document.getElementById("start").addEventListener("click", () => {
    n = setInterval(displayTime, 15);
}); 

document.getElementById("pause").addEventListener("click", () => {
    clearInterval(n);
});

document.getElementById("reset").addEventListener("click", () => {
    clearInterval(n);
    [millisec, sec, min, hour] = [0, 0, 0, 0];
    time.innerHTML = "00 : 00 : 00 : 000";
});

function displayTime() {
    millisec += 10;
    if (millisec == 1000) {
        millisec = 0;
        sec++;
        if (sec == 60) {
            sec = 0;
            min++;
            if (min == 60) {
                min = 0;
                hour++;
            }
        }
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let ms = millisec < 100 ? "0" + millisec : millisec;

    time.innerHTML = `${h} : ${m} : ${s} : ${ms}`;
}
