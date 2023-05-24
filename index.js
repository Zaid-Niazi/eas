
//DOM SELECTIONS
const main = document.querySelector('.main')
const container = document.querySelector('.container')
const resetButton = document.querySelector('.reset')
const sixteen = document.querySelector('.sixteen')
const thirtytwo = document.querySelector('.thirtytwo')
const sixtyfour = document.querySelector('.sixtyfour')
const onetwentyeight = document.querySelector('.onetwentyeight')
const colorPicker = document.getElementById('colorPicker')
let color = 'black'
colorPicker.addEventListener('input',(x) => color = colorPicker.value)

let containerSize = 960

container.style.height = `${containerSize}px`
container.style.width = `${containerSize}px`



//MAIN GRID CODE

function gridMaker(num){
    container.innerHTML=''
    let limit = num*num
    for(let i=1; i<= limit; i++){

        const box = document.createElement('div');

        let calc = ((Math.sqrt((containerSize**2)/limit)))

        box.style.height = `${calc-2}px`
        box.style.width = `${calc-2}px`
        box.style.border= '1px solid black'
        box.classList.add('box');
        box.classList.add(`${i}`);
    
        box.addEventListener('mouseover', (e)=> e.target.style.backgroundColor = `${color}`)
        container.appendChild(box)
    
    }
    
    
}

// Options

sixteen.addEventListener('click', numOfSquares)
thirtytwo.addEventListener('click', numOfSquares)
sixtyfour.addEventListener('click', numOfSquares)
onetwentyeight.addEventListener('click', numOfSquares)

function numOfSquares(e){
    let num;

if(e.target.className === 'sixteen'){
     num = 16
}
else if(e.target.className === 'thirtytwo'){
     num = 32
}
else if(e.target.className === 'sixtyfour'){
     num = 64
}
else if(e.target.className === 'onetwentyeight'){
    num = 128
}
gridMaker(num)
}



//Reset

resetButton.addEventListener('click', reset)
function reset(){
container.innerHTML=''
}

