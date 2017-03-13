const Matrix = require("matrix-js");

let A = Matrix([
    [1,1,0,1,0],
    [1,0,1,0,0],
    [0,1,0,0,0],
    [1,0,0,0,1],
    [0,0,0,1,0]
]);
//Code here
function degree(mtrx,v){
  var sum=0;
  var degreelist= mtrx(v);
  for(let e=0;e<degreelist.length;e++){
    sum=sum+degreelist[e];
  }
  return sum
}

function degreecentrality(mtrx,v){
  var neighbors= mtrx.size-1;
  return degree(mtrx,v)/neighbors;
}

//Challenge

//Run test code with ctrl+shift+p  then type in "script"
console.log(degree(A,3));
console.log(degreecentrality(A,2));
