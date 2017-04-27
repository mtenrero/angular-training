"use strict";

var initialMatrix = [[7,0,2,1,0,1],[3,0,0,2],[7,9,0],[6,5,0,1,0,2,0]];

function order(matrix) {
    var change;
    do {
        change = false;
        for (var i = 0; i < initialMatrix.length - 1; i++) {
            if (initialMatrix[i].length > initialMatrix[i + 1].length) {
                var aux = initialMatrix[i];
                initialMatrix[i] = initialMatrix[i + 1];
                initialMatrix[i + 1] = aux;
                change = true;
            }
        }
    } while (change);
}

function removeZeroes(matrix) {
    for (var i = 0; i < initialMatrix.length; i++) {
        var row = initialMatrix[i];
        for (var j = 0; j < row.length; j++) {
            var v = row[j];
            if (v === 0) {
                row.splice(j, 1);
                j--;
            }
        }
    }
}

function removeZeroesAndOrder() {
    removeZeroes(initialMatrix);
    order(initialMatrix);
}

removeZeroesAndOrder();
console.log(initialMatrix);