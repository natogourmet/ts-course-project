import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('charmander');
console.log(charmander);

(Pokemon.prototype as any).customName = 'Pikachu';