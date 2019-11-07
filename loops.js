//for loop

function forLoop(array) {
   for ( let i = 0; i < 25; i++) {
     if (i === 1) {
       array.push(`I am 1 strange loop.`)
     } else {
       array.push(`I am ${i} strange loops.`)
     }
  }
  return array;
}


//while loop
/*
function name is "while loop"
takes a number as argument
make while loop
count down using console.log starting from passed in number down to zero
return string "done"
*/


function whileLoop(n) {
  let countdown = n;

    while (countdown > 0) {
      console.log(--countdown);
    }
    return("done");
}
