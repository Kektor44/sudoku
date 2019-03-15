module.exports = function solveSudoku(matrix) {
    for (var horz = 0; horz < 9; horz++) {
        for (var vert = 0; vert < 9; vert++) {
            var posVal = matrix[horz][vert];
            if (posVal === 0) {
                matrix[horz][vert] = getNum(matrix, horz, vert);
            }
        }
    }
    return matrix;
};
function getNum(matrix, horz, vert) {
    var horzCand = [];
    var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    var writtenNum = matrix[horz].reduce(function (set, posVal) {
        return set.add(posVal);
    }, new Set());

    var vertSet = new Set();
    for (var horzNumber = 0; horzNumber < 9; horzNumber++) {
        vertSet.add(matrix[horzNumber][vert]);
    }
    
    var vertCand = num.filter(function (number) {
        return !vertSet.has(number);
    });
    if (vertCand.size === 1) {
        return [...vertCand][0];
    }
    horzCand = num.filter(function (number) {
            return !writtenNum.has(number);
    });
    if (horzCand.size === 1) {
        return [...horzCand][0];
    }
    return horzCand;
}