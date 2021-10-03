const clock = document.querySelector("h2#clock");


function getClock(){
    const date = new Date();
    //const hours = date.getHours();
    //const minutes = date.getMinutes();
    //const seconds = date.getSeconds();
    //clock.innerText = `${hours<10 ? `0${hours}`:hours}:${minutes<10 ? `0${minutes}`:minutes}:${seconds<10 ? `0${seconds}`:seconds}`;
    const hours =String(date.getHours()).padStart(2,"0");
    const intHours = parseInt(hours);
    
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    const intHours = parseInt(hours);
    if(intHours >= 12){
        clock.innerText = `${String(intHours-12).padStart(2,"0")}:${minutes}:${seconds} PM`;
    }else{
        clock.innerText = `${hours}:${minutes}:${seconds} AM`;
    }
}
getClock();
setInterval(getClock, 1000);

