import './styles.css';
import battleShips from './battleship';

const player1 = battleShips.player(1, true);
const player2 = battleShips.player(2, true);
const board = battleShips.gameBoard();
board.placeShip(5 ,'[0,0]', 'horizontal');

const playGame = () => {
    player1.takeTurn('[5,4]', board, player1, player2);
};
playGame();
console.log(board.attackLog);
console.log(board);