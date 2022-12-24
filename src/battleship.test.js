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
        player1Board.placePhase[0] = false;
        expect(player1Board.receiveAttack('[8,8]')).toMatch('miss');
    });

    test('board logs attacks', () => {
        player1Board.placePhase[0] = false;
        player1Board.receiveAttack('[4,4]');
        expect(player1Board.attackLog).toContain('[4,4]');
    });

    test('board cannot hit same target multiple times', () => {
        player1Board.placePhase[0] = false;
        expect(player1Board.receiveAttack('[8,8]')).toBeFalsy();
    });
});

describe('board w/ ships' ,() => {

    let testBoard = battleShips.gameBoard();

    beforeEach(() => {
        testBoard = battleShips.gameBoard();  
        testBoard.placeShip(4 ,'[0,0]', 'horizontal');
        testBoard.placePhase[0] = false;
        testBoard.receiveAttack('[1,0]');
        testBoard.receiveAttack('[2,0]');
        testBoard.receiveAttack('[3,0]');
        testBoard.receiveAttack('[4,0]');
        testBoard.placePhase[0] = true;
    });
    
    test('board recognizes ships are at specified coordinates', () => {
        expect(testBoard.checkGridForShip('[0,0]')).toBe(true);
    }); 

    test('ships cannot overlap', () => {
        expect(testBoard.placeShip(5 ,'[0,0]', 'vertical')).toBe('error');
    });

    test('board recognizes that a ship has been hit', () => {
        testBoard.placePhase[0] = false;
        expect(testBoard.receiveAttack('[0,0]')).toMatch('hit');
    });

    test('ship objects take the hit', () => {
        expect(testBoard.ships[0].timesHit).toBeGreaterThan(0);
    });

    test('ship gets destroyed when damage exceeds length', () => {
        testBoard.placePhase[0] = false;
        testBoard.receiveAttack('[0,0]')
        expect(testBoard.ships[0].sunk).toBe(true);
    });

    const newBoard = battleShips.gameBoard();
    test('board knows when all ships have been destroyed', () => {
        expect(newBoard.receiveAttack('[4,4]')).toBe('game over');
    });
});

describe('ship placing limits', () => {
    let testBoard = battleShips.gameBoard();
    let testPlayer = battleShips.player(1, false);
    let testAi = battleShips.player(2, true);
    const placeAllShips = () => {
        testBoard.placeShip(5, '[0,1]', 'horizontal');
        testBoard.placeShip(4, '[0,2]', 'horizontal');
        testBoard.placeShip(3, '[0,3]', 'horizontal');
        testBoard.placeShip(3, '[0,4]', 'horizontal');
        testBoard.placeShip(3, '[0,5]', 'horizontal');
        testBoard.placeShip(3, '[0,6]', 'horizontal');
        testBoard.placeShip(2, '[0,7]', 'horizontal');
        testBoard.placeShip(2, '[0,8]', 'horizontal');
        testBoard.placeShip(2, '[0,9]', 'horizontal');
    };
    
    beforeEach(() => {
        testBoard = battleShips.gameBoard();
        testPlayer = battleShips.player(1, false);
        testAi = battleShips.player(2, true);
    });

    test('board storage for ships have specific numbers', () => {
        expect(testBoard.unplacedShips).toStrictEqual([
            {name: 'carrier', length: 5, number: 1},
            {name: 'battleship', length: 4, number: 1},
            {name: 'submarine', length: 3, number: 4},
            {name: 'patrol boat', length: 2, number: 3}
        ]);
    });

    test('number of ships should be deducted from storage when placed', () => {
        testBoard.placeShip(4, '[0,1]', 'horizontal')
        expect(testBoard.unplacedShips[1].number).toBe(0);
    });

    test('all ships can be removed from storage', () => {
        const totalShipsInStorage = () => {
            const shipNumbers = [
                testBoard.unplacedShips[0].number,
                testBoard.unplacedShips[1].number,
                testBoard.unplacedShips[2].number,
                testBoard.unplacedShips[3].number,
            ];
            return shipNumbers.reduce((num, total) => {
                total += num;
                return total;
            }, 0);
        };

        placeAllShips();
        expect(totalShipsInStorage()).toBe(0);
    });

    test('can only place specified number(1) of carriers', () => {
        testBoard.placeShip(5, '[0,1]', 'horizontal')
        expect(testBoard.placeShip(5, '[0,0]', 'horizontal')).toBeFalsy();
    });

    test('placing phase ends when all ships are placed', () => {
        placeAllShips();
        expect(testBoard.receiveAttack('[0,0]')).toBeTruthy();
    });

    test('cannot place ships after placing phase is over', () => {
        placeAllShips();
        testBoard.unplacedShips[0].number += 1;
        expect(testBoard.placeShip(5, '[0,0]', 'horizontal')).toBeFalsy();
    });

    test('board cannot receive attacks during placing phase', () => {
        testBoard.placeShip(5, '[0,0]', 'vertical');
        expect(testBoard.receiveAttack('[0,0]')).toBeFalsy();
    });
});

