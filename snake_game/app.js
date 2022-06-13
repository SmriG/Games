import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from './snake.js'
import {update as upadateFood, draw as drawFood} from './food.js';
import { outsideGrid } from './grid.js'
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById('board');
window.requestAnimationFrame(main)

function main(currentTime) {
    if(gameOver){
        if(confirm("You Lost! Pres OK to Restart")){
            window.location = '/snake_game/'
        }
        return
        
    }
    window.requestAnimationFrame(main);
    const secondsSincelastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSincelastRender < 1 / snakeSpeed) return
    lastRenderTime = currentTime;

    update();
    draw();
}


function update() {
    updateSnake();
    upadateFood();
    checkForDeath()
}

function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkForDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}