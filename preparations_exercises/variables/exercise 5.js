let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);
//What does this program log to the console? Why?
//It logs bar; because the original foo is in scope of the console.log
//while the 'qux' foo is in a block and not in scope of the console.log
