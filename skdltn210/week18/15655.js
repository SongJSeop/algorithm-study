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
      num = line.split(" ").map(Number);
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
  num.sort((a, b) => a - b);

  const dfs = (x) => {
    if (arr.length === m) {
      result.push(arr.join(" "));
      return;
    }
    for (let i = x; i < num.length; i++) {
      arr.push(num[i]);
      dfs(i + 1);
      arr.pop();
    }
  };

  dfs(0);
};
