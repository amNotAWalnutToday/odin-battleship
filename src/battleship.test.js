import battleShips from './battleship';

test('creates correct size grid', () => {
    expect(battleShips.player1Board.grid.length).toBe(100);
});

test('coordinates are in correct spots', () => {
    expect(battleShips.player1Board.grid[5]).toMatch('[0,5]');
});

test('ship gets placed horizontally', () => {
    expect(battleShips.player1Board.placeShip(2,'[4,4]','horizontal').coords).toStrictEqual(["[4,4]","[5,4]"]);
});

test('ship gets placed vertically', () => {
    expect(battleShips.player1Board.placeShip(4,'[0,0]','vertical').coords).toStrictEqual(['[0,0]','[0,1]','[0,2]','[0,3]']);
});

test('ship cannot be placed off board', () => {
    expect(battleShips.player1Board.placeShip(5,'[9,0]','vertical')).toBe('error');
});