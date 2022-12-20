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

    test('board logs attacks', () => {
        player1Board.receiveAttack('[4,4]');
        expect(player1Board.attackLog).toContain('[4,4]');
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
        expect(newBoard.receiveAttack('[4,4]')).toBe('game over');
    });
});

describe('player functions', () => {
    const player1 = battleShips.player(1);
    const player2 = battleShips.player(2);
    const newBoard = battleShips.gameBoard();
    newBoard.placeShip(1,'[7,7]','horizontal');

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
        expect(player2.takeTurn('[1,1]', newBoard, player2, player1)).toBe('game over');
    });
});

describe('Ai logic', () => {
    let testBoard = battleShips.gameBoard();
    let testPlayer = battleShips.player(1, false);
    let testAi = battleShips.player(2, true);
    
    beforeEach(() => {
        testBoard = battleShips.gameBoard();
        testPlayer = battleShips.player(1, false);
        testAi = battleShips.player(2, true);
        testBoard.placeShip(1,'[7,7]','horizontal');
    });

    test('ai can take turn', () => {
        testBoard = battleShips.gameBoard();
        testPlayer = battleShips.player(2, false);
        testAi = battleShips.player(1, true);
        expect(testAi.aiTakesTurn(testBoard, testAi, testPlayer)).toBeTruthy();
    });

    test('ai continues to take turns w/o human', () => {
        testPlayer.takeTurn('[0,0]', testBoard, testPlayer, testAi);
        console.log(testBoard.attackLog);
        expect(testBoard.attackLog.length).toBeGreaterThan(1);
    });

    test('ai rerolls attack if spot is already hit', () => {
        const fakeAiTakesTurn = (board, user, target) => {
            const [x, y] = [0,0];
            const coords = `[${x},${y}]`;
            const results =  testAi.takeTurn(coords, board, user, target);
            console.log(results);
            if(!results) user.aiTakesTurn(board,user,target);
            return results;
        }
        testBoard.receiveAttack('[0,0]');
        testAi.isTurn = true;
        fakeAiTakesTurn(testBoard, testAi, testPlayer)
        expect(testBoard.attackLog).not.toStrictEqual(['[0,0]']);
    });
});