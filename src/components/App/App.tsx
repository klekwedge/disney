import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import CharacterItem from '../CharacterItem/CharacterItem';
import CharactersStore from '../../stores/CharactersStore';
import './App.scss'
import { Container, Flex } from '@mantine/core';

const App = observer(() => {
  const { characters, isLoading, getAllCharacters } = CharactersStore;

  useEffect(() => {
    getAllCharacters();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container maw='1200px' p='20px 10px'>
      <Flex gap='20px' wrap='wrap' align='flex-end' justify='center'>
        {characters.map((character) => (
          <CharacterItem character={character} />
        ))}
      </Flex>
    </Container>
  );
});

export default App;
