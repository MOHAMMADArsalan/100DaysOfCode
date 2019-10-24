/**
 * Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
  bytes, write a method to rotate the image by 90 degrees.

  input
[[1, 2, 3, 4],
 [5, 6, 7, 8],
 [9, 10, 11, 12],
 [13, 14, 15, 16]]
  output
[[13, 9, 5, 1],
[14, 10, 6, 2],
[15, 11, 7, 3],
[16, 12, 8, 4]]

 */

function rotateMatrix(matrix) {
  let rotateMatrixArray = matrix[0].map(() =>
    Array.from(matrix[0].length).fill(0)
  );

  for (let row = 0; row < matrix.length; row++) {
      let insertRowIndex = matrix.length - 1 - row;

    for (let col = 0; col < matrix[row].length; col++) {
        rotateMatrixArray[col][insertRowIndex] = matrix[row][col];
    }
  }

  return rotateMatrixArray;
}


console.log(
  rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]])
);
