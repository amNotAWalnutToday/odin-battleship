import './styles.css';
import battleShips from './battleship';
import userInterface from './ui';

const player1 = battleShips.player(1, true);
const player2 = battleShips.player(2, true);
const Board1 = battleShips.gameBoard();
const Board2 = battleShips.gameBoard();
const intro = userInterface.titleScreen();
const game = userInterface.gameScreen();

const placeAllShips = (p1Board) => {
    p1Board.placeShip(5, '[0,1]', 'horizontal');
    p1Board.placeShip(4, '[0,2]', 'horizontal');
    p1Board.placeShip(3, '[0,3]', 'horizontal');
    p1Board.placeShip(3, '[0,4]', 'horizontal');
    p1Board.placeShip(3, '[0,5]', 'horizontal');
    p1Board.placeShip(3, '[0,6]', 'horizontal');
    p1Board.placeShip(2, '[0,7]', 'horizontal');
    p1Board.placeShip(2, '[0,8]', 'horizontal');
    p1Board.placeShip(2, '[0,9]', 'horizontal');
};



const playGame = () => {
    game.loadGameScreen();
    placeAllShips(Board1);
    placeAllShips(Board2);
    player1.takeTurn('[5,4]', Board2, player1, player2, Board1);
};
playGame();
console.log(Board1.attackLog);
console.log(Board2.attackLog);