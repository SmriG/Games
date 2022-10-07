export default class AudioController {
  constructor() {
    this.paddleHitSound = new Audio("Assets/ping-pong-paddle-hitting-ball.mp3");
    this.failSound = new Audio("Assets/fail.mp3");
  }
  hit() {
    this.paddleHitSound.play();
  }
  fail(){
    this.failSound.play();
  }
}
