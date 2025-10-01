// Chapter 3
// optional arguments
/*
the extra argument will be ignored but if there is an 
argument missing it will have a value undefined
if u write an = operator after a parameter, followed by an expression,
the value of that expression will replace the argument when not given
*/
// closure
/*
- refere a specific instant of a local binding in an enclosing scope
- a function that refers binding from local scope around it
*/
// recursion
/*
- a function that calls itself
- makes the code slower
- comparar a dif the function q eles dao
*/
// growing function
// function and side effect
/*
- pure function doesn't have a side affect and doen't rely on it from 
other code; when called with the same arguments, always produces the same
value
*/

console.log("/nExcercises 5.1: Flattening")
let array =[[1,2,3], [4,5], [6]];
let flattened = array.reduce((acc, curr)=>acc.concat(curr),[]);
console.log(flattened);





