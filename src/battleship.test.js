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
});
