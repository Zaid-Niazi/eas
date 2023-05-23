const container = document.querySelector('.container')

for(let i=1; i<=16; i++){

    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover', (e)=> console.log(e.target.value))
    container.appendChild(box)

}

