import './styles.css';
import battleShips from './battleship';
import userInterface from './ui';

const player1 = battleShips.player(1, true);
const player2 = battleShips.player(2, true);
const p1Board = battleShips.gameBoard();
const p2Board = battleShips.gameBoard();
const intro = userInterface.titleScreen();
const game = userInterface.gameScreen();
p1Board.placeShip(5 ,'[0,0]', 'horizontal');

const playGame = () => {
    game.loadGameScreen();
    player1.takeTurn('[5,4]', p1Board, player1, player2);
};
playGame();
console.log(p1Board.attackLog);
console.log(p1Board);