import ICharacter from '../../types/character';
import './CharacterItem.scss';

interface CharacterItemProps {
  character: ICharacter;
}

function CharacterItem({ character }: CharacterItemProps) {
  console.log(character);

  return (
    <div className="character">
      <img className="character__image" src={character.imageUrl} alt="Character" />
      <div className="character__info">
        <h2>Name: {character.name}</h2>
        <h2>Films: {character.films.join(', ')}</h2>
        <h2>
          <a href={character.sourceUrl}>Source</a>
        </h2>
        <h2>
          <a href={character.url}>Url</a>
        </h2>
      </div>
    </div>
  );
}

export default CharacterItem;
