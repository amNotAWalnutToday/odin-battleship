/* eslint-disable */
import battleShips from './battleship';
const player1Board = battleShips.gameBoard();

test('creates correct size grid', () => {
    expect(player1Board.grid.length).toBe(100);
});

test('coordinates are in correct spots', () => {
    expect(player1Board.grid[5].coordinate).toMatch('[0,5]');
});

describe('board w/o ships', () => {
    test('ship gets placed vertically', () => {
        const newBoard = battleShips.gameBoard();
        expect(newBoard.placeShip(4,'[0,0]','vertical').coords).toStrictEqual(['[0,0]','[0,1]','[0,2]','[0,3]']);
    });

    test('ship gets placed horizontally', () => {
        expect(player1Board.placeShip(2,'[4,4]','horizontal').coords).toStrictEqual(["[4,4]","[5,4]"]);
    });

    test('ship cannot be placed off board', () => {
        expect(player1Board.placeShip(5,'[0,9]','vertical')).toBe('error');
    });

    test('board recognizes that it has been hit', () => {
        expect(player1Board.receiveAttack('[8,8]')).toMatch('miss');
    });

    test('board cannot hit same target multiple times', () => {
        expect(player1Board.receiveAttack('[8,8]')).toBeFalsy();
    });
});

describe('board w/ ships' ,() => {
    player1Board.placeShip(5 ,'[0,0]', 'horizontal');
    player1Board.receiveAttack('[1,0]');
    player1Board.receiveAttack('[2,0]');
    player1Board.receiveAttack('[3,0]');
    player1Board.receiveAttack('[4,0]');
    
    test('board recognizes ships are at specified coordinates', () => {
        expect(player1Board.checkGridForShip('[0,0]')).toBe(true);
    }); 

    test('ships cannot overlap', () => {
        expect(player1Board.placeShip(5 ,'[0,0]', 'vertical')).toBe('error');
    });

    test('board recognizes that a ship has been hit', () => {
        expect(player1Board.receiveAttack('[0,0]')).toMatch('hit');
    });

    test('ship objects take the hit', () => {
        expect(player1Board.ships[0].timesHit).toBeGreaterThan(0);
    });

    test('ship gets destroyed when damage exceeds length', () => {
        expect(player1Board.ships[0].sunk).toBe(true);
    });

    const newBoard = battleShips.gameBoard();
    newBoard.placeShip(1,'[0,0]','horizontal');
    newBoard.receiveAttack('[0,0]');
    test('board knows when all ships have been destroyed', () => {
        expect(newBoard.lose()).toBe(true);
    });
});

describe('player functions', () => {
    const player1 = battleShips.player(1);
    const player2 = battleShips.player(2);
    const newBoard = battleShips.gameBoard();

    test('player 1 should take there turn first', () => {
        expect(player1.isTurn).toBe(true);
    });

    test('player can target a coordinate to attack', () => {
        expect(player1.takeTurn('[0,0]', newBoard, player1, player2)).toMatch('miss at [0,0]');
    });

    test('turn changes when player chooses enemy spot', () => {
        expect(player2.isTurn).toBe(true);
    });

    test('can cycle turns', () => {
        player2.takeTurn('[1,0]', newBoard, player2, player1);
        expect(player1.isTurn).toBe(true);
    });

    test('only takes turn at appropriate time', () => {
        player2.takeTurn('[3,0]', newBoard, player2, player1);
        expect(player2.takeTurn('[2,0]', newBoard, player2, player1)).toBeFalsy();
    });
});