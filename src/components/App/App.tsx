import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CharacterItem from '../CharacterItem/CharacterItem';
import CharactersStore from '../../stores/CharactersStore';
import './App.scss'

const App = observer(() => {
  const { characters, isLoading, getAllCharacters } = CharactersStore;

  useEffect(() => {
    getAllCharacters();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className='container'>
      <div className="characters">
        {characters.map((character) => (
          <CharacterItem character={character} />
        ))}
      </div>
    </div>
  );
});

export default App;
