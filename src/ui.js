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
                btn.style.cssText = 'border: 2px solid black; width: 25px; height: 25px;'
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

        const addEvents = () => {
            document.querySelector('#player-1')
                .addEventListener('click', () => {
                    changeGrid(battleShips.player1, battleShips.board1);
                });
            document.querySelector('#player-2')
                .addEventListener('click', () => {
                    changeGrid(battleShips.player2, battleShips.board2);
                });
        };

        const loadGameScreen = () => {
            setContainer();
            addPlayerIcons();
            addGrid();
            addEvents();
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