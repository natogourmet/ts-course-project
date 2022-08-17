import { getPokemon } from './generics/get-pokemon';

getPokemon(4)
  .then( res => console.log(res.sprites.front_default) )
  .catch(console.warn)
  .finally(() => console.log('Finally'));
