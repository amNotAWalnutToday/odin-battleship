import battleShips from "./battleship";

const userInterface = (() => {
    const titleScreen = () => {
        const container = document.querySelector('#container');
        
        const setContainer = () => {
            container.setAttribute('class', 'title-screen');
        }

        const addTitle = () => {
            const title = document.createElement('h1');
            title.textContent = 'BattleShips';
            container.appendChild(title);
        }

        const addButtons = () => { 
            const pvpBtn = document.createElement('button');
            const pvmBtn = document.createElement('button');
            pvpBtn.textContent = 'Vs Player';
            pvmBtn.textContent = 'Vs Computer';
            container.appendChild(pvmBtn);
            container.appendChild(pvpBtn); 
        }

        const addEvents = () => {
            //add events to load specific games
        };

        const loadTitleScreen = () => { 
            setContainer();
            addTitle();
            addButtons();
        }

        return { loadTitleScreen, };
    };

    const gameScreen = () => {
        const container = document.querySelector('#container');

        const setContainer = () => {
            container.setAttribute('class','gameScreen');
        };

        // player icon buttons //
        const addPlayerIcons = () => {
            const player1Btn = document.createElement('button');
            const player2Btn = document.createElement('button');
            player1Btn.setAttribute('id', 'player-1');
            player2Btn.setAttribute('id', 'player-2');
            player1Btn.textContent = 'Player 1';
            player2Btn.textContent = 'Player 2';
            container.appendChild(player1Btn);
            container.appendChild(player2Btn)
        };

        const addIconEvents = () => {
            document.querySelector('#player-1')
                .addEventListener('click', () => {
                    changeGrid(battleShips.player1, battleShips.board1);
                });
            document.querySelector('#player-2')
                .addEventListener('click', () => {
                    changeGrid(battleShips.player2, battleShips.board2);
                });
        };
        // end of player icon buttons //

        // grid display //
        const addGrid = () => {
            const grid = document.createElement('div');
            grid.setAttribute('id', 'grid');
            container.appendChild(grid);
        }

        const setGridToPlayer = (player, board) => {
            const grid = document.querySelector('#grid');
            const playerNumber = player.playerNumber;
            const coords = board.grid;
            coords.forEach(coord => {
                const [x,y] = [coord.coordinate[1], coord.coordinate[3]];
                const btn = document.createElement('button');
                btn.setAttribute('id', `grid-${playerNumber}-${x},${y}`);
                btn.classList.add(`p${playerNumber}`); 
                grid.appendChild(btn);
            });
        };

        const removeGrid = () => {
            const grid = document.querySelector('#grid');
            while(grid.firstChild){
                grid.removeChild(grid.firstChild);
            }
        }

        const changeGrid = (player, board) => {
            removeGrid();
            setGridToPlayer(player, board);
        }
        // end of grid display //

        // place ship buttons //
        const addPlaceShipButton = () => {
            const btnContainer = document.createElement('div');
            btnContainer.setAttribute('id', 'ship-menu');
            const placeShipBtn = document.createElement('button');
            placeShipBtn.textContent = '↓ Place Ships ↓';
            placeShipBtn.setAttribute('id', 'place-ship');
            container.appendChild(btnContainer);
            btnContainer.appendChild(placeShipBtn);
        }

        const openPlaceShipMenu = () => {
            const btnContainer = document.querySelector('#ship-menu');
            const carrier = document.createElement('button');
            carrier.textContent = 'carrier';
            const battleship = document.createElement('button');
            battleship.textContent = 'battleship';
            const cruiser = document.createElement('button');
            cruiser.textContent = 'cruiser'
            const submarine = document.createElement('button');
            submarine.textContent = 'submarine';
            const patrolBoat = document.createElement('button');
            patrolBoat.textContent = 'patrol boat';
            btnContainer.append(carrier, battleship, cruiser, submarine, patrolBoat);
            
            addClosePlaceShipEvent();
        }

        const closePlaceShipMenu = () => {
            const btnContainer = document.querySelector('#ship-menu');

            while(btnContainer.children.length > 1){
                btnContainer.removeChild(btnContainer.lastChild);
            }

            addOpenPlaceShipEvent();
        }

        const addOpenPlaceShipEvent = () => {
            document.querySelector('#place-ship')
                .addEventListener('click', openPlaceShipMenu);
            document.querySelector('#place-ship')
                .removeEventListener('click', closePlaceShipMenu);
            
        }

        const addClosePlaceShipEvent = () => {
            document.querySelector('#place-ship')
                .addEventListener('click', closePlaceShipMenu);
            document.querySelector('#place-ship')
                .removeEventListener('click', openPlaceShipMenu);
        }
        // end of place ship buttons //
        const loadGameScreen = () => {
            setContainer();
            addPlayerIcons();
            addGrid();
            addIconEvents();
            addPlaceShipButton();
            addOpenPlaceShipEvent();
            setGridToPlayer(battleShips.player1, battleShips.board1);
        };

        return { loadGameScreen, }
    };
    
    return {
        titleScreen,
        gameScreen,
    }
})();

export default userInterface;