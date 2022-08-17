import { genericFunction, printObject, genericArrowFunction } from './generics/generics';

// printObject( 123 );
// printObject( new Date() );
// printObject( 'Hello World' );

console.log( genericArrowFunction( 123 ).toFixed(2) );
console.log( genericArrowFunction( new Date() ).getDate() );
console.log( genericArrowFunction( 'Hello World' ).toUpperCase() );
