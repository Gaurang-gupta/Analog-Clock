let hour = document.querySelector('#hour');
let min = document.querySelector('#minute');
let second = document.querySelector('#second');

setInterval(()=>{
    let date = new Date();
    let htime = date.getHours();
    let mtime = date.getMinutes();
    let stime = date.getSeconds();
    let hrotation = 30*htime + mtime/2;
    let mrotation = 6*mtime;
    let srotation = 6*stime;
    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
},1000)