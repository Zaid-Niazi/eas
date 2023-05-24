/**
 For it to be a sucess:
 Never overflow
 either increase container or
 decrease box size

 increase container - define via dom. change the size of total area is
 not evenly divisible by content area
 **/



//DOM SELECTIONS

const container = document.querySelector('.container')
const resetButton = document.querySelector('.reset')
const sixteen = document.querySelector('.sixteen')
const thirtytwo = document.querySelector('.thirtytwo')
const sixtyfour = document.querySelector('.sixtyfour')
const onetwentyeight = document.querySelector('.onetwentyeight')


container.style.height = '960px'
container.style.width = '960px'



//MAIN GRID CODE

function gridMaker(num){
    let limit = num*num
    for(let i=1; i<= limit; i++){

        const box = document.createElement('div');

        let calc = ((Math.sqrt(921600/limit)))

        box.style.height = `${calc-2}px`
        box.style.width = `${calc-2}px`
        box.style.border= '1px solid black'
        box.classList.add('box');
        box.classList.add(`${i}`);
    
        box.addEventListener('mouseover', (e)=> e.target.style.backgroundColor = "black")
        container.appendChild(box)
    
    }
    
    
}




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


//BUTTONS

resetButton.addEventListener('click', reset)
function reset(){
location.reload()

}

