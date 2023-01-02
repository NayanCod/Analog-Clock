setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    sdtime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;
    sdrotation = 6*sdtime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    secondshadow.style.transform = `rotate(${sdrotation-4}deg)`;
    // if(secondshadow.style.transform > `rotate(${180}deg)`){
    //     secondshadow.style.transform = `rotate(${sdrotation-6}deg)`;
    // }
}, 1000);