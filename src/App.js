import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import CreateGameButton from "./components/CreateGameButton";
import GameCounter from "./components/GameCounter";
import GameItem from "./components/GameItem";
import GameList from "./components/GameList";
import GameSearch from "./components/GameSearch";
import React from 'react';

// Creacion de un array
const defaultGames = [
  { text: 'Black Mesa', completed: false },
  { text: 'Minecraft', completed: false },
  { text: 'Dead Reising', completed: true },
  { text: 'Sekiro', completed: true },
  { text: 'Kenshi', completed: false },
  { text: 'Patapon 3', completed: false },
]


function App() {

  // const localStorageGames = localStorage.getItem('Games');
  // let parsedGames;

  // if(!localStorageGames){
  //   localStorage.setItem('Games', JSON.stringify(defaultGames))
  //   parsedGames = []
  // }else{
  //   parsedGames = JSON.parse(localStorageGames)
  // }

  //Creacion de un estado para el array
  // const [games, setGames] = React.useState(parsedGames);
  const [games, setGames] = React.useState(defaultGames);
  const [searchValue, setSearchValue] = React.useState('');

  //Estados derivados
  const gamesCompleted = games.filter((game) => game.completed).length;
  const totalGames = games.length;

  //estado derivado para las busquedas
  const searchedGames = games.filter((game) =>
    game.text.includes(searchValue)
)

  // const saveGames = (newGames) =>{
  //   localStorage.setItem('Games', JSON.stringify(newGames));
  //   setGames(newGames)
  // }

  const completeGame = (text) => {
    const newGames = [...games];
    const gameIndex = newGames.findIndex((game) => game.text == text)
    newGames[gameIndex].completed = true;
    // saveGames(newGames);
    setGames(newGames)
  }

  const deleteGame = (text) => {
    const newGames = [...games]
    const gameIndex = newGames.findIndex((game) => game.text == text)
    newGames.splice(gameIndex, 1);
    // saveGames(newGames)
    setGames(newGames)
  }

  return (
    <div className="App">

      <GameCounter completed = {gamesCompleted} total={totalGames}/>

      <GameSearch
        searchValue = {searchValue}
        setSearchValue={setSearchValue}
      />

      <GameList>
        { searchedGames.map((game) => (
            <GameItem
            text={game.text}
            completed={game.completed}
            onComplete={() => completeGame(game.text)}
            onDelete = {() => deleteGame(game.text)}
            />
        ) ) }

      </GameList>

      <CreateGameButton/>
    </div>
  );
}

export default App;
