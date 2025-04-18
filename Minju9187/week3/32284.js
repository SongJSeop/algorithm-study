let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("예제.txt").toString().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [a, b] = input[1].split(" ").map(Number);

const grid = Array.from({ length: N }, () => Array(M).fill(""));

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (i > a) {
      grid[i][j] = "N";
    } else if (i < a) {
      grid[i][j] = "S";
    } else if (j > b) {
      grid[i][j] = "W";
    } else {
      grid[i][j] = "E";
    }
  }
}

for (let row of grid) {
  console.log(row.join(""));
}
