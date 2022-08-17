function printToConsole(constructor: Function) {
  console.log(constructor);
}

const conditionalPrint = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const blockPrototype = (constructor: Function) => {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

function CheckValidPokemonId() {
  return function (
    target: any,
    porpertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = (pokemonId: number) => {
      if (pokemonId < 1 || pokemonId > 151) {
        throw new Error('Invalid pokemon id');
      }
      return originalMethod(pokemonId);
    }
  };
}

@blockPrototype
@conditionalPrint(true)
export class Pokemon {
  public api: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB( id: number ) {
    console.log('Saving ' + id + ' to DB...');
  }
}
