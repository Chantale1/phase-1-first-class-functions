function receivesAFunction (callback){
callback() ;

}
function myCallBack(){
console.log("Callback function called!");
}

receivesAFunction (myCallBack)

function returnsANamedFunction( ) {
function namedFunction () {
console.log("This is a named function!");
}
return namedFunction;
}
const myNamedFunction = returnsANamedFunction() ;
myNamedFunction () ;

function returnsAnAnonymousFunction () {
return function () {
console.log("before all?");
} ;

}
const myAnonymousFunction= returnsAnAnonymousFunction (); 
myAnonymousFunction();