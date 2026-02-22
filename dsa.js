//29.Longest Subarray With Sum K
// let arr = [10, 2, -2, -20, 10];
// let K = -10;

// function longestSum(inputArray, value) {
//   let prefix_sum = 0;
//   let maxLength = 0;
//   let map = new Map();

//   for (let i = 0; i < inputArray.length; i++) {
//     prefix_sum = prefix_sum + inputArray[i];

//     if (prefix_sum === value) {
//       maxLength = i + 1;
//     }
//     if (map.has(prefix_sum - value)) {
//       maxLength = Math.max(maxLength, i - map.get(prefix_sum - value));
//     }

//     if (!map.has(prefix_sum)) {
//       map.set(prefix_sum, i);
//     }
//   }
// }

// console.log(longestSum(arr, K));

// ----------xxxxxxxx-----Trees------xxxxxxxxxxx----------

//Iterative Apporoch

//levelOrderTraversal

//Recursive
// const levelOrderTraversal = (inputRoot) => {
//   const ans = [];
//   function traversal(inputValue, level) {
//     if (!ans[level]) {
//       ans[level] = [];
//     }
//     ans[level].push(inputValue.val);

//     inputValue.left && traversal(inputValue.left, level + 1);
//     inputValue.right && traversal(inputValue.right, level + 1);
//   }
//   traversal(inputRoot, 0);

//   console.log("ans", ans);
// };
// levelOrderTraversal(root);
