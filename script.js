function formatDuration(seconds){
    let second;
    let minutes;
    let hours;
    let days;
    let months;
    if(typeof seconds !== "number" || seconds<0){
        return "not a valid seconds";
    }

        if(seconds == 0){
        return "now";
    }
    if(seconds<60){
        return seconds>1? `${seconds} secs`: `${seconds} sec`;
    }
    if(seconds>=60 && seconds < 3600 ){
        minutes = Math.floor(seconds/60)
        second = seconds%60
        return minutes > 1 ?`${minutes} minutes , ${second} secs`:`${minutes} minute , ${second} secs`;
    }else if(seconds>=3600 && seconds <86400){
        hours= Math.floor(seconds/3600)
        minutes = Math.floor((seconds%3600) / 60)
        second = (minutes%60)
        return hours > 1 ?` ${hours} hours ,${minutes} minutes, ${second} secs`:`${hours} hour, ${minutes} minute(s), ${second} sec(s) `;
    }





    // if(seconds>=60 && seconds < 120){
    //     const remainder = seconds - 60
    //     return remainder > 0 ?`1 minutes and ${remainder} seconds`: `1 minute`
    // }

}
console.log(formatDuration(86398));