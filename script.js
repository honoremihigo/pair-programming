function formatDuration(secondsPassed){

    let seconds=0;
    let minutes=0;
    let hours=0;
    let days=0;
    let months=0
    let years=0;
    //Checking the eligibility of passed seconds inside the function
    if(secondsPassed<0 || typeof (secondsPassed) !=="number" || secondsPassed.toString().split('').includes('.')){
        return `"${secondsPassed}" is not valid seconds`;
    }
    if(secondsPassed===0){
        return `NOW`;
    }


    //working for seconds production....

    if(secondsPassed>0 && secondsPassed<60){
        return secondsPassed==1? `${secondsPassed} second`:`${secondsPassed} seconds`;
    }

    //working for minutes production....
    if(secondsPassed>=60 &&secondsPassed<3600){
        minutes=Math.floor(secondsPassed/60);
        seconds= Math.floor(secondsPassed%60);
        return (minutes==1? `${minutes} minute`: `${minutes} minutes`) + (seconds==1? ` ${seconds} second`: ` ${seconds} seconds`);
    }
    //working for hours
    if(secondsPassed>=3600 && secondsPassed<86400){
        hours=Math.floor(secondsPassed/3600);
        minutes=Math.floor((Math.floor(secondsPassed%3600))/60)
        seconds= ((secondsPassed%3600)%60);
        return (hours==1? `${hours} hour`: `${hours} hours`) + (minutes==1? ` ${minutes} minute`: ` ${minutes} minutes`) + (seconds==1? ` ${seconds} second`: ` ${seconds} seconds`);
    }
    //working for days...
    if(secondsPassed>=86400 && secondsPassed<(86400*30)){
        days=Math.floor(secondsPassed/86400);
        hours= Math.floor((secondsPassed%86400)/3600);
        minutes= Math.floor(((secondsPassed%86400)%3600)/60)
        seconds= Math.floor(((secondsPassed%86400)%3600)%60)
        return (days==1? `${days} day`: `${days} days`) + (hours==1? ` ${hours} hour`: ` ${hours} hours`) + (minutes==1? ` ${minutes} minute`: ` ${minutes} minutes`) + (seconds==1? ` ${seconds} second`: ` ${seconds} seconds`);
    }

    //working for months...
    if(secondsPassed>=(86400*30)){
        months= Math.floor(secondsPassed/(86400*30));
        days= Math.floor(secondsPassed%(86400*30)/86400);
        hours=Math.floor(((secondsPassed%(86400*30))%86400)/3600);
        minutes=Math.floor((((secondsPassed%(86400*30))%86400)%3600)/60);
        seconds= (((secondsPassed%(86400*30))%86400)%3600)%60;
        return (months==1?`${months} month`:`${months} months`) + (days==1? ` ${days} day`: ` ${days} days`) + (hours==1? ` ${hours} hour`: ` ${hours} hours`) + (minutes==1? ` ${minutes} minute`: ` ${minutes} minutes`) + (seconds==1? ` ${seconds} second`: ` ${seconds} seconds`);
    }

}

//calling and testing the function
console.log(formatDuration( ));