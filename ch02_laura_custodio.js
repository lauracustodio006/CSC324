// Laura Custodio

// Looping a triangle
/* 
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### 
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
Most exercises contain a piece of code that you can modify to solve the exercise. Remember that you can click code blocks to edit them.
*/
let character = "#";
while (character.length <= 7) {
  console.log(character);
  character += "#";
}

// FIZZBUZZ
/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" 
instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or 
"Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, 
your labor market value just went up.)
*/
let num = 1; 
while(num <= 100) {
  if (num % 3 === 0 && num % 5 === 0){
    console.log("FrizzBuzz");
  } else if (num % 3 === 0 ) { 
    console.log("Fizz"); 
  } else if (num % 5 === 0 ) { 
    console.log("Buzz"); 
  } else{
    console.log(num);
  }
  num++;
}

// Chessboard
/*
Write a program that creates a string that represents an 8×8 grid, using
 newline characters to separate lines. At each position of the grid there 
 is either a space or a "#" character. The characters should form a 
 chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding 
size = 8 and change the program so that it works for any size, 
outputting a grid of the given width and height.
*/

let chessboard = "";
for (let row = 0; row < 8; row++) {        
  for (let col = 0; col < 8; col++) {      
    if ((row + col) % 2 === 0) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";  
}

console.log(chessboard);