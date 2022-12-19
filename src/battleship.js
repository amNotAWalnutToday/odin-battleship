const battleShips = (() => {
    //Factories
    const ship = (coords, length, timesHit, sunk, hit, isSunk) => {
        hit = () => {
            timesHit++;
        }

        isSunk = () => {
            if (timesHit >= length) {
                sunk = true;
            }
        }

        return { coords, length, timesHit, sunk, hit, isSunk }
    };

    const gameBoard = (grid) => {
        const ships = [];

        const generateGrid = () => {
            const gridMap = [];

            for(let i = 0; i <= 9; i++){
                for(let j = 0; j <= 9; j++){
                    gridMap.push(`[${i},${j}]`);
                }
            }

            return gridMap;
        }

        const placeShip = (length, coords, direction) => {
            const x = Number(coords[1]);
            const y = Number(coords[3]);
            const con = x + length >= 9 || y + length >= 9
            if(con) return 'error';

            const newCoords = [];
            const newShip = ship('', length, 0, false);
            if(direction === 'horizontal'){
                for(let i = 0; i < length; i++){
                    newCoords.push(`[${x+i},${y}]`);
                }
            }else if (direction === 'vertical'){
                for(let i = 0; i < length; i++){
                    newCoords.push(`[${x},${y+i}]`);
                }
            }

            newShip.coords = newCoords;
            ships.push(newShip);
            return newShip
        }

        grid = generateGrid();

        return { grid, placeShip, ships };
    };

    const player1Board = gameBoard();
    player1Board.placeShip(4,'[0,0]','vertical')
    player1Board.placeShip(4,'[0,0]','vertical')

    return {
        ship,
        player1Board,
    }
})();


console.log(battleShips.player1Board.ships);

export default battleShips;