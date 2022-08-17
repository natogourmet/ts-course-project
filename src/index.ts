import { genericFunction, printObject, genericArrowFunction } from './generics/generics';
import { Hero } from './interfaces/Hero';
import { Villain } from './interfaces/villain';

// printObject( 123 );
// printObject( new Date() );
// printObject( 'Hello World' );

console.log( genericArrowFunction( 123 ).toFixed(2) );
console.log( genericArrowFunction( new Date() ).getDate() );
console.log( genericArrowFunction( 'Hello World' ).toUpperCase() );

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 100,
}

console.log( genericArrowFunction<Hero>( deadpool ).realName );
console.log( genericArrowFunction<Villain>( deadpool ).dangerLevel );
