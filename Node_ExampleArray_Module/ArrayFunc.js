function order(matrix) {
    var change;
    do {
        change = false;
        for (var i = 0; i < matrix.length - 1; i++) {
            if (matrix[i].length > matrix[i + 1].length) {
                var aux = matrix[i];
                matrix[i] = matrix[i + 1];
                matrix[i + 1] = aux;
                change = true;
            }
        }
    } while (change);
}

function removeZeroes(matrix) {
    for (var i = 0; i < matrix.length; i++) {
        var row = matrix[i];
        for (var j = 0; j < row.length; j++) {
            var v = row[j];
            if (v === 0) {
                row.splice(j, 1);
                j--;
            }
        }
    }
}

function removeZeroesAndOrder(initialMatrix) {
    removeZeroes(initialMatrix);
    order(initialMatrix);
}

module.exports = removeZeroesAndOrder;