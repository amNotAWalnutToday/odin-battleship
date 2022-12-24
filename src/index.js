import './styles.css';
import battleShips from './battleship';
import userInterface from './ui';

const load = () => {
    const intro = userInterface.titleScreen();
    intro.loadTitleScreen();
};

load();