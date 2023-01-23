let color = 'black'
let click = true;
const container = document.querySelector('.container');

const resetButton = document.querySelector('.etch'); // Reset Button code

// The createGrid function creates the size/dimension of grid-size needed
const createGrid = (amtOfGrids) => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    for(let i=0; i < amtOfGrids; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for(let j=0; j < amtOfGrids; j++){
            const widthAndheight = 200 / amtOfGrids;
            const gridBox = document.createElement('div');
            gridBox.classList.add('grid-box');
            gridBox.style.width = `${widthAndheight}px`;
            gridBox.style.height = `${widthAndheight}px`;
            //Adding mouseenter EventListener to change Background color
            gridBox.addEventListener('mouseenter', colorSquare);
            row.appendChild(gridBox);
        }
        wrapper.appendChild(row);
    }
    container.appendChild(wrapper);
}

function colorSquare() {
    if(click){
        if(color === 'random'){
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        }
        else{
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;
}

// This EventListener Resets the grid-size depending on the input(dimension) of the user 
resetButton.addEventListener('click', () =>{
    let userSize = Number(prompt('What dimension do you want for the new grid'));
    while(userSize > 100){
        userSize = Number(prompt('Enter a number less than 100'));
    }
    const wrapper = document.querySelector('.wrapper');
    if(!wrapper){
        createGrid(userSize);
    }
    else{
        wrapper.remove();
        createGrid(userSize);
    }
});

document.querySelector('body').addEventListener('click', () => {
    click = !click;
});

function resetBoard(){
    const wrapper = document.querySelector('.wrapper');
    if(!wrapper){
        createGrid(userSize);
    }
    else{
        wrapper.remove();
        createGrid(userSize);
    }
}