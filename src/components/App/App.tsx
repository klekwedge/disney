/* eslint-disable no-underscore-dangle */
import { useEffect, useState } from 'react';
import { Center, Container, Flex, Pagination } from '@mantine/core';
import { observer } from 'mobx-react-lite';
import CharacterItem from '../CharacterItem/CharacterItem';
import CharactersStore from '../../stores/CharactersStore';

const App = observer(() => {
  const [activePage, setPage] = useState(1);
  const { characters, isLoading, getAllCharacters } = CharactersStore;

  useEffect(() => {
    getAllCharacters(activePage);
  }, [activePage]);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <Container maw="1200px" p="20px 10px">
      <Flex gap="20px" wrap="wrap" align="flex-end" justify="center" mb="30px">
        {characters.map((character) => (
          <CharacterItem key={character._id} character={character} />
        ))}
      </Flex>
      <Center mx="auto">
        <Pagination total={149} value={activePage} onChange={setPage} size="lg" radius="xl" />
      </Center>
    </Container>
  );
});

export default App;
