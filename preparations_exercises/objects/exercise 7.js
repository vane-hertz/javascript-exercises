//Add a qux property with value 3 to the myObj object we created 
//in the previous exercise. Now, examine the following code snippets:

//previous exercise
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;

//snippet 1
let objKeys = Object.keys(myObj);
objKeys.forEach(function(key) {
  console.log(key);
});

//snippet 2
for (let key in myObj) {
  console.log(key);
}

//they do not, as Object.keys only produces keys the object has not inherited.