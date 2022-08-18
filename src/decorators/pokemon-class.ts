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
    };
  };
}

function readonly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        // console.log(this);
        return 'Nato';
      },
      set(this: any, value: string) {
        // console.log(this);
        Object.defineProperty(this, propertyKey, {
          value: value,
          writable: !isWritable,
        })
      },
    };
    return descriptor;
  };
}

@blockPrototype
@conditionalPrint(false)
export class Pokemon {
  @readonly(true)
  public api: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDB(id: number) {
    console.log('Saving ' + id + ' to DB...');
  }
}
