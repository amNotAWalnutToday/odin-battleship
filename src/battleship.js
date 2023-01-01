const battleShips = (() => {
    //Factories
    const ship = (coords, length, timesHit, sunk) => {
        const hit = (target) => {
            target.timesHit++;
        }

        const isSunk = (target) => {
            if (target.timesHit >= target.length) {
                target.sunk = true;
            }
        };

        return { coords, length, timesHit, sunk, hit ,isSunk, }
    };

    const gameBoard = (grid, isAi = false) => {
        //board objects
        const ships = [];
        const unplacedShips = [
            {name: 'carrier', length: 5, number: 1},
            {name: 'battleship', length: 4, number: 1},
            {name: 'submarine', length: 3, number: 4},
            {name: 'patrol boat', length: 2, number: 3}
        ];
        const attackLog = [];
        const placePhase = [true];

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
        };
        grid = generateGrid();

        //board manipulators
        const setBoard = (coords, prop) => {
            const spots = grid.filter(coord => {
                return coords === coord.coordinate;
            })
            if(prop === 'shipHere') return spots[0].shipHere = true;
            else return spots[0].hitHere = true;
        };

        const removeShipfromStorage = (length) => {
            switch(length){
                case 5: unplacedShips[0].number--
                    break;
                case 4: unplacedShips[1].number--
                    break; 
                case 3: unplacedShips[2].number--
                    break;
                case 2: unplacedShips[3].number--
                    break;
            }
        };
        // grid iterators //
        const checkGridForShip = (coords) => {
            const spots = grid.filter(coord => {
                if(coord.shipHere && coord.coordinate === coords ) return coord;
            });
            if(spots.length < 1 || !spots) return false;
            return spots[0].shipHere;
        };

        const checkGridForHit = (coords) => {
            const spots = grid.filter(coord => {
                if(coord.hitHere && coord.coordinate === coords) return coord;
            });
            if(spots.length < 1 || !spots) return false;
            return spots[0].hitHere;
        };

        const checkStorageForShip = (length) => {
            const availableShip = []
            unplacedShips.forEach(ship => {
                if(length === ship.length && ship.number > 0) availableShip.push(ship);
            });
            if(availableShip.length > 0) return true;
            else return false;
        };

        const checkNumOfSunkShips = (sunkShips = []) => {
            ships.forEach(ship => {
                if(ship.sunk) sunkShips.push(ship);
            });
            return sunkShips.length;
        }

        const getDirections = (length, x, y, direction) => {
            let [checkH, checkV] = [false, false]
            const newCoords = [];

            for(let i = 0; i < length; i++){
                const horizontal = `[${x+i},${y}]`;
                if(checkH) break;
                checkH = checkGridForShip(horizontal)
            }

            for(let i = 0; i < length; i++){
                const vertical = `[${x},${y+i}]`;
                if(checkV) break;
                checkV = checkGridForShip(vertical)
            }

            for(let i = 0; i < length; i++) {
                const horizontal = `[${x+i},${y}]`;
                const vertical = `[${x},${y+i}]`;

                if(direction === 'horizontal') {
                    if(checkH) return 'error';
                    setBoard(horizontal, 'shipHere');
                    newCoords.push(horizontal);
                }else if (direction === 'vertical') {
                    if(checkV) return 'error';
                    setBoard(vertical, 'shipHere');
                    newCoords.push(vertical);
                }
            }
            return newCoords;
        };

        // game functions //
        const changePhase = () => {
            let end = false;
            const totalShipsInStorage = [
                checkStorageForShip(5),
                checkStorageForShip(4),
                checkStorageForShip(3),
                checkStorageForShip(2)
            ];

            if(totalShipsInStorage.every(ship => !ship)) end = true;
            if(end){    
                placePhase[0] = false;
                return 'end of place phase';
            }
            return 'continue placing';
        };

        const placeShip = (length, coords, direction) => {
            if(!checkStorageForShip(length) || !placePhase[0]) return; //TBA
            const [x, y] = [Number(coords[1]), Number(coords[3])];
            const con =
            (x + length >= 11 && direction === 'horizontal')
            || 
            (y + length >= 11 && direction === 'vertical');
            if(con) return 'error';

            const newCoords = getDirections(length, x, y, direction);
            if (newCoords === 'error') return 'error';
            const newShip = ship(newCoords, length, 0, false);

            removeShipfromStorage(length);
            changePhase();
            ships.push(newShip);
            return newShip;
        };

        const aiPlaceShip = () => {
            let shipDirection;
            const [check5, check4, check3, check2] = [
                checkStorageForShip(5),
                checkStorageForShip(4),
                checkStorageForShip(3),
                checkStorageForShip(2)
            ]
            const [x,y, dirDec] = [
                Math.floor(Math.random() * 9.9),
                Math.floor(Math.random() * 9.9),
                Math.random(),
            ]
            if(dirDec > 0.49) shipDirection = 'vertical'
            else shipDirection = 'horizontal';
            if(check5){
                placeShip(5, `[${x},${y}]`, shipDirection);
            }else if(check4){
                placeShip(4, `[${x},${y}]`, shipDirection);
            }else if(check3){
                placeShip(3, `[${x},${y}]`, shipDirection);
            }else if(check2){
                placeShip(2, `[${x},${y}]`, shipDirection);
            }
            if(check5 || check4 || check3 || check2){
                return aiPlaceShip();
            }else {
                return 'placed all ships';
            }
        };

        const receiveAttack = (coords) => {
            if(lose()) return 'game over';
            if(checkGridForHit(coords) || placePhase[0]) return;
            setBoard(coords, 'hitHere');      
            attackLog.push(coords);
            if (!checkGridForShip(coords)) return 'miss';
            let thisShip;
            ships.forEach(ship => {
                for(let i = 0; i < ship.coords.length; i++){
                    if(coords === ship.coords[i]) thisShip = ship;
                }
            });
            thisShip.hit(thisShip);
            thisShip.isSunk(thisShip);
            return 'hit';
        };

        const lose = () => {
            const comparison = [];
            ships.forEach(ship => {
                if(ship.sunk) comparison.push(ship);
            });
            return comparison.length >= ships.length;
        };

        return {
            isAi, 
            grid,
            placeShip,
            aiPlaceShip,
            ships,
            unplacedShips,
            attackLog,
            checkGridForShip,
            checkGridForHit,
            checkNumOfSunkShips,
            receiveAttack,
            //remove below
            placePhase,
            lose,
        };
    };

    const player = (playerNumber, isAi = false) => {
        const firstTurn = (() => {
            if(playerNumber === 1) return true;
            else return false;
        });

        let isTurn = firstTurn(); 

        const takeTurn = (coords, board, user, target, targetBoard) => {
            if(!user.isTurn || board.checkGridForHit(coords)) return;
            const results = board.receiveAttack(coords);
            if(results === 'game over') return 'game over';
            user.isTurn = false;
            target.isTurn = true;
            if(target.isAi) aiTakesTurn(targetBoard, target, user, board);
            return `${results} at ${coords}`;
        };

        const aiTakesTurn = (board, user, target, targetBoard) => {
            const coords = aiChooseCoords(board);
            const results = takeTurn(coords, board, user, target, targetBoard);
            if(!results) return aiTakesTurn(board,user,target, targetBoard)
            else return results;
        };

        const aiChooseCoords = (board) => {
            const checkLastHit = aiChooseLastHit(board);
            const coords = aiChooseDirection(board, checkLastHit);

            if(checkLastHit && board.checkGridForShip(checkLastHit) && coords) return coords;
            else {
                const x = Math.floor(Math.random() * 9.9);
                const y = Math.floor(Math.random() * 9.9);
                return `[${x},${y}]`;
            }
        };

        const aiChooseLastHit = (board) => {
            const hits = [];
            board.attackLog.forEach(coord => {
                if(board.checkGridForShip(coord)) hits.unshift(coord);
            });
            if(hits.length < 1) return;

            const validHits = [];
            hits.forEach(hit => {
                if(aiChooseDirection(board, hit)) validHits.unshift(hit);
            });
            if(validHits.length < 1) return;
            return validHits[0];
        };

        const aiChooseDirection = (board, lastHit) => {
            if(!lastHit) return;
            let dir; 
            const up = Number(lastHit[3]) + 1;
            const down = Number(lastHit[3]) - 1;
            const left = Number(lastHit[1]) - 1;
            const right = Number(lastHit[1]) + 1;
            const [checkUp, checkDown, checkLeft, checkRight] = [
                board.checkGridForHit(`[${lastHit[1]},${up}]`),
                board.checkGridForHit(`[${lastHit[1]},${down}]`),
                board.checkGridForHit(`[${left},${lastHit[3]}]`),
                board.checkGridForHit(`[${right},${lastHit[3]}]`),
            ];

            if(!checkRight){
                dir = `[${right},${lastHit[3]}]`;
            }else if(!checkUp){
                dir = `[${lastHit[1]},${up}]`;
            }else if(!checkLeft){
                dir = `[${left},${lastHit[3]}]`;
            }else if(!checkDown){
                dir = `[${lastHit[1]},${down}]`;
            }else return;

            if(!validateCoords(Number(dir[1]),Number(dir[3]))) return;
            else return dir;
        };

        const validateCoords = (x,y) => {
            if(x > 9 || x < 0 || isNaN(x)) return;
            else if(y > 9 || y < 0 || isNaN(y)) return;
            else return true;
        }

        return { playerNumber, takeTurn, aiTakesTurn, isTurn, isAi, };
    }

    return {
        ship,
        gameBoard,
        player,
    };
})();

export default battleShips;