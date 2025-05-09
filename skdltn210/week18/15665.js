const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n, m;
let num = [];
let result = [];

readline
  .on("line", (line) => {
    if (!n) {
      [n, m] = line.split(" ").map(Number);
    } else {
      num = [...new Set(line.split(" ").map(Number))].sort((a, b) => a - b);
      readline.close();
    }
  })
  .on("close", () => {
    solution();
    console.log(result.join("\n"));
    process.exit();
  });

const solution = () => {
  let arr = [];

  const dfs = () => {
    if (arr.length === m) {
      result.push(arr.join(" "));
      return;
    }

    for (let i = 0; i < num.length; i++) {
      arr.push(num[i]);
      dfs();
      arr.pop();
    }
  };

  dfs();
};