describe('player functions', () => {
    const player1 = battleShips.player(1);
    const player2 = battleShips.player(2);
    const newBoard = battleShips.gameBoard();
    newBoard.placeShip(2,'[7,7]','horizontal');
    beforeEach(() => {
        newBoard.placePhase[0] = false;
    });

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

    test('player can only target non-hit squares', () => {
        newBoard.receiveAttack('[9,9]');
        expect(player1.takeTurn('[9,9]', newBoard, player1, player2)).toBeFalsy();
    });

    test('player can no longer take turns after game has ended', () => {
        player1.isTurn = true;
        player1.takeTurn('[7,7]', newBoard, player1, player2);
        player1.isTurn = true;
        player1.takeTurn('[8,7]', newBoard, player1, player2);
        expect(player2.takeTurn('[1,1]', newBoard, player2, player1)).toBe('game over');
    });
});

describe('Ai logic', () => {
    let testBoard = battleShips.gameBoard();
    let otherTestBoard = battleShips.gameBoard();
    let testPlayer = battleShips.player(1, false);
    let testAi = battleShips.player(2, true);
    
    beforeEach(() => {
        testBoard = battleShips.gameBoard();
        otherTestBoard = battleShips.gameBoard();
        testPlayer = battleShips.player(1, false);
        testAi = battleShips.player(2, true);
        testBoard.placeShip(2,'[7,7]','horizontal');
        testBoard.placePhase[0] = false;
    });

    test('ai can take turn', () => {
        testBoard = battleShips.gameBoard();
        testPlayer = battleShips.player(2, false);
        testAi = battleShips.player(1, true);
        expect(testAi.aiTakesTurn(testBoard, testAi, testPlayer)).toBeTruthy();
    });

    test('ai attacks a different board than player', () => {
        testPlayer.takeTurn('[0,0]', testBoard, testPlayer, testAi, otherTestBoard);
        expect(testBoard.attackLog.length).toBe(1);
    });

    test('ai rerolls attack if spot is already hit', () => {
        const fakeAiTakesTurn = (board, user, target) => {
            const [x, y] = [0,0];
            const coords = `[${x},${y}]`;
            const results =  testAi.takeTurn(coords, board, user, target);
            if(!results) user.aiTakesTurn(board,user,target);
            return results;
        }
        testBoard.receiveAttack('[0,0]');
        testAi.isTurn = true;
        fakeAiTakesTurn(testBoard, testAi, testPlayer)
        expect(testBoard.attackLog).not.toStrictEqual(['[0,0]']);
    });

    test('ai can place ships', () => {
        expect(otherTestBoard.aiPlaceShip()).toBeTruthy();
    });

    test('ai board places ships randomly', () => {
        otherTestBoard.placePhase[0] = true;
        otherTestBoard.aiPlaceShip();
        expect(otherTestBoard.ships.length).toBeGreaterThan(8); 
    });
});