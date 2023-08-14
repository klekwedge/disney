import { Anchor, Badge, Button, Card, Flex, Group, Image, Space, Text } from '@mantine/core';
import ICharacter from '../../types/character';
import './CharacterItem.scss';

interface CharacterItemProps {
  character: ICharacter;
}

function CharacterItem({ character }: CharacterItemProps) {
  console.log(character);

  return (
      <Card maw='250px' shadow="sm" padding="lg" radius="md" withBorder w="100%">
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height="160px"
            alt="Norway"
          />
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
          Films: {character.films.join(', ')}
        </Text>

      </Card>
  );
}

export default CharacterItem;
