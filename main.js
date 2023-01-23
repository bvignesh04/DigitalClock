let hourEl = document.getElementById('hour')
let minuteEl = document.getElementById('minutes')
let secondsEl = document.getElementById('seconds')
let ampmEl = document.getElementById('ampm')

function updateClock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = 'am'
    if(h > 12){
        h = h -12
        ampm = 'pm'
    }
    h = h<10 ? '0' + h : h

    hourEl.innerHTML = h
    minuteEl.innerHTML = m;
    secondsEl.innerHTML = s;
    ampmEl.innerHTML = ampm;


}

setInterval(() => {
updateClock()


    
}, 1000);



