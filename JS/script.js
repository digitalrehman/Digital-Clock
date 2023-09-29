let start = document.getElementById("start")
let stops = document.getElementById("stop")
let date = document.getElementById("date")
let hou = document.getElementById("hou")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let am = document.getElementById("am")



let showdate = new Date().toDateString()
let styles = date.innerText = showdate;
let tast = () => {

    let hour = new Date().getHours()
    if (hour > 12) {
        hour = hour - 12
    }
    hour = (hour < 10) ? "0" + hour : hour;
    hou.innerText = hour;

    let apm = hour >= 12 ? "PM" : "AM"
    am.innerText = apm

    let minu = new Date().getMinutes()
    minu = (minu < 10) ? "0" + minu : minu;
    min.innerText = minu;

    let secn = new Date().getSeconds()
    secn = (secn < 10) ? "0" + secn : secn;
    sec.innerText = secn;



}
let = tast

start.addEventListener("click", () => {
    timer = setInterval(tast, 1000);

});


stops.addEventListener("click", () => {
    clearInterval(timer)

});






// console.log(showdate)