import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game.js'

const game = new Game()
const saveData = new GameSavingData()
loadGame(saveData);
saveGame(saveData)
game.start()
