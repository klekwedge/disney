import { render } from '@testing-library/react';
import CharacterItem from './CharacterItem';

const mockCharacter = {
  name: 'Luke Skywalker',
  url: 'https://example.com',
  _id: 12121,
  imageUrl: 'https://example.com/luke.jpg',
  sourceUrl: 'https://example.com/luke-source',
  films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
};

test('renders CharacterItem component with character name and image', () => {
  const { getByText, getByAltText } = render(<CharacterItem character={mockCharacter} />);
  const characterNameElement = getByText('Luke Skywalker');
  const characterImageElement = getByAltText('Character');

  expect(characterNameElement).toBeInTheDocument();
  expect(characterImageElement).toBeInTheDocument();
});

test('renders character films when available', () => {
  const { getByText } = render(<CharacterItem character={mockCharacter} />);
  const characterFilmsElement = getByText('Films: A New Hope, The Empire Strikes Back, Return of the Jedi');

  expect(characterFilmsElement).toBeInTheDocument();
});

test('renders "not info" when character films are not available', () => {
  const { getByText } = render(<CharacterItem character={{ ...mockCharacter, films: [] }} />);
  const characterFilmsElement = getByText('Films: not info');

  expect(characterFilmsElement).toBeInTheDocument();
});

test('renders source link with correct URL and text', () => {
  const { getByText } = render(<CharacterItem character={mockCharacter} />);
  const sourceLinkElement = getByText('Source');

  expect(sourceLinkElement).toBeInTheDocument();
  expect(sourceLinkElement.getAttribute('href')).toBe('https://example.com/luke-source');
});
