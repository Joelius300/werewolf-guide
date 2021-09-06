import characters from '../../../assets/characters.json';

declare type Character = (typeof characters)[0];

export { characters, Character };