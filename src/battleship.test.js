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
});

describe('board w/ ships' ,() => {
    player1Board.placeShip(5 ,'[0,0]', 'horizontal');

    test('board recognizes ships are at specified coordinates', () => {
        expect(player1Board.checkGridForShip('[0,0]')).toBe(true);
    }); 

    test('ships cannot overlap', () => {
        expect(player1Board.placeShip(5 ,'[0,0]', 'vertical')).toBe('error');
    });
})

