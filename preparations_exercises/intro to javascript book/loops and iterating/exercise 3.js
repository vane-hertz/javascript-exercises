//The following code causes an infinite loop
//(a loop that never stops iterating). Why?

let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

//This is an infinite loop because in the while statement counter is
//being assigned to the value of 1, it then increments to 2 and never
//becomes greater than 2 as it gets assigned to 1 again in the next loop.