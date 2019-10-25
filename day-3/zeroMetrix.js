/**
 * Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to O.
input [
	[ 2, 3, 1, 2],
	[ 2, 3, 0, 7],
	[ 2, 3, 4, 6]
]

output =  [
	[ 2, 3, 0, 2],
	[ 0, 0, 0, 0],
	[ 2, 3, 0, 6]
]

 */

function zeroMetrix(metrix) {
  const zeroRows = [];
  const zeroCols = [];

  for (let i = 0; i < metrix.length; i++) {
    for (let j = 0; j < metrix[i].length; j++) {
      if (metrix[i][j] === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }
  for (let i = 0; i < zeroRows.length; i++) {
    if (zeroRows[i]) {
      nullifyRows(metrix, i);
    }
  }

  for (let i = 0; i < zeroCols.length; i++) {
    if (zeroCols[i]) {
      nullifyCols(metrix, i);
    }
  }

  return metrix;
}

function nullifyRows(metrix, rowIndex) {
  for (let i = 0; i < metrix[0].length; i++) {
    metrix[rowIndex][i] = 0;
  }
}

function nullifyCols(metrix, col) {
  for (let i = 0; i < metrix.length; i++) {
    metrix[i][col] = 0;
  }
}

const metrix = [[2, 3, 1, 2], [2, 3, 0, 7], [2, 3, 4, 6]];

console.log(zeroMetrix(metrix));
