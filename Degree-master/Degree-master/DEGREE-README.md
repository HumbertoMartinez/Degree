# Degree.js

This program imports the Matrix-js library and we will be adding to its functionality.  You will be programming how to find the degree of a vertex and its degree-centrality.  If you meet both of these challenges you can find the "king" in each graph, which the vertex with the highest degree centrality.

You should review the code at this link [Matrix-js](https://www.npmjs.com/package/matrix-js)


## Degree
This function will return a number which represents the degree of the vertex in the matrix.  Degree accepts two inputs, [mtrx]() which represents a potential; and [v]() which represents the number associated with a vertex.

  +  You will need to declare two variables.
    -  [sum]() which should have an initial value of 0.
    -  [degreelist]() which should be initialized to the correct row in the matrix.  There is a built-in function in the Matrix-js library.
  +  Write a for-loop which will go through that degreelist one by one and add it into the sum.
  +  Return the sum

## Degree Centrality
This function accepts the same two inputs as the previous function: [mtrx]() and [v]().  It will return the degree centrality of [v]() by reusing the previous function and dividing by the the remaining vertices.  Hint: one fewer vertex.

  +  You should create a variable named neighbors to hold the quantity of the other vertices.  There is a built-in way to access a row or a column in a matrix.  The length of that array in the matrix is equal to the number to vertices.
  +  Return the desired quotient.

## King
The king of a graph is the vertex with the highest degree centrality.  See if you can reuse the code from the previous functions to declare a new function which returns the vertex with the highest degree centrality.
