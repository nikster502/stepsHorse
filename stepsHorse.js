const board = [
    ['A1','B1','C1','D1','E1','F1','G1','H1'],
    ['A2','B2','C2','D2','E2','F2','G2','H2'],
    ['A3','B3','C3','D3','E3','F3','G3','H3'],
    ['A4','B4','C4','D4','E4','F4','G4','H4'],
    ['A5','B5','C5','D5','E5','F5','G5','H5'],
    ['A6','B6','C6','D6','E6','F6','G6','H6'],
    ['A7','B7','C7','D7','E7','F7','G7','H7'],
    ['A8','B8','C8','D8','E8','F8','G8','H8'],
];

const horseStep = [
    [2,1],
    [2,-1],
    [-2,1],
    [-2,-1],
    [1,2],
    [1,-2],
    [-1,2],
    [-1,-2],
];
const step = prompt('Исходное положение:', 'C1');
const stepNum = find(board,step);
const stepResult = [];

for (let i=0;i<horseStep.length;i++){
    let x = stepNum[0] + parseInt(horseStep[i][0]);
    let y = stepNum[1] + parseInt(horseStep[i][1]);
if (x>=0&&x<8&&y>=0&&y<8){
    stepResult.push(board[x][y]);
}
}
alert(stepResult);

function find(array, value) {

    for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
        if (array[i][j] === value) return [i,j];
    }
    }

    return -1;
}