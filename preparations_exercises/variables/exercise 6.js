//Will this program produce an error when run? Why or why not?

const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

//No error; it will log bar, its not trying to reassign the const
//variable.