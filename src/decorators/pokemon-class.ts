function printToConsole(constructor: Function) {
  console.log(constructor);
}

@printToConsole
export class Pokemon {
  public api: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(public name: string) {}
}
