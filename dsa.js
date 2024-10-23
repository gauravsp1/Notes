// Remove duplicates
// const arr = [1, 2, 2, 2, 3, 3, 5];
// const uniqArr = [];
// uniqArr[0] = arr[0];
// let incremet = 0;
// arr.forEach((item, index) => {
//   if (uniqArr[incremet] != item) {
//     uniqArr[incremet + 1] = item;
//     incremet++;
//   }
// });
// console.log("uniqArr", uniqArr);

//Left Rotate the Array by One
// const array = [1, 2, 3, 4, 5];
// let temp = array[0];
// for (let i = 1; i < array.length; i++) {
//   array[i - 1] = array[i];
// }
// array[array.length - 1] = temp;
// console.log("array", array);

//Left Rotate the Array by D places
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// const d = 9 % array.length;
// let temp = [];
// for (let i = 0; i < d; i++) {
//   temp[i] = array[i];
// }
// for (let i = d; i < array.length; i++) {
//   array[i - d] = array[i];
// }
// for (let i = 0; i < d; i++) {
//   array[array.length + i - d] = temp[i];
// }
// console.log("array", array);

//Move all Zeros to the end of the array
// const array = [1, 2, 0, 1, 0, 4, 0];
// let j = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] != 0 && array[j] === 0) {
//     let temp = array[i];
//     array[i] = array[j];
//     array[j] = temp;
//   } else if (array[j] != 0) {
//     j++;
//   }
// }
// console.log("array", array);

//Union of Two Sorted Arrays
// const array = [1, 2, 2, 3, 4, 6, 20];
// const array2 = [1, 2, 11, 20, 30, 44];
// function findUnionAndDistinct(arr1, arr2) {
//     let map1 = {}; // Hash map to store occurrences of elements in arr1
//     let map2 = {}; // Hash map to store occurrences of elements in arr2
//     let union = [];
//     let common = [];
//     let distinctInArr1 = [];
//     let distinctInArr2 = [];

//     // Step 1: Populate the maps for arr1 and arr2
//     for (let i = 0; i < arr1.length; i++) {
//         map1[arr1[i]] = (map1[arr1[i]] || 0) + 1;
//     }
//     for (let i = 0; i < arr2.length; i++) {
//         map2[arr2[i]] = (map2[arr2[i]] || 0) + 1;
//     }

//     // Step 2: Find union, common, and distinct elements
//     for (let key in map1) {
//         union.push(Number(key));  // Add arr1 elements to union
//         if (map2[key]) {
//             common.push(Number(key));  // If present in both, add to common
//         } else {
//             distinctInArr1.push(Number(key));  // If only in arr1, add to distinctInArr1
//         }
//     }

//     for (let key in map2) {
//         if (!map1[key]) {
//             union.push(Number(key));  // Add remaining elements from arr2 to union
//             distinctInArr2.push(Number(key));  // If only in arr2, add to distinctInArr2
//         }
//     }

//     // Print the result
//     console.log("Common Elements in arr1 and arr2 are: ", common);
//     console.log("Distinct Elements in arr1 are: ", distinctInArr1);
//     console.log("Distinct Elements in arr2 are: ", distinctInArr2);
//     console.log("Union of arr1 and arr2 is: ", union);
// }

// // Example 1
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [2, 3, 4, 4, 5];
// findUnionAndDistinct(arr1, arr2);

// // Example 2
// let arr1b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2b = [2, 3, 4, 4, 5, 11, 12];
// findUnionAndDistinct(arr1b, arr2b);

//Maximum Consecutive Ones
// const array = [1, 1, 1, 0, 1, 1, 1, 0, 1];
// let count = 0;
// let maxCount = 0;
// for (let i = 0; i < array.length; i++) {
//   if (array[i] === 1) {
//     count++;
//   } else {
//     count = 0;
//   }
//   maxCount = count > maxCount ? count : maxCount;
// }
// console.log("count", count);
// console.log("maxCount", maxCount);

//Find the number that appears once, and the other numbers twice
// const array = [4, 4, 3, 1, 2, 1, 2];
// const resultObj = array.reduce((acc, curr) => {
//   acc[curr] ? acc[curr]++ : (acc[curr] = 1);
//   return acc;
// }, {});

// for (let key in resultObj) {
//   if (resultObj[key] === 1) {
//     console.log("key", key);
//   }
// }

//Longest subarray with given sum K(positives)
// const array = [2, 3, 5, 1, 9];
// // const array = [2, 3, 5, 1, 9, 1, 1, 3, 5];
// const k = 10;

// function longestSum(inputArray, value) {
//   let start = 0;
//   let sum = 0;
//   let maxLength = 0;
//   for (let end = 0; end < inputArray.length; end++) {
//     sum = sum + inputArray[end];

//     while (sum > value && start <= end) {
//       sum = sum - inputArray[start];
//       start++;
//     }

//     if (sum === value) {
//       maxLength = Math.max(maxLength, end - start + 1);
//     }
//   }
//   return maxLength;
// }
// console.log(longestSum(array, 10));

//longestSubarrayWithSumK
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
