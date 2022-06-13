import {onSnake, expandSnake} from './snake.js'
import {randomGridPostion } from './grid.js'
let apple = getRandomApplePosition();
const EXPANSION_RATE = 1;
export function update() {
    if(onSnake(apple)){
        expandSnake(EXPANSION_RATE)
        apple = getRandomApplePosition();
    }
}

export function draw(gameBoard) {
        const appleElement = document.createElement('div');
        appleElement.style.gridRowStart = apple.y;
        appleElement.style.gridColumnStart = apple.x;
        appleElement.classList.add('apple');
        gameBoard.appendChild(appleElement);

}

function getRandomApplePosition(){
    let newFoodPosition;
    while(newFoodPosition==null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPostion()
    }
    return newFoodPosition
}