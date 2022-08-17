import { genericFunction, printObject } from "./generics/generics";

// printObject( 123 );
// printObject( new Date() );
// printObject( 'Hello World' );

console.log( genericFunction( 123 ).toFixed(2) );
console.log( genericFunction( new Date() ).toFixed(2) );
