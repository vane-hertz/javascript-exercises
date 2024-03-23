//Without running this code, what will it print?

function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7);
show(0, 0);
show(4);
show();

/*
foo is 5, bar is 7
foo is 0, bar is 0
foo is 4, bar is 42
foo is 3, bar is 42
*/