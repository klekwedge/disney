import { Anchor, Badge, Button, Card, Flex, Group, Image, Space, Text } from '@mantine/core';
import ICharacter from '../../types/character';
import './CharacterItem.scss';

interface CharacterItemProps {
  character: ICharacter;
}

function CharacterItem({ character }: CharacterItemProps) {
  console.log(character);

  return (
    <Card className='character' maw="250px" shadow="sm" padding="lg" radius="md" withBorder w="100%">
      <Card.Section>
        <Image src={character.imageUrl} alt="Character" height="160px" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>Name: {character.name}</Text>
        <Flex gap="5px" justify="center" align="flex-start" wrap="wrap">
          <Badge>
            <Anchor href={character.sourceUrl} target="_blank" variant="light" color="blue">
              Source
            </Anchor>
          </Badge>
          <Badge>
            <Anchor href={character.url} target="_blank" variant="light" color="blue">
              Url
            </Anchor>
          </Badge>
        </Flex>
      </Group>

      <Text size="sm" color="dimmed">
        Films: {character.films.length ? character.films.join(', ') : 'not info'}
      </Text>
    </Card>
  );
}

export default CharacterItem;
