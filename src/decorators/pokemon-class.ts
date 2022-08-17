function printToConsole(constructor: Function) {
  console.log(constructor);
}

const conditionalPrint = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
}

@conditionalPrint()
export class Pokemon {
  public api: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(public name: string) {}
}
