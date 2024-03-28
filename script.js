let start = document.querySelector('#start');
let stop = document.querySelector('#stop');



const randomColor = ()=>{
    const hex ="0123456789ABCDEF"
    let color = "#"

    for(let i =0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]
    }
    return color;

}
let intervalId;
let startColorChange = ()=>{
    intervalId = setInterval(changeBgColor, 1000)
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
let stopColorChange = ()=>{
    clearInterval(intervalId)
}


start.addEventListener('click',startColorChange)
stop.addEventListener('click', stopColorChange)