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
        //board objects
        const ships = [];

        const generateGrid = () => {
            const gridMap = [];

            for(let i = 0; i <= 9; i++){
                for(let j = 0; j <= 9; j++){
                    gridMap.push({
                        coordinate: `[${i},${j}]`,
                        shipHere: false,
                        hitHere: false,
                    });
                }
            }

            return gridMap;

        }
        grid = generateGrid();

        //board manipulators
        const setBoard = (coords) => {
            const spots = grid.filter(coord => {
                return coords === coord.coordinate;
            })
            return spots[0].shipHere = true;
        };

        const checkGridForShip = (coords) => {
            const spots = grid.filter(coord => {
                if(coord.shipHere === true && coord.coordinate === coords ) return coord;
            });
            if(spots.length < 1 || spots === undefined) return false;
            return spots[0].shipHere;
        };

        const getDirections = (length, x, y, direction, newCoords = []) => {
            for(let i = 0; i < length; i++) {
                const horizontal = `[${x+i},${y}]`;
                const vertical = `[${x},${y+i}]`;
                const [checkH, checkV] = [
                    checkGridForShip(horizontal),
                    checkGridForShip(vertical),
                ]

                if(direction === 'horizontal') {
                    if(checkH) return 'error';
                    setBoard(horizontal);
                    newCoords.push(horizontal);
                }else if (direction === 'vertical') {
                    if(checkV) return 'error';
                    setBoard(vertical);
                    newCoords.push(vertical);
                }
            }
            return newCoords;
        }

        const placeShip = (length, coords, direction) => {
            const [x, y] = [Number(coords[1]), Number(coords[3])];
            const con =
            (x + length >= 10 && direction === 'horizontal')
            || 
            (y + length >= 10 && direction === 'vertical');
            if(con) return 'error';

            const newCoords = getDirections(length, x, y, direction);
            if (newCoords === 'error') return 'error';
            const newShip = ship(newCoords, length, 0, false);

            ships.push(newShip);
            return newShip;
        }

        return { grid, placeShip, ships, checkGridForShip };
    };

    return {
        ship,
        gameBoard,
    }
})();

export default battleShips;