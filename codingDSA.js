// --------------**********--------Array----------***************
// 1. Sum of Array
// arr=[1,5,6,4,10]
// newarr= arr.reduce((total,value)=>{
//   return total+value
// })
// console.log(newarr)

// 2.Remove Duplicates
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

// const array = [1, 2, 2, 3, 3, 4, 5, 5];
// const uniqueArray = [...new Set(array)];
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// uniqueArray = array.filter(function (item, index, self) {
//   return self.indexOf(item) === index;
// });

// const uniqueArray = array.reduce((accumulator, currentValue) => {
//   if (!accumulator.includes(currentValue)) {
//     accumulator.push(currentValue);
//   }
//   return accumulator;
// }, []);
// console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]

// const removeDuplicates = (arr) => {
//   const uniqueArray = [];
//   const seen = {}; // Use an object to track seen elements

//   for (let i = 0; i < arr.length; i++) {
//     if (!seen[arr[i]]) {
//       // If the element is not in 'seen', add it
//       uniqueArray.push(arr[i]);
//       seen[arr[i]] = true; // Mark the element as seen
//     }
//   }

//   return uniqueArray;
// };

// const array = [1, 2, 2, 3, 3, 3, 4, 5, 5];
// const uniqArray = [];
// const dupArray = [];

// const removeDup = (inputArray) => {
//   let seen = {};

//   for (let i = 0; i < inputArray.length; i++) {
//     const item = inputArray[i];

//     // If the item has not been seen, add it to uniqArray
//     if (!seen[item]) {
//       uniqArray.push(item);
//       seen[item] = 1;
//     }
//     // If it’s already in seen and this is the first duplicate, add it to dupArray
//     else if (seen[item] === 1) {
//       dupArray.push(item);
//       seen[item]++; // Increment to mark it as already processed duplicate
//     }
//   }

//   console.log("Unique Array:", uniqArray);
//   console.log("Duplicate Array:", dupArray);
// };

// removeDup(array);

// const array = [1, 2, 2, 3, 3, 3, 4, 5, 5];
// const uniqArray = [];
// const dupArray = [];
// const nonDupArray = [];

// const removeDup = (inputArray) => {
//   const seen = {};

//   // Count occurrences of each element
//   for (let i = 0; i < inputArray.length; i++) {
//     const item = inputArray[i];
//     seen[item] = (seen[item] || 0) + 1;
//   }

//   // Separate elements based on occurrence count
//   for (let key in seen) {
//     if (seen[key] === 1) {
//       nonDupArray.push(Number(key)); // Non-duplicate elements
//     }
//     uniqArray.push(Number(key)); // Unique elements
//     if (seen[key] > 1) {
//       dupArray.push(Number(key)); // Duplicated elements
//     }
//   }

//   console.log("Unique Array:", uniqArray);
//   console.log("Duplicate Array:", dupArray);
//   console.log("Non-Duplicate Array:", nonDupArray);
// };

// removeDup(array);

// const sampleArry = [1, 2, 3, 4, 5, 2, 7, 8, 4];

// // dup=[2,4]
// // nonDup=[1,3,5,7,8]
// // uniqueElemnet=[1,2,3,4,5,7,8]

// const outPut = sampleArry.reduce(
//   (acc, item) => {
//     if (!acc.uniq.includes(item)) {
//       acc.uniq.push(item);
//       acc.nonDup.push(item);
//     } else if (!acc.dup.includes(item)) {
//       acc.dup.push(item);
//       const filtered = acc.nonDup.filter((nonDupItem) => {
//         return nonDupItem !== item;
//       });
//       acc.nonDup = filtered;
//     }
//     return acc;
//   },
//   {
//     dup: [],
//     nonDup: [],
//     uniq: [],
//   }
// );
// console.log("outPut", outPut);

// 3.Reverse Array In-Place
// const reverseArray = (inputArray) => {
//   for (let i = 0; i < inputArray.length / 2; i++) {
//     const temp = inputArray[i];
//     inputArray[i] = inputArray[inputArray.length - 1 - i];
//     inputArray[inputArray.length - 1 - i] = temp;
//   }
//   console.log("inputArray", inputArray);
// };

// reverseArray(arr);

// 4.Reverse Array Immutable
// arr=[1,2,3,4,5]
// console.log(arr.reverse());

//     const reversed = arr.reduce((acc, curr) => {
//   return [current, ...acc];
// }, []);

// 5. First Duplicate
// let nums = [2, 3, 55, 4, 8, 10, 55, 5, 3];

// function firstDuplicate(arr) {
//   const seen = new Set();
//   for (let num of arr) {
//     if (seen.has(num)) {
//       return num; // ✅ Found first duplicate
//     }
//     seen.add(num);
//   }
//   return -1; // ❌ No duplicates
// }

// console.log(firstDuplicate(nums));

// const firstDuplicate = () => {
//   const seen = {};
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     if (!seen[value]) {
//       seen[value] = true;
//     } else {
//       return value;
//     }
//   }
// };

// const outPut = firstDuplicate();
// console.log("outPut", outPut);

// 6. Print Duplicates with Indices
// let array=[3,5,4,3,5,3]

// value 3 is dup at index 3
// value 5 is dup at index 4
// value 3 is dup at index 5
// const dupsFn = (inputArray) => {
//   const seen = {};
//   for (let i = 0; i < inputTest.length; i++) {
//     const value = inputTest[i];
//     if (seen[value]) {
//       console.log(`value ${value} is dup at index ${i}`);
//     } else {
//       seen[value] = true;
//     }
//   }
// };
// dupsFn(array);

// 7. Best Time to Buy and Sell -Single Tranx
// prices = [7,10,5,13,60,4]
// let min= Infinity
// let profit=0
// for(i=0;i<prices.length;i++){
//   min=Math.min(min,prices[i])
//   profit=Math.max(profit,prices[i]-min)
// }
// console.log(profit);

//8. Chocolate Distribution (min diff) -- Sliding Window
// let packets = [7, 3, 2, 4, 9, 12, 56];
// let children = 5;
// const findMinDiff = () => {
//   packets.sort((a, b) => a - b);
//   console.log("pac", packets);
//   let i = 0;
//   let j = i + children - 1;
//   let min = Infinity;
//   while (j < packets.length) {
//     const value = packets[j] - packets[i];
//     min = Math.min(value, min);

//     j++;
//     i++;
//   }
//   return min;
// };

// const outPut = findMinDiff();
// console.log("outPut", outPut);

// const maxProfit = (prices) => {
//   if (!Array.isArray(prices) || prices.length < 2) return 0; // edge cases

//   let profit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) {
//       profit += prices[i] - prices[i - 1]; // capture each rise
//     }
//   }

//   return profit;
// };
// console.log(maxProfit([7,1,5,3,6,4])); // 7  (buy 1→sell 5, buy 3→sell 6)
// console.log(maxProfit([1,2,3,4,5]));   // 4  (buy 1→sell 5)
// console.log(maxProfit([7,6,4,3,1]));   // 0  (no profit possible)

//9. Pair in Sorted Rotated Array

// let nums = [11, 15, 6, 8, 9, 10],
//   target = 16;
// const pairInSortedRotated = () => {
//   let numLength = nums.length;
//   // Step 1: Find pivot (largest element)
//   let pivot = -1;
//   for (let i = 0; i < numLength; i++) {
//     if (nums[i] > nums[i + 1]) {
//       pivot = i;
//       break;
//     }
//   }
//   // If no pivot found, array is fully sorted
//   if (pivot === -1) pivot = numLength - 1;

//   // Step 2: Set two pointers
//   let start = (pivot + 1) % numLength; // smallest element
//   let end = pivot; // largest element

//   // Step 3: Search for target sum
//   while (start !== end) {
//     let sum = nums[start] + nums[end];
//     if (sum === target) return true;
//     else if (sum < target) {
//       start = (start + 1) % numLength;
//     } else {
//       end = (numLength + end - 1) % numLength;
//     }
//   }
//   return false;
// };

// const outPut = pairInSortedRotated();
// console.log("outPut", outPut);

//10. Two Sum All Unique Pairs
// Input: nums = [2, 7, 11, 15, -2, 9, 1, 8];
// target = 9;
// Output: [
//   [0, 1], // 2 + 7 = 9
//   [4, 5], // -2 + 11 = 9
//   [6, 7], // 1 + 8 = 9
// ];

// let nums = [2, 7, 11, 15, 2, -2, 9, 1, 8];
// let target = 9;

// const seen = new Set();
// const result = new Set();
// for (let i = 0; i < nums.length; i++) {
//   let otherNums = target - nums[i];

//   if (seen.has(otherNums)) {
//     const pair = [nums[i], otherNums].sort((a, b) => a - b).toString();
//     console.log("pair", pair);
//     result.add(pair);
//   }
//   seen.add(nums[i]);
// }
// const finalPair = Array.from(result).map((pairString) => {
//   return pairString.split(",").map(Number);
// });
// console.log("finalPair ", finalPair);

// let nums = [2, 7, 11, 15, -2, 9, 1, 8];
// let target = 9;
// const twoSum = () => {
//   const seen = {};
//   const result = [];

//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     if (seen[value] === undefined) {
//       seen[value] = i;
//     }
//   }
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     const otherNum = target - value;

//     if (seen[otherNum] !== undefined && seen[otherNum] > i) {
//       result.push([value, otherNum]);
//     }
//   }

//   return result;
// };
// console.log(twoSum());

// 11. Two Sum Indices
// const arr = [2, 7, 11, 15];

// const twoSum = (inputArray, target) => {
//   let seen = {};
//   for (let i = 0; i < inputArray.length; i++) {
//     const value = inputArray[i];
//     if (!seen[value]) {
//       seen[value] = i;
//     }
//   }
//   for (let i = 0; i < inputArray.length; i++) {
//     const value = inputArray[i];
//     const complimentary = target - value;
//     if (seen[complimentary] && seen[complimentary] != i) {
//       return [i, seen[complimentary]];
//     }
//   }
// };
// console.log(twoSum(arr, 9));

//12.a Without dup pairs
// let arr = [2, 7, 11, 15, -2, 9, 1, 8];
// let target = 9;
// const twoSum = () => {
//   const seen = {};
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     const otherValue = target - value;
//     if (seen[otherValue] !== undefined) {
//       result.push([value, otherValue]);
//     }

//     seen[value] = i;
//   }
//   return result;
// };

// const outPut = twoSum();
// console.log("outPut", outPut);

//12.b Without dup values in given array
// let nums = [2, 7, 11, 15, -2, 9, 1, 8];
// let target = 9;

// const twoSum = () => {
//   const seen = {};
//   const used = {}; // to avoid duplicate unordered pairs
//   const pairs = [];

//   for (let i = 0; i < nums.length; i++) {
//     const current = nums[i];
//     const complement = target - current;

//     if (seen[complement] !== undefined) {
//       // Sort the pair to make it unordered
//       const key = [current, complement].sort((a, b) => a - b).join(",");

//       if (!used[key]) {
//         pairs.push([current, complement]);
//         used[key] = true;
//       }
//     }

//     seen[current] = i;
//   }

//   console.log(pairs);
// };

// twoSum();

//13. Two Sum Two-Pointer
// const arr = [1, 1, 2, 7, 11, 15];

// const twoSum = (inputArray, target) => {
//   let i = 0;
//   let j = inputArray.length - 1;
//   while (j < inputArray.length) {
//     let sum = inputArray[i] + inputArray[j];
//     if (sum === target) {
//       return [i + 1, j + 1];
//     } else if (sum < target) {
//       i++;
//     } else {
//       j--;
//     }
//   }
// };
// console.log(twoSum(arr, 9));

//13.a Array of Answers
// const twoSum = (arr, x, ans) => {
//   let i = x + 1;
//   let j = arr.length - 1;
//   while (i < j) {
//     let sum = arr[x] + arr[i] + arr[j];
//     if (sum > 0) {
//       j--;
//     } else if (sum < 0) {
//       i++;
//     } else {
//       ans.push([arr[x], arr[i], arr[j]]);
//      while (i < j && arr[i] === arr[i - 1]) {
//       i++;
//      }
//       i++;
//       j--;
//     }
//   }
// };

//14. 3Sum
// let nums = [-1, 0, 1, 2, -1, -4];

// const threeSum = () => {
//   nums.sort((a, b) => a - b);

//   const result = [];
//   for (let a = 0; a < nums.length; a++) {
//     if (a > 0 && nums[a] === nums[a - 1]) continue;
//     let j = nums.length - 1;
//     let i = a + 1;
//     while (i < j) {
//       const sum = nums[i] + nums[j] + nums[a];
//       if (sum === 0) {
//         const data = [nums[a], nums[i], nums[j]];
//         result.push(data);
//         while (i < j && nums[i] === nums[i + 1]) i++;
//         while (i < j && nums[j] === nums[j - 1]) j--;
//         i++;
//         j--;
//       } else if (sum < 0) {
//         i++;
//       } else {
//         j--;
//       }
//     }
//   }
//   return result;
// };

// const outPut = threeSum();
// console.log("outPut", outPut);

// 15. Common Elements of Two Arrays
// input: [1, 2, 3, 4, 1], [1, 4, 2, 5]
// expected output: [1, 2, 4]
// let arr1 = [1, 4, 2, 5];
// let arr2 = [1, 2, 3, 4, 1];

// function common(arr1, arr2) {
//   let result = [];
//   let seen = {};
//   for (let i = 0; i < arr1.length; i++) {
//     const num = arr1[i];
//     if (!seen[num]) {
//       seen[num] = true;
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     const num = arr2[i];
//     if (seen[num]) {
//       result.push(num);
//       seen[num] = false;
//     }
//   }
//   console.log("seen", seen);
//   console.log("result", result);
// }
// common(arr1, arr2);

//16. Common Elements in Three Sorted Arrays
// let nums1 = [1, 5, 10, 20, 20, 30];
// let nums2 = [5, 13, 15, 20, 20];
// let nums3 = [5, 20, 20];

// const commonElements = () => {
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   let result = [];
//   let lastAdded = null;
//   while (i < nums1.length && j < nums2.length && k < nums3.length) {
//     if (nums1[i] === nums2[j] && nums2[j] === nums3[k]) {
//       if (lastAdded !== nums1[i]) {
//         result.push(nums1[i]);
//         lastAdded = nums1[i];
//       }
//       i++;
//       j++;
//       k++;
//     } else if (nums1[i] < nums2[j]) {
//       i++;
//     } else if (nums2[j] < nums3[k]) {
//       j++;
//     } else {
//       k++;
//     }
//   }
//   return result;
// };

// const outPut = commonElements();
// console.log("outPut", outPut);

//17. Ceiling Index in a sorted array // lowerBound
// let nums1 = [1, 2, 8, 10, 10, 12, 19],
//   x = 5;

// const ceilingIndex = () => {
//   let i = 0;
//   let j = nums1.length - 1;
//   let ans = -1;
//   while (i <= j) {
//     const mid = Math.floor((i + j) / 2);
//     const midValue = nums1[mid];

//     if (midValue >= x) {
//       ans = mid;
//       j = mid - 1;
//     } else {
//       i = mid + 1;
//     }
//   }
//   return ans;
// };

// const outPut = ceilingIndex();
// console.log("outPut", outPut);

//18. Merge Sorted Arrays In-Place (backwards)
// let nums1 = [-5, -2, 4, 5],
//   nums2 = [-3, 1, 8];

// const mergeFunction = () => {
//   let i = nums1.length - 1;
//   let j = nums2.length - 1;
//   let k = nums1.length + nums2.length - 1;

//   while (j >= 0) {
//     if (i >= 0 && nums1[i] > nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }
// };

// const outPut = mergeFunction();
// console.log("outPut", outPut);

//19. Find Duplicate (Floyd cycle)
// let nums = [1, 3, 4, 2, 2];
// const findDuplicate = (nums) => {
//   // Step 1: Detect intersection point
//   let slow = nums[0];
//   let fast = nums[0];

//   do {
//     slow = nums[slow];         // Move 1 step
//     fast = nums[nums[fast]];   // Move 2 steps
//   } while (slow !== fast);

//   // Step 2: Find entrance to the cycle
//   slow = nums[0];
//   while (slow !== fast) {
//     slow = nums[slow];
//     fast = nums[fast];
//   }

//   return slow;
// };

//20.Maximum Product of Three Numbers
// let nums = [1, -2, -10, 1, 10, 10];

// const maxProduct = (inputNums) => {
//   let max1 = -Infinity;
//   let max2 = -Infinity;
//   let max3 = -Infinity;
//   let min1 = Infinity;
//   let min2 = Infinity;
//   for (let i = 0; i < inputNums.length; i++) {
//     const value = inputNums[i];
//     if (value > max1) {
//       max3 = max2;
//       max2 = max1;
//       max1 = value;
//     } else if (value > max2) {
//       max3 = max2;
//       max2 = value;
//     } else if (value > max3) {
//       max3 = value;
//     }
//     if (value < min1) {
//       min2 = min1;
//       min1 = value;
//     } else if (value < min2) {
//       min2 = value;
//     }
//   }
//   return Math.max(max1 * max2 * max3, max1 * min1 * min2);
// };
// console.log(maxProduct(nums));

// 21. topK Frequent Elements
// let nums = [1, 1, 2, 3, 3, 3],
//   k = 2;

// const topKFrequent = () => {
//   let seen = {};
//   let result = [];
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     seen[value] = (seen[value] || 0) + 1;
//   }

//   const counter = Array(nums.length);
//   for (let key in seen) {
//     const value = seen[key];
//     counter[value] = [];
//     counter[value].push(key);
//   }

//   for (let i = counter.length - 1; i >= 0; i--) {
//     const value = counter[i];
//     for (const key in value) {
//       result.push(value[key]);
//       if (result.length === k) {
//         return result;
//       }
//     }
//   }
// };

// const outPut = topKFrequent();
// console.log("outPut", outPut);

//22.Left Rotate the Array by One
// const array = [1, 2, 3, 4, 5];
// let temp = array[0];
// for (let i = 1; i < array.length; i++) {
//   array[i - 1] = array[i];
// }
// array[array.length - 1] = temp;
// console.log("array", array);

// 23. Left Rotate By D (reversal)
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// let d = 2;

// const reverse = (arr, start, end) => {
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// };
// const leftRotate = () => {
//   const n = array.length;
//   d = d % n;
//   if (d === 0) return array;

//   reverse(array, 0, d - 1); //reverse first d
//   reverse(array, d, n - 1); //reverse rest
//   reverse(array, 0, n - 1); //reverse whole array

//   return array;
// };

// console.log(leftRotate());

//24. Move Zeros to End
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

//25. Union, Common, Distinct of two arrays
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

// const unionArray = [];

// const union = (inputA, inputB) => {
//   const seen = {};
//   for (let i = 0; i < inputA.length; i++) {
//     if (!seen[inputA[i]]) {
//       unionArray.push(inputA[i]);
//       seen[inputA[i]] = 1;
//     }
//   }
//   for (let i = 0; i < inputB.length; i++) {
//     if (!seen[inputB[i]]) {
//       unionArray.push(inputB[i]);
//       seen[inputB[i]] = 1;
//     }
//   }
//   console.log("unionArray", unionArray);
// };

//26. Maximum Consecutive Ones
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

//27. Find the number that appears once, and the other numbers twice
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

// 28. Longest Subarray Sum K (positive)
// const array = [1, 2, 1, 1, 1, 3, 2, 1];
// let k = 5;

// const longestSubArray = () => {
//   let i = 0;
//   let sum = 0;
//   let maxLength = 0;
//   for (let j = 0; j < array.length; j++) {
//     const value = array[j];
//     sum = sum + value;

//     while (sum > k && i <= j) {
//       sum = sum - array[i];
//       i++;
//     }

//     if (sum === k) {
//       maxLength = Math.max(maxLength, j - i + 1);
//     }
//   }
//   return maxLength;
// };

// console.log(longestSubArray());

// 30.Find First and Last Position of Element in Sorted Array
// const array = [3, 4, 13, 13, 13, 20, 20, 40];
// const target = 13;

// const currFunction = () => {
//   const firstOcc = firstOccurance();
//   const lastOcc = lastOccurance();
//   return [firstOcc, lastOcc];
// };

// const firstOccurance = () => {
//   let i = 0;
//   let j = array.length - 1;
//   let result = -1;
//   while (i <= j) {
//     let mid = Math.floor((i + j) / 2);
//     const midValue = array[mid];
//     if (target === midValue) {
//       result = mid;
//       j = mid - 1;
//     } else if (target < midValue) {
//       j = mid - 1;
//     } else {
//       i = mid + 1;
//     }
//   }

//   return result;
// };
// const lastOccurance = () => {
//   let i = 0;
//   let j = array.length - 1;
//   let result = -1;
//   while (i <= j) {
//     let mid = Math.floor((i + j) / 2);
//     const midValue = array[mid];
//     if (target === midValue) {
//       result = mid;
//       i = mid + 1;
//     } else if (target < midValue) {
//       j = mid - 1;
//     } else {
//       i = mid + 1;
//     }
//   }

//   return result;
// };
// const outPut = currFunction();
// console.log("outPut", outPut);

//31. Check If Array Sorted
// const arr = [133, 40, 40, 178, 55, 304, 65, 178];
// const sortedArray = [1, 2, 3, 44, 5, 5, 6];
// const checkSortedArray = (inputArray) => {
//   for (let i = 0; i < inputArray.length - 1; i++) {
//     if (inputArray[i] > inputArray[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(checkSortedArray(sortedArray));

// 32. Rotate Array By K
// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// let d = 2;

// const reverse = (arr, start, end) => {
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++;
//     end--;
//   }
// };
// const leftRotate = () => {
//   const n = array.length;
//   d = d % n;
//   if (d === 0) return array;

//   reverse(array, 0, d - 1); //reverse first d
//   reverse(array, d, n - 1); //reverse rest
//   reverse(array, 0, n - 1); //reverse whole array

//   return array;
// };
// const rightRotate = () => {
//   const n = array.length;
//   d = d % n;
//   if (d === 0) return array;

//   reverse(array, n - d, n - 1); //reverse last d
//   reverse(array, 0, n - d + 1); //reverse rest
//   reverse(array, 0, n - 1); //reverse whole array

//   return array;
// };

// console.log(leftRotate(array, d, direction = "left"));
// console.log(rightRotate(array, d, direction = "right"));

//33.Sort Color - Sort 0/1/2 (Dutch Flag)
// let nums = [1, 0, 1, 2];

// const currFunction = () => {
//   const counter = [0, 0, 0];

//   nums.forEach((item) => {
//     counter[item]++;
//   });
//   let index = 0;

//   for (let i = 0; i < 3; i++) {
//     while (counter[i] > 0) {
//       nums[index] = i;
//       counter[i]--;
//       index++;
//     }
//   }
// };

// const outPut = currFunction(nums);
// console.log("outPut", nums);

//Sort an array of 0's 1's and 2's
// let nums = [1, 0, 2, 1, 0];

// const sortAarray = () => {
//   let low = 0;
//   let mid = 0;
//   let high = nums.length - 1;

//   while (mid <= high) {
//     if (nums[mid] === 0) {
//       [nums[low], nums[mid]] = [nums[mid], nums[low]];
//       mid++;
//       low++;
//     } else if (nums[mid] === 1) {
//       mid++;
//     } else {
//       [nums[mid], nums[high]] = [nums[high], nums[mid]];
//       high--;
//     }
//   }
// };
// const outPut = sortAarray();
// console.log("outPut", outPut);

//34.Products of Array Except Self
// let nums = [1, 2, 3, 4];
// const productExceptSelf = () => {
//   const numsLength = nums.length;
//   let prefix = 1;
//   let suffix = 1;
//   const outPut = new Array(numsLength);

//   for (let i = 0; i < numsLength; i++) {
//     outPut[i] = prefix;
//     prefix = prefix * nums[i];
//   }

//   for (let i = numsLength - 1; i >= 0; i--) {
//     outPut[i] = outPut[i] * suffix;
//     suffix = suffix * nums[i] ;
//   }

//   return outPut;
// };

// const outPut = productExceptSelf(nums);
// console.log("outPut", outPut);

//35.isValidSudoku
// let board = [
//   ["1", "2", ".", ".", "3", ".", ".", ".", "."],
//   ["4", ".", ".", "5", ".", ".", ".", ".", "."],
//   [".", "9", "1", ".", ".", ".", ".", ".", "3"],
//   ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
//   [".", ".", ".", "8", ".", "3", ".", ".", "5"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", ".", ".", ".", ".", ".", "2", ".", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "8"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// const isValidSudoku = () => {
//   const rows = Array(9)
//     .fill(0)
//     .map(() => Array(9).fill(0));
//   const columns = Array(9)
//     .fill(0)
//     .map(() => Array(9).fill(0));
//   const boxes = Array(9)
//     .fill(0)
//     .map(() => Array(9).fill(0));
//   for (let r = 0; r < 9; r++) {
//     for (let c = 0; c < 9; c++) {
//       const cell = board[r][c];
//       if (cell === ".") continue;
//       const nums = parseInt(cell) - 1;
//       const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);
//       if (rows[r][nums] || columns[c][nums] || boxes[boxIndex][nums]) {
//         return false;
//       }
//       rows[r][nums] = 1;
//       columns[c][nums] = 1;
//       boxes[boxIndex][nums] = 1;
//     }
//   }
//   return true;
// };

// const outPut = isValidSudoku(board);
// console.log("outPut", outPut);

//36. Max Profit Multiple Transactions
// let prices = [7, 1, 5, 3, 6, 4];

// const maxProfit = () => {
// let maxProfit = 0;
// for (let i = 1; i < prices.length; i++) {
//   const value = prices[i];
//   let profit = 0;
//   if (value > prices[i - 1]) {
//     profit = value - prices[i - 1];
//   }
//   maxProfit = maxProfit + profit;
// }
// return maxProfit;
// };

// const outPut = maxProfit();
// console.log("outPut", outPut);

// 37. Majority Elements (> n/3)

// let nums = [5, 2, 3, 2, 2, 2, 2, 5, 5, 5];

// const majorityElement = () => {
//   let limit = Math.floor(nums.length / 3);
//   let seen = {};
//   const result = [];
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     seen[value] = (seen[value] || 0) + 1;
//   }
//   for (let key in seen) {
//     if (seen[key] > limit) {
//       result.push(Number(key));
//     }
//   }
//   return result;
// };

// const outPut = majorityElement();
// console.log("outPut", outPut);

//38.Binary Search

// const array = [10, 20, 30, 40, 50, 60, 70];

// const binarySearch = (inputArray, target) => {
//   let low = 0;
//   let high = inputArray.length - 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     0;
//     if (inputArray[mid] === target) return mid;
//     else if (inputArray[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return -1;
// };
// console.log(binarySearch(array, 50)); // Output: 4

//41.Floor Index // upper bound
// const array = [10, 20, 30, 40, 70];

// const floorIndex = (inputArray, target) => {
//   let low = 0;
//   let high = inputArray.length - 1;
//   let ans = -1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     if (inputArray[mid] <= target) {
//       low = mid + 1;
//       ans = mid;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return ans;
// };
// console.log(floorIndex(array, 26));

//43.Sort by Characters frequency
// const frequencySort = (s) => {
//   const freqMap = {};

//   // Build frequency map
//   for (const char of s) {
//     freqMap[char] = (freqMap[char] || 0) + 1;
//   }

//   // Convert map to array and sort
//   const sortedChars = Object.keys(freqMap).sort((a, b) => {
//     if (freqMap[b] === freqMap[a]) {
//       return a.localeCompare(b); // Alphabetical if frequencies are same
//     }
//     return freqMap[b] - freqMap[a]; // Higher frequency first
//   });

//   return sortedChars;
// };

// const s = "tree";
// console.log(frequencySort(s)); // Output: ['e', 'r', 't']

//44.Merge Sort
// In-Situ Array
// const sampleArray = [2, 1, 4, 3, 6, 5, 8, 7, 9];
// console.log("sampleArrayB", sampleArray);

// const mergeSort = (arr, low, high) => {
//   if (low === high) return;
//   let mid = Math.floor((low + high) / 2);
//   mergeSort(arr, low, mid);
//   mergeSort(arr, mid + 1, high);
//   merge(arr, low, mid, high);
// };
// const merge = (arr, low, mid, high) => {
//   let left = low;
//   let right = mid + 1;
//   let newArray = [];
//   while (left <= mid && right <= high) {
//     if (arr[left] <= arr[right]) {
//       newArray.push(arr[left]);
//       left++;
//     } else {
//       newArray.push(arr[right]);
//       right++;
//     }
//   }
//   while (left <= mid) {
//     newArray.push(arr[left]);
//     left++;
//   }
//   while (right <= high) {
//     newArray.push(arr[right]);
//     right++;
//   }
//   for (let i = 0; i < newArray.length; i++) {
//     arr[low + i] = newArray[i];
//   }
// };
// mergeSort(sampleArray, 0, sampleArray.length - 1);
// console.log("sampleArrayAf", sampleArray);

//44. Merge Sorted - New Array
// const sampleArray = [2, 1, 4, 3, 6, 5, 8, 7, 9];

// const mergeSort = (arr, low, high) => {
//   if (low === high) return [arr[low]];
//   let mid = Math.floor((low + high) / 2);
//   const left = mergeSort(arr, low, mid);
//   const right = mergeSort(arr, mid + 1, high);
//   return merge(left, right);
// };

// const merge = (left, right) => {
//   let i = 0;
//   let j = 0;
//   let newArray = [];
//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       newArray.push(left[i]);
//       i++;
//     } else {
//       newArray.push(right[j]);
//       j++;
//     }
//   }
//   while (i < left.length) {
//     newArray.push(left[i]);
//     i++;
//   }
//   while (j < right.length) {
//     newArray.push(right[j]);
//     j++;
//   }
//   return newArray;
// };
// const outPut = mergeSort(sampleArray, 0, sampleArray.length - 1);
// console.log("oup", outPut);

//45.Merge two sorted arrays- in Situ using two pointers
// let nums1 = [10, 20, 20, 40, 0, 0],
//   nums2 = [1, 2];
// let m = 4;
// let n = 2;
// const mergeFunction = () => {
//   let i = m - 1;
//   let j = n - 1;
//   let k = m + n - 1;
//   while (j >= 0) {
//     if (nums1[i] >= nums2[j]) {
//       nums1[k] = nums1[i];
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       j--;
//     }
//     k--;
//   }
//   console.log("ns", nums1);
// };

// const outPut = mergeFunction();
// console.log("outPut", outPut);

//46.Longest Consecutive Sequence
// const nums = [2, 20, 4, 10, 3, 4, 5];

// const longestConsecutive = () => {
//   let seen = {};
//   let longest = 0;
//   nums.forEach((item) => {
//     seen[item] = true;
//   });
//   for (let key in seen) {
//     let value = parseInt(key);
//     if (!seen[value - 1]) {
//       let current = value;
//       let counter = 1;
//       while (seen[current + 1]) {
//         current++;
//         counter++;
//       }
//       longest = Math.max(longest, counter);
//     }
//   }
//   return longest;
// };

// console.log(longestConsecutive());

//47.Contains Duplicate II
// You are given an integer array nums and an integer k,
// return true if there are two distinct indices i and j in the array such that nums[i] == nums[j]
// and abs(i - j) <= k, otherwise return false.

// const nums = [1, 2, 3, 1];
// const k = 3;
// const containsNearbyDuplicate = () => {
//   let lastSeen = {};

//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];

//     if (lastSeen[value] !== undefined && i - lastSeen[value] <= k) {
//       return true;
//     }

//     lastSeen[value] = i;
//   }
//   return false;
// };

// console.log(containsNearbyDuplicate());

//48.Minimum Size Subarray Sum  // https://neetcode.io/problems/minimum-size-subarray-sum?list=neetcode250
// const target = 10,
//   nums = [2, 1, 5, 1, 5, 3];

// const minSubArrayLen = () => {
//   let i = 0;
//   let total = 0;
//   let result = Infinity;
//   for (let j = 0; j < nums.length; j++) {
//     const value = nums[j];
//     total = total + value;
//     while (total >= target) {
//       result = Math.min(result, j - i + 1);
//       total = total - nums[i];
//       i++;
//     }
//   }

//   return result === Infinity ? 0 : result;
// };

// console.log(minSubArrayLen());

//49.kadane logic
// -Given an array (may contain positive, negative, or zero), find the largest possible sum of any contiguous subarray.
// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; //The max subarray is [4, -1, 2, 1] → sum = 6.

// const kadane = (nums) => {
//   let currentSum = nums[0];
//   let maxSum = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     // extend or restart
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }

//   return maxSum;
// };

// // Example
// console.log(kadane([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(kadane([1])); // 1
// console.log(kadane([5, 4, -1, 7, 8])); // 23

// --------------**********--------Strings----------***************

//1.checkPalindrom
// let s = "aca";

// const checkPalindrom = () => {
//   let i = 0;
//   let j = s.length - 1;

//   const isPalindrom = (str, left, right) => {
//     while (left < right) {
//       if (str[left] !== str[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }
//     return true;
//   };

//   while (i < j) {
//     if (s[i] !== s[j]) {
//       return isPalindrom(s, i + 1, j) || isPalindrom(s, i, j - 1);
//     }
//     i++;
//     j--;
//   }
//   return true;
// };

// const outPut = checkPalindrom();
// console.log("outPut", outPut);

// 2. Last Word Length
// const sentence = "   Fly to the moon  ";
// const lastSentenceLength = (inputSentence) => {
//   let i = inputSentence.length - 1;
//   while (i >= 0) {
//     if (inputSentence[i] === " ") {
//       --i;
//     } else {
//       break;
//     }
//   }
//   let count = 0;
//   while (i >= 0) {
//     if (inputSentence[i] !== " ") {
//       count++;
//     } else {
//       break;
//     }
//     --i;
//   }
//   return count;
// };
// console.log(lastSentenceLength(sentence));

//Single Loop
// const sentence = "   Fly to the moon    ";

// const lastSentenceLength = (inputSentence) => {
//   let i = inputSentence.length - 1;
//   let count = 0;

//   while (i >= 0) {
//     if (inputSentence[i] !== " ") {
//       count++;
//     } else if (count > 0) {
//       break;
//     }
//     --i;
//   }

//   return count;
// };
// console.log(lastSentenceLength(sentence));

//3. Jewels and Stones
// const jewels = "aA";
// const stones = "aAAbbbCs";

// const stoneJewels = () => {
//   let jewelsCount = 0;
//   let stoneCount = {};
//   for (let i = 0; i < stones.length; i++) {
//     const value = stones[i];
//     stoneCount[value] = (stoneCount[value] || 0) + 1;
//   }

//   for (let i = 0; i < jewels.length; i++) {
//     const value = jewels[i];
//     jewelsCount = jewelsCount + stoneCount[value];
//   }
//   return jewelsCount;
// };
// console.log(stoneJewels());

//4.Max Vowel & Consonant Frequency
// const word = "successes";

// const freq = (inputSentence) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let seen = {};
//   for (let i = 0; i < inputSentence.length; i++) {
//     const value = inputSentence[i];
//     seen[value] = (seen[value] || 0) + 1;
//   }
//   let maxVowel = 0;
//   let maxConsonant = 0;
//   for (let key in seen) {
//     if (vowels.includes(key)) {
//       maxVowel = Math.max(maxVowel, seen[key]);
//     } else {
//       maxConsonant = Math.max(maxConsonant, seen[key]);
//     }
//   }
//   return [maxVowel, maxConsonant];
// };
// console.log(freq(word));

//5. Find Largest odd number
// const nums = "12345";

// const largestNumb = (inputNum) => {
//   let value = parseInt(inputNum);
//   let foundOdd = false;
//   while (value > 0) {
//     let digit = value % 10;
//     if (digit % 2 !== 0) {
//       foundOdd = true;
//       break;
//     }
//     value = Math.floor(value / 10);
//   }
//   if (foundOdd) {
//     console.log("Found odd digit:", value);
//   } else {
//     console.log("No odd digit found.");
//   }
// };
// largestNumb(nums);

//6. Longest Common Prefix
// const strs = ["flower", "fl", "floight"];

// const longestPrefix = (inputString) => {
//   let counter = 0;
//   while (counter < inputString[0].length) {
//     let ch = inputString[0][counter];
//     for (let i = 1; i < inputString.length; i++) {
//       if (ch !== inputString[i][counter]) {
//         return inputString[i].substring(0, counter);
//       }
//     }
//     counter++;
//   }
//   if (counter === inputString[0].length) {
//     return inputString[0];
//   }

// };
// console.log(longestPrefix(strs));

// 7. isAnagram
// const s = "anagraa";
// const t = "nagaram";
// const isAnagram = () => {
//   const seenA = {};
//   if (s.length !== t.length) {
//     return false;
//   }

//   for (let i = 0; i < s.length; i++) {
//     const value = s[i];
//     seenA[value] = (seenA[value] || 0) + 1;
//   }

//   for (let i = 0; i < t.length; i++) {
//     const value = t[i];
//     if (seenA[value] > 0) {
//       seenA[value] = seenA[value] - 1;
//     } else {
//       return false;
//     }
//   }

//   return true;
// };
// const outPut = isAnagram();
// console.log("oup", outPut);

//8.isIsomorphic
// const s = "paper";
// const t = "title";

// const isIsomorphic = (s, t) => {
//   if (s.length !== t.length) return false;

//   const mapST = {};
//   const mapTS = {};

//   for (let i = 0; i < s.length; i++) {
//     const charS = s[i];
//     const charT = t[i];

//     // If mapping exists, ensure it matches current char
//     if (
//       (mapST[charS] && mapST[charS] !== charT) ||
//       (mapTS[charT] && mapTS[charT] !== charS)
//     ) {
//       return false;
//     }

//     // Set the mapping
//     mapST[charS] = charT;
//     mapTS[charT] = charS;
//   }

//   return true;
// };
// console.log(isIsomorphic(s, t));

//9.Group Anagram
// const anagram = ["eat", "tea", "tan", "ate", "nat", "bat"];

// const grpAnagrams = (inputAnagram) => {
//   let seen = {};
//   for (let i = 0; i < inputAnagram.length; i++) {
//     let sortedString = inputAnagram[i].split("").sort().join("");
//     if (!seen[sortedString]) {
//       seen[sortedString] = [inputAnagram[i]];
//     } else {
//       seen[sortedString].push(inputAnagram[i]);
//     }
//   }
//   return Object.values(seen);
// };
// console.log(grpAnagrams(anagram));

//10.Reverse a String *****

// console.log(reverse("Gaurav"))

//11. reverseDigits
// function reverse(str){
// return str.split("").reduce((acc,item)=>item+acc,"")
// }

// let num = -123;
// const reverseDigits = (input) => {
//   let newNumber = 0;
//   let modNum = Math.abs(input);
//   while (modNum > 0) {
//     const lastDigit = modNum % 10;
//     newNumber = newNumber * 10 + lastDigit;
//     modNum = Math.floor(modNum / 10);
//   }
//   if (input < 0) {
//     newNumber = 0 - newNumber;
//   }
//   console.log("newNumber", newNumber);
// };
// reverseDigits(num);

//12. isPalindromeStr *****

// let sentence = "aascsaa";

// const checkPalindrom = (inputString) => {
//   let n = inputString.length - 1;
//   for (let i = 0; i <= n / 2; i++) {
//     const leftHand = inputString[i];
//     const rightHand = inputString[n - i];
//     if (leftHand !== rightHand) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(checkPalindrom(sentence));

// let num = 121;

// const palimdromcheck = (input) => {
//   let newNumber = 0;
//   let numCopy = input;
//   while (num > 0) {
//     const lastDigit = num % 10;
//     newNumber = newNumber * 10 + lastDigit;
//     num = Math.floor(num / 10);
//   }
//   console.log("IsPalinmdrom", numCopy === newNumber);
// };
// palimdromcheck(num);

// 13.Frequency counter ******
// let sentence="Gaurav"
// function Counter(sentence){
//   return sentence.split("").reduce((total, letter) => {
//     total[letter] ? total[letter]++ : total[letter] = 1;
//     return total;
//   }, {});
// };

// let newsentence=Counter(sentence)
//  console.log(newsentence)

//14.First Unique Character in a String *****
// let sentence="Gurav"
// var firstUniqChar = function(s) {
//     let frequency = {}

//     for (let char of s) {
//         frequency[char] ? frequency[char]++ : frequency[char] = 1
//     }
//     console.log(frequency);
//     // console.log(s[1]);
//     for (let key in frequency) {
//         if (frequency[key] === 1){
// return console.log(item);
// }
//     }
// };

//15.Remove Consecutive Characters
// let nums = "abcdddcba";
// const removeDups = () => {
//   let newString = "";
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     if (value !== nums[i + 1]) {
//       newString = newString + value;
//     }
//   }
//   return newString;
// };

// const outPut = removeDups();
// console.log("outPut", outPut);

//16.Reverse Words in a String
// let nums = `this is an amazing program`;

// const reverseWords = () => {
//   let newString = "";
//   let word = "";
//   let words = [];
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     if (value !== " ") {
//       word = word + value;
//     } else {
//       words.push(word);
//       word = "";
//     }
//   }
//   if (word.length > 0) {
//     words.push(word);
//   }
//   for (let i = words.length - 1; i >= 0; i--) {
//     const value = words[i];
//     newString = newString + " " + value;
//   }
//   return newString;
// };

// const outPut = reverseWords();
// console.log("outPut", outPut);

//17.countAndSay
// const countAndSay = (n) => {
//   if (n === 1) return "1";

//   let result = "1";
//   for (let i = 1; i < n; i++) {
//     let newString = "";
//     let count = 1;

//     for (let j = 0; j < result.length; j++) {
//       if (result[j] === result[j + 1]) {
//         count++;
//       } else {
//         newString = newString + count.toString() + result[j];
//         count = 1;
//       }
//     }
//     result = newString;
//   }
//   return result;
// };

// const outPut = countAndSay(5);
// console.log("outPut", outPut);

//18. Roman to Integer
// let nums = `XLII`;

// const romanToInt = () => {
//   const values = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };
//   let total = 0;
//   for (let i = 0; i < nums.length; i++) {
//     const currValue = values[nums[i]];
//     const nextValue = i + 1 < nums.length ? values[nums[i + 1]] : 0;

//     if (currValue < nextValue) {
//       total = total + (nextValue - currValue);
//       i++;
//     } else {
//       total = total + currValue;
//     }
//   }
//   return total;
// };

// const outPut = romanToInt();
// console.log("outPut", outPut);

//19.Compare Version
// let version1 = "1.01",
//   version2 = "1.001";

// const compareVersion = () => {
//   const v1Parts = version1.split(".").map(Number);
//   const v2Parts = version2.split(".").map(Number);
//   const maxLength = Math.max(v1Parts.length, v2Parts.length);
//   for (let i = 0; i < maxLength; i++) {
//     const first = v1Parts[i] || 0;
//     const second = v2Parts[i] || 0;
//     if (first < second) return -1;
//     if (first > second) return 1;
//   }
//   return 0;
// };

// const outPut = compareVersion();
// console.log("outPut", outPut);

// --------------**********--------Recursion----------***************

//1.Factorial *****
// const factorial = (number) => {
//   if (number === 0 || number === 1) {
//     return 1;
//   }
//   let product = 1;
//   for (let i = 1; i <= number; i++) {
//     product = product * i;
//   }
//   return product;
// };
// console.log(factorial(5));

// const factorial = (n) => {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// };

// --------------**********--------Two-Pointer----------***************

//1.isSubsequent
// const first = "abc";
// const second = "ahbgdc";
// const isSubsequent = () => {
//   let j = 0;
//   for (let i = 0; i < second.length; i++) {
//     const value = second[i];
//     if (first[j] === value) {
//       j++;
//     }
//   }
//   return j === first.length;
// };

//2. Boats to Save People
// let people = [5, 1, 4, 2],
//   limit = 6;
// const numRescueBoats = () => {
//   let i = 0;
//   let j = people.length - 1;
//   let boat = 0;
//   people.sort((a, b) => a - b);
//   while (i <= j) {
//     const sum = people[i] + people[j];

//     if (sum <= limit) {
//       boat++;
//       i++;
//       j--;
//     } else {
//       boat++;
//       j--;
//     }
//   }
//   console.log("peopel", people);
//   return boat;
// };

// const outPut = numRescueBoats();
// console.log("outPut", outPut);

//3.Most water
// const nums = [1, 8, 6, 2, 5, 4, 8, 9, 7];

// const mostWater = (inputArray) => {
//   let maxVolume = 0;
//   let left = 0;
//   let right = inputArray.length - 1;
//   while (left < right) {
//     const height = Math.min(inputArray[left], inputArray[right]);
//     const width = right - left;
//     const volume = height * width;
//     maxVolume = Math.max(maxVolume, volume);
//     if (inputArray[left] < inputArray[right]) {
//       left++;
//     } else {
//       right--;
//     }
//   }
//   return maxVolume;
// };

// mostWater(nums);

//4.longestSubString
// const test = "abcabcebb";

// const longestSubString = (inputString) => {
//   let i = 0;
//   let maxLength = 0;
//   let seen = {};
//   for (let j = 0; j < inputString.length; j++) {
//     const value = inputString[j];
//     if (seen[value] !== undefined && seen[value] >= i) {
//       i = seen[value] + 1;
//     }
//     maxLength = Math.max(maxLength, j - i + 1);

//     seen[value] = j;
//   }
//   return maxLength;
// };

//5.longestRepeatingChar
// const sample = "aabeafaabeafa";
// const k = 2;
// const longestRepeatingChar = (inputString) => {
//   let i = 0;
//   let seen = {};
//   let maxFreq = 0;
//   let maxLength = 0;
//   for (let j = 0; j < inputString.length; j++) {
//     const rightChar = inputString[j];
//     seen[rightChar] = (seen[rightChar] || 0) + 1;
//     maxFreq = Math.max(maxFreq, seen[rightChar]);
//     while (j - i + 1 - maxFreq > k) {
//       const leftChar = inputString[i];
//       seen[leftChar]--;
//       i++;
//     }
//     maxLength = Math.max(maxLength, j - i + 1);
//   }
//   return maxLength;
// };
// console.log("maxWindow", longestRepeatingChar(sample));

// ----------xxxxxxxx-----Binary Search------xxxxxxxxxxx----------
// Binary Search

// | Loop Condition   | Use When You Want To…                              | Typical Use Case                      |
// | ---------------- | -------------------------------------------------- | ------------------------------------- |
// | `while (i <= j)` | Search for exact match, access both i and j        | Classic binary search                 |
// | `while (i < j)`  | Narrow search space to one element (left == right) | Search boundaries (lower/upper bound) |

// | Scenario                       | Condition to Use | Why?                                    |
// | ------------------------------ | ---------------- | --------------------------------------- |
// | Looking for exact value        | `i <= j`         | Need to check all possible indices      |
// | Looking for position/insertion | `i < j`          | Narrow to one index (e.g., lower bound) |

//1.searchInsertPosition
// // let nums = [-1, 0, 2, 4, 6, 8],
//   target = 10;
// const searchInsert = () => {
//   let i = 0;
//   let j = nums.length - 1;
//   while (i <= j) {
//     let mid = Math.floor((i + j) / 2);
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       i = mid + 1;
//     } else {
//       j = mid - 1;
//     }
//   }
//   return i;
// };

// const outPut = searchInsert();
// console.log("outPut", outPut);

//2.sqrRoot
// const nums = 39;
// const sqrRoot = (inputNum) => {
// if(inputNum<2) return inputNum
//   let i = 0;
//   let j = inputNum; or Math.floor(inputNum / 2);
//   let ans;
//   while (i <= j) {
//     let mid = Math.floor((i + j) / 2);
//     let sqr = mid * mid;

//     if (sqr <= inputNum) {
//       ans = mid;
//       i = mid + 1;
//     } else if (sqr > inputNum) {
//       j = mid - 1;
//     }
//   }
//   return ans;
// };
// console.log("test", sqrRoot(nums));

//3.firstBadVersion
// const nums = 20;
// const bad = 19;

// const isBad = (checkBad) => {
//   return checkBad >= bad;
// };

// const firstBadVersion = (inputNum) => {
//   let i = 0;
//   let j = inputNum;
//   let firstVersion;
//   while (i <= j) {
//     let mid = Math.floor((i + j) / 2);
//     if (!isBad(mid)) {
//       i = mid + 1;
//     } else {
//       j = mid - 1;
//       firstVersion = mid;
//     }
//   }
//   return firstVersion;
// };
// console.log("test", firstBadVersion(nums));

//4.findPeak
// const nums = [1, 2, 1, 3, 15, 5];

// const findPeak = (inputArray) => {
//   let i = 0;
//   let j = inputArray.length - 1;

//   let ans;
//   while (i < j) {
//     let mid = Math.floor((i + j) / 2);
//     if (inputArray[mid + 1] > inputArray[mid]) {
//       i = mid + 1;
//     } else {
//       j = mid;
//     }
//   }

//   return i;
// };
// console.log("test", findPeak(nums));

//5.firstAndLastPosition
// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;

// const firstAndLastPosition = (inputArray) => {
//   let first = firstPosition(inputArray);
//   let last = lastPosition(inputArray);
//   return [first, last];
// };

// const firstPosition = (inputArray) => {
//   let i = 0;
//   let j = inputArray.length - 1;
//   let first = -1;
//   while (i <= j) {
//     let mid = Math.floor((i + j) / 2);
//     let value = inputArray[mid];
//     if (value === target) {
//       first = mid;
//       j = mid - 1;
//     } else if (value < target) {
//       i = mid + 1;
//     } else {
//       j = mid - 1;
//     }
//   }
//   return first;
// };

// const lastPosition = (inputArray) => {
//   let i = 0;
//   let j = inputArray.length - 1;
//   let last = -1;
//   while (i <= j) {
//     let mid = Math.floor((i + j) / 2);
//     let value = inputArray[mid];
//     if (value === target) {
//       last = mid;
//       i = mid + 1;
//     } else if (value < target) {
//       i = mid + 1;
//     } else {
//       j = mid - 1;
//     }
//   }
//   return last;
// };

// console.log("test", firstAndLastPosition(nums));

//6.findClosestElements
// const sample = [1, 2, 3, 4, 4, 5, 5, 6, 7];
// const k = 4;
// const x = 5;

// const findClosestElements = (inputArray) => {
//   let i = 0;
//   let j = inputArray.length - k;

//   while (i < j) {
//     let mid = Math.floor((i + j) / 2);
//     const leftHand = Math.abs(x - inputArray[mid]);
//     const righHand = Math.abs(x - inputArray[mid + k]);
//     if (leftHand <= righHand) {
//       j = mid;
//     } else {
//       i = mid + 1;
//     }
//   }
//   return sample.slice(i, i + k);
// };

// console.log("outPut", findClosestElements(sample));

//9. KoKo Eating Banana
// let piles = [30,11,23,4,20], h = 6
// const eatingSpeed = () => {
//   let low = 1;
//   let high = Math.max(...piles);
//   let result = 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     let totalTime = 0;
//     for (let i = 0; i < piles.length; i++) {
//       const value = piles[i];
//       let time = Math.ceil(value / mid);
//       totalTime = totalTime + time;
//     }

//     if (totalTime <= h) {
//       result = mid;
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return result;
// };
// or
// while (i <= j) {
//   let mid = Math.floor((i + j) / 2);

//   let counter = 0;
//   for (let k = 0; k < piles.length; k++) {
//     let value = piles[k];

//     while (value > 0) {
//       value = value - mid;
//       counter++;
//     }
//   }
//   if (counter <= h) {
//     ans = mid;
//     j = mid - 1;
//   } else {
//     i = mid + 1;
//   }
// }
// const outPut = eatingSpeed();
// console.log("outPut", outPut);

//10.Capacity to Ship Packages Within D Days
// let weights = [1, 2, 3, 4, 5];
// days = 5;
// const capacity = () => {
//   let low = Math.max(...weights);
//   let high = weights.reduce((acc, item) => acc + item);
//   let result = high;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     let counter = 1;
//     let sum = 0;

//     for (let i = 0; i < weights.length; i++) {
//       const value = weights[i];

//       if (sum + value > mid) {
//         sum = 0;
//         counter++;
//       }
//       sum = sum + value;
//     }

//     if (counter <= days) {
//       result = mid;
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }

//   return result;
// };

// const outPut = capacity();
// console.log("outPut", outPut);

//11. Arranging Coins
// let n = 5;
// const currFunction = () => {
//   let low = 0;
//   let high = n;
//   let result = 0;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     let coinsNeeded = (mid * (mid + 1)) / 2;
//     if (coinsNeeded <= n) {
//       result = mid;
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return result;
// };

// const outPut = currFunction();
// console.log("outPut", outPut);

//12.Single Element
// const nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

// const singleElement = (inputArray) => {
//   let i = 0;
//   let j = inputArray.length - 1;
//   while (i < j) {
//     let mid = Math.floor((i + j) / 2);
//     if (mid % 2 === 1) {
//       mid--;
//     }
//     if (inputArray[mid] === inputArray[mid + 1]) {
//       i = mid + 2;
//     } else {
//       j = mid;
//     }
//   }

//   return inputArray[i];
// };

// console.log("test", singleElement(nums));

//13. Search in Rotated Sorted Array
// const nums = [3, 4, 5, 6, 1, 2],
//   target = 1;

// const searchRotated = () => {
//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] === target) return mid;

//     if (nums[left] <= nums[mid]) {
//       if (target >= nums[left] && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     } else {
//       if (target > nums[mid] && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }
// };

// console.log(searchRotated());

//14.needle and HayStack
// const needle = "sad";
// const hayStack = "sabutsaad";

// const firstOccurance = (needle, hayStack) => {
//   let windowLength = needle.length;

//   for (let i = 0; i <= hayStack.length - windowLength; i++) {
//     let j = 0;

//     while (j < windowLength && needle[j] === hayStack[i + j]) {
//       j++;
//     }

//     if (j === windowLength) {
//       return i;
//     }
//   }
//   return -1;
// };
// console.log("Res", firstOccurance(needle, hayStack));

//15. Find Minimum in Rotated Sorted Array
// const nums = [4, 5, 0, 1, 2, 3];

// const findMin = () => {
//   let left = 0;
//   let right = nums.length - 1;
//   let minValue = Infinity;

//   while (left <= right) {
//     // if the subarray is already sorted
//     if (nums[left] <= nums[right]) {
//       minValue = Math.min(minValue, nums[left]);
//       break;
//     }

//     let mid = Math.floor((left + right) / 2);
//     minValue = Math.min(minValue, nums[mid]);

//     if (nums[mid] >= nums[left]) {
//       // left half is sorted → min must be in right half
//       left = mid + 1;
//     } else {
//       // right half is sorted → min must be in left half
//       right = mid;
//     }
//   }

//   return minValue;
// };

// console.log(findMin()); // 0

// ----------xxxxxxxx-----Stack & Queue------xxxxxxxxxxx----------

//1.Stack Implementation
// class Stack {
//   constructor() {
//     this.items = []; // Use array internally
//   }

//   // Push element to stack
//   push(element) {
//     this.items.push(element);
//   }

//   // Pop element from stack
//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items.pop();
//   }

//   // Peek top element
//   peek() {
//     if (this.isEmpty()) {
//       return "Stack is empty";
//     }
//     return this.items[this.items.length - 1];
//   }

//   // Check if stack is empty
//   isEmpty() {
//     return this.items.length === 0;
//   }

//   // Print entire stack
//   printStack() {
//     console.log(this.items.join(" "));
//   }
// }

// // 🔥 Example Usage
// const stack = new Stack();

// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.printStack(); // Output: 10 20 30
// console.log("Top element:", stack.peek()); // Output: 30
// console.log("Popped:", stack.pop()); // Output: 30
// stack.printStack(); // Output: 10 20

//2.Queue Implementation
// class Queue {
//   constructor() {
//     this.items = [];
//   }

//   enqueue(val) {
//     this.items.push(val);
//   }

//   dequeue() {
//     return this.items.length === 0 ? null : this.items.shift();
//   }

//   peek() {
//     return this.items.length === 0 ? null : this.items[0];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }
// }

// const newQueue = new Queue();
// newQueue.enqueue(10);
// console.log("newQ", newQueue);

//3. Implement Stack with 2 Queues
// class Stack {
//   constructor() {
//     this.queueA = [];
//     this.queueB = [];
//   }
//   push(inputItem) {
//     this.queueA.push(inputItem);
//   }
//   pop() {
//     const length = this.queueA.length;
//     for (let i = 0; i < length - 1; i++) {
//       const element = this.queueA.shift();
//       this.queueB.push(element);
//     }
//     this.queueA.shift();
//     const temp = this.queueA;
//     this.queueA = this.queueB;
//     this.queueB = temp;
//   }

//   peek() {
//     const length = this.queueA.length;
//     for (let i = 0; i < length - 1; i++) {
//       const element = this.queueA.shift();
//       this.queueB.push(element);
//     }
//     const element = this.queueA.shift();
//     this.queueB.push(element);

//     const temp = this.queueA;
//     this.queueA = this.queueB;
//     this.queueB = temp;
//     return element;
//   }
//   isEmpty() {
//     const length = this.stack.length;
//     if (length === 0) {
//       return true;
//     }
//     return false;
//   }
//   printStack() {}
// }

// const newStack = new Stack();
// newStack.push(5);
// newStack.push(15);
// newStack.push(35);
// newStack.push(54);
// newStack.pop();
// console.log("peek", newStack.peek());

// console.log("stack", newStack);

//4.Implement Stack with 1 queue
// class Stack {
//   constructor() {
//     this.queueA = [];
//   }
//   push(inputItem) {
//     this.queueA.push(inputItem);
//   }
//   pop() {
//     const length = this.queueA.length;
//     for (let i = 0; i < length - 1; i++) {
//       const element = this.queueA.shift();
//       this.queueA.push(element);
//     }
//     this.queueA.shift();
//   }

//   peek() {
//     const length = this.queueA.length;
//     for (let i = 0; i < length - 1; i++) {
//       const element = this.queueA.shift();
//       this.queueA.push(element);
//     }
//     const element = this.queueA.shift();
//     this.queueA.push(element);

//     return element;
//   }
//   isEmpty() {
//     const length = this.queueA.length;
//     if (length === 0) {
//       return true;
//     }
//     return false;
//   }
//   printStack() {}
// }

// const newStack = new Stack();
// newStack.push(5);
// newStack.push(15);
// newStack.push(35);
// newStack.push(54);
// newStack.pop();
// console.log("peek", newStack.peek());

// console.log("stack", newStack);

//5.Implementation Queue using 2 Stack
// class QueueUsingStacks {
//   constructor() {
//     this.inStack = [];
//     this.outStack = [];
//   }

//   // Add element to the queue
//   enqueue(x) {
//     this.inStack.push(x);
//   }

//   // Remove element from the queue
//   dequeue() {
//     if (this.outStack.length === 0) {
//       while (this.inStack.length > 0) {
//         this.outStack.push(this.inStack.pop());
//       }
//     }
//     return this.outStack.pop();
//   }

//   // Peek front element
//   peek() {
//     if (this.outStack.length === 0) {
//       while (this.inStack.length > 0) {
//         this.outStack.push(this.inStack.pop());
//       }
//     }
//     return this.outStack[this.outStack.length - 1];
//   }
// }
// const q = new QueueUsingStacks();

// q.enqueue(10);
// q.enqueue(20);
// q.enqueue(30);

// console.log(q.dequeue()); // 10
// console.log(q.peek()); // 20
// console.log(q.dequeue()); // 20

//6.isValidParentheses
// const sample = "({[]})";

// const isValidParentheses = (inputValue) => {
//   let stack = [];
//   const map = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };
//   for (let i = 0; i < inputValue.length; i++) {
//     const value = inputValue[i];
//     if (map[value]) {
//       stack.push(value);
//     } else {
//       const top = stack.pop();
//       if (!top || map[top] != value) {
//         return false;
//       }
//     }
//   }
//   return stack.length === 0;
// };
// console.log("isValid", isValidParentheses(sample));

//7.Remove Outermost Parentheses Without Stack
// const sample = "(()())(())(()(()))";

// const isValid = (inputValue) => {
//   let result = "";
//   let balance = 0;
//   for (let i = 0; i < sample.length; i++) {
//     const char = sample[i];
//     if (char === "(") {
//       if (balance > 0) {
//         result = result + char;
//       }
//       balance++;
//     } else {
//       balance--;
//       if (balance > 0) {
//         result = result + char;
//       }
//     }
//   }
//   return result;
// };
// console.log(isValid(sample));

//8.Remove Outermost Parentheses With Stack
// function removeOuterParentheses(s) {
//   const stack = [];
//   let result = "";

//   for (const char of s) {
//     if (char === "(") {
//       if (stack.length > 0) {
//         result += char; // not outermost
//       }
//       stack.push("(");
//     } else {
//       stack.pop();
//       if (stack.length > 0) {
//         result += char; // not outermost
//       }
//     }
//   }

//   return result;
// }

//9.Evaluate Reverse Polish Notation
// const tokens =["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
// const evalRPN = (inputValue) => {
//   let result = 1;
//   let stack = [];
//   let operations = ["+", "*", "/"];
//   for (let i = 0; i < inputValue.length; i++) {
//     const value = inputValue[i];

//     if (operations.includes(value)) {
//       const num1 = stack.pop();
//       const num2 = stack.pop();
//       let result;
//       switch (value) {
//         case "+":
//           result = num1 + num2;
//           break;
//         case "-":
//           result = num1 - num2;
//           break;
//         case "*":
//           result = num1 * num2;
//           break;
//         case "/":
//           result = Math.trunc(num2 / num1);
//           break;
//       }
//       stack.push(result);
//     } else {
//       stack.push(parseInt(value));
//     }
//   }
//   return stack.pop();
// };
// console.log(evalRPN(tokens));

//10.nextGrtElement
// const nums1 = [2, 3],
//   nums2 = [1, 2, 3, 4];
// const nextGrtElement = () => {
//   let stack = [];
//   let seen = {};

//   for (let i = nums2.length - 1; i >= 0; i--) {
//     const value = nums2[i];
//     while (stack.length > 0 &&  value >=stack[stack.length - 1]) {
//       stack.pop();
//     }
//     seen[value] = stack.length === 0 ? -1 : stack[stack.length - 1];
//     stack.push(value);
//   }
//   return nums1.map((item) => seen[item]);
// };
// console.log(nextGrtElement());

//11.nextGrtElement Circular
// const nums1 = [1, 2, 3, 4, 3];
// const nextGrtElement = () => {
//   let stack = [];
//   let result = [];
//   const originalLength = nums1.length;
//   const searchWindow = [...nums1, ...nums1];
//   for (let i = searchWindow.length - 1; i >= 0; i--) {
//     const value = searchWindow[i];
//     while (stack.length > 0 && value >= stack[stack.length - 1]) {
//       stack.pop();
//     }
//     result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
//     stack.push(value);
//   }

//   result.length = originalLength;
//   return result;
// };
// console.log(nextGrtElement());

//12.nextSmallestElement
// const nums1 = [4, 8, 5, 2, 25];
// const nextSmallest = () => {
//   let stack = [];
//   let result = [];
//   for (let i = nums1.length - 1; i >= 0; i--) {
//     const value = nums1[i];
//     while (result.length > 0 && value < stack[stack.length - 1]) {
//       stack.pop();
//     }

//     result[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
//     stack.push(value);
//   }

//   return result;
// };
// console.log(nextSmallest());

//13.Daily Temperature
// const temperature = [73, 74, 75, 71, 69, 72, 76, 73];
// const dailyTemp = () => {
//   let stack = [];
//   let result = [];
//   for (let i = temperature.length - 1; i >= 0; i--) {
//     const value = temperature[i];
//     while (stack.length > 0 && value >= temperature[stack[stack.length - 1]]) {
//       stack.pop();
//     }
//     result[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i;
//     stack.push(i);
//   }

//   return result;
// };
// console.log(dailyTemp());

//14.Sort Stack
// const nums1 = [10, 20, -5, 7, 15];
// const sortedStack = () => {
//   let helper = [];
//   let result = [];
//   for (let i = nums1.length - 1; i >= 0; i--) {
//     const value = nums1[i];
//     while (result.length > 0 && value > result[result.length - 1]) {
//       const element = result.pop();
//       helper.push(element);
//     }
//     result.push(value);
//     while (helper.length > 0) {
//       const element = helper.pop();
//       result.push(element);
//     }
//   }

//   return result;
// };
// console.log(sortedStack());

//15.Baseball Game
// const nums1 = ["1", "2", "+", "C", "5", "D"];

// const scoreTotal = () => {
//   let stack = [];
//   let sum = 0;

//   for (let i = 0; i < nums1.length; i++) {
//     const value = nums1[i];
//     switch (value) {
//       case "+":
//         const secondNum = stack.pop();
//         const firstNum = stack.pop();
//         const result = firstNum + secondNum;
//         stack.push(firstNum);
//         stack.push(secondNum);
//         stack.push(result);

//         break;
//       case "C":
//         stack.pop();
//         break;
//       case "D":
//         const prev = stack.pop();
//         stack.push(prev);
//         stack.push(prev * 2);
//         break;
//     }
//     if (value !== "+" && value !== "C" && value !== "D") {
//       stack.push(parseInt(value));
//     }
//   }
//   while (stack.length > 0) {
//     const top = stack.pop();
//     sum = sum + top;
//   }
//   return sum;
// };
// console.log(scoreTotal());

//16. Asteroid Collision
// const asteroidCollision = [2, 4, -4, -1];
// const isValid = () => {
//   let stack = [];
//   for (let i = 0; i < asteroids.length; i++) {
//     let value = asteroids[i];
//     while (stack.length > 0 && value < 0 && stack[stack.length - 1] > 0) {
//       let diff = stack[stack.length - 1] + value;
//       if (diff === 0) {
//         value = 0;
//         stack.pop();
//       } else if (diff < 0) {
//         stack.pop();
//       } else {
//         value = 0;
//       }
//     }
//     value !== 0 && stack.push(value);
//   }
//   return stack;
// };
// console.log(asteroidCollision());

//17.Car Fleet
// const target = 10,
//   position = [4, 1, 0, 7],
//   speed = [2, 2, 1, 1];
// const carFleet = () => {
//   const cars = position.map((item, index) => {
//     return [item, speed[index]];
//   });
//   cars.sort((a, b) => b[0] - a[0]);

//   let fleets = 0;
//   let leadTime = 0;

//   for (let i = 0; i < position.length; i++) {
//     const [pos, spd] = cars[i];
//     const time = (target - pos) / spd;

//     if (time > leadTime) {
//       fleets++;
//       leadTime = time;
//     }
//   }
//   return fleets;
// };
// console.log(carFleet());

//18.Simplify Path
// const path = "/..//_home/a/b/..///";
// const simplifyPath = () => {
//   let stack = [];
//   const pathArray = path.split("/");
//   for (let i = 0; i < pathArray.length; i++) {
//     const value = pathArray[i];

//     if (value === "..") {
//       if (stack.length > 0) stack.pop();
//     } else if (value !== "" && value !== ".") {
//       stack.push(value);
//     }
//   }

//   return "/" + stack.join("/");
// };
// console.log(simplifyPath());

// ----------xxxxxxxx-----Linked List------xxxxxxxxxxx----------

//1.Create a new Linked List Node

// function Node(val) {
//   this.value = val;
//   this.next = null;
// }
// let newNode=new Node(5)
// newNode.next = new Node(2);

// Get value by index
// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);
// head.next.next.next.next = new Node(50);

// const getValue = 4;
// let currentValue = head;
// let counter = 0;

// while (counter !== getValue) {
//   currentValue = currentValue.next;
//   counter++;
// }

// console.log("currentValue", currentValue.value);

//2.convertArrayToLinkedList
// const convertArrayToLinkedList = (arr) => {
//   if (arr.length === 0) return null; // empty array, no linked list

//   const head = new Node(arr[0]); // first element becomes head
//   let current = head; // current pointer to build the list

//   for (let i = 1; i < arr.length; i++) {
//     current.next = new Node(arr[i]); // create new node and attach
//     current = current.next; // move current to the new node
//   }

//   return head; // return the head of the Linked List
// };
// const array = [10, 20, 30, 40];
// const linkedList = convertArrayToLinkedList(array);

//3.Add in a Linked List

//At at head
// const newValue = new Node(11);
// newValue.next = head;
// head = newValue;

// console.log("head", head);

//At End
// const newValue = new Node(11);

// let currentValue = head;
// if (head === null) {
//   head = newValue;
// } else {
// while (currentValue.next) {
//   currentValue = currentValue.next;
// }
// currentValue.next = newValue;
// }

// console.log("currentValue", currentValue);
// console.log("head", head);

//At specific point
// const newValue = new Node(11);
// const position = 3;

// let currentValue = head;
// let counter = 0;
// if (position === 0) {
//   newValue.next = head;
//   head = newValue;
// } else {
// while (counter !== position - 1) {
//   currentValue = currentValue.next;
//   counter++;
// }
// newValue.next = currentValue.next;
// currentValue.next = newValue;
// }
// console.log("currentValue", currentValue);
// console.log("head", head);

//4.Delete a Node

// At head
// head = head.next;
// console.log("head", head);

// At End
// let currentValue = head;
// while (currentValue.next.next) {
//   currentValue = currentValue.next;
// }
// currentValue.next = null;
// console.log("currentValue", currentValue);
// console.log("head", head);

// By Value
// const deleteValue = 10;
// let currentValue = head;
// if (currentValue.value === deleteValue) {
//   head = currentValue.next;
// } else {
//   while (currentValue.next.value !== deleteValue) {
//     currentValue = currentValue.next;
//   }
//   currentValue.next = currentValue.next.next;
// }
// console.log("currentValue", currentValue);
// console.log("head", head);

// At specific position
// const position = 2;
// let counter = 0;
// let currentValue = head;
// while (counter !== position - 1) {
//   currentValue = currentValue.next;
//   counter++;
// }
// currentValue.next = currentValue.next.next;
// console.log("currentValue", currentValue);
// console.log("head", head);

//5.Print Linked List
// const printList = (node) => {
//   let output = [];
//   while (node) {
//     output.push(node.value);
//     node = node.next;
//   }
//   console.log(`Linked List:`, output.join(" -> "));
// };

//6.Length of linked list

// const lengthOfLinkedList = (head) => {
//   let count = 0;
//   let current = head;

//   while (current !== null) {
//     count++;
//     current = current.next;
//   }

//   console.log("Length of linked list:", count);
// };

//7.Search in linked list
// const searchLinkedList = (head, target) => {
//   let current = head;
//   while (current !== null) {
//     if (current.val === target) {
//       return true; // Found
//     }
//     current = current.next; // Move to next node
//   }
//   return false; // Not found
// };

//8.Middle of Node
// let slow = head;
// let fast = head;

// while (fast && fast.next) {
//   slow = slow.next;
//   fast = fast.next.next;
// }
// console.log("Middle", slow);

//9.Reverse Linked List
// let previous = null;
// let currentNode = head;

// while (currentNode) {
//   let currentNext = currentNode.next;
//   currentNode.next = previous;
//   previous = currentNode;
//   currentNode = currentNext;
// }
// head = previous;
// console.log("head", head);

//10.Check Cyclic Linked List
// let head = new Node(10);
// head.next = new Node(20);
// head.next.next = new Node(30);
// head.next.next.next = new Node(40);
// head.next.next.next.next = new Node(50);
// head.next.next.next.next.next = new Node(60);
// head.next.next.next.next.next.next = head.next.next;

// const checkCycle = () => {
//   const newSet = new Set();
//   let currentValue = head;
//   while (currentValue) {
//     if (newSet.has(currentValue)) {
//       return true;
//     }
//     newSet.add(currentValue);
//     currentValue = currentValue.next;
//   }
//   return false;
// };

// console.log("checkCycle", test());

// const checkCycle = () => {
//   let slow = head;
//   let fast = head;
//   while (slow !== fast) {
//     if (fast === null || fast.next === null) {
//       return false;
//     }
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return true;
// };

// console.log("checkCycle", checkCycle());

//11.Palindrom Linked List

// const checkPalindrom = () => {
//   if (!head || !head.next) return true;

//   //Find Middle
//   let slow = head;
//   let fast = head;

//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   //Reverse second half
//   let prev = null;
//   let curr = slow;
//   while (curr) {
//     let temp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = temp;
//   }

//   //Check Palindrom
//   let firstLink = head;
//   let secondLink = prev;
//   while (secondLink) {
//     if (firstLink.value !== secondLink.value) {
//       return false;
//     }
//     firstLink = firstLink.next;
//     secondLink = secondLink.next;
//   }
//   return true;
// };

// console.log("checkPalindrom", checkPalindrom());

//// 12.Intersection
// const findIntersectionNode = () => {
//   let newSet = new Set();
//   let currB = headB;
//   let currA = headA;
//   while (currB) {
//     newSet.add(currB);
//     currB = currB.next;
//   }
//   while (currA) {
//     if (newSet.has(currA)) {
//       return currA.value;
//     }
//     currA = currA.next;
//   }
//   return "No Intersection";
// };

// console.log("findIntersectionNode", findIntersectionNode());

// const findIntersectionNode = () => {
//   let a = headA;
//   let b = headB;
//   while (a !== b) {
//     a = a ? a.next : headB;
//     b = b ? b.next : headA;
//   }
//   return a;
// };

// console.log("curr", findIntersectionNode());

//13.RemoveElements
// const removeValue = 20;
// const RemoveElements = () => {
//   let dummy = new Node(0);
//   dummy.next = headA;
//   let curr = dummy;
//   while (curr.next) {
//     if (curr.next.val === removeValue) {
//       curr.next = curr.next.next;
//     } else {
//       curr = curr.next;
//     }
//   }

//   return dummy.next;
// };

// console.log("curr", RemoveElements());

//14. Remove Nth Node From End
// const removeNthNodeFromEnd = (inputNumber) => {
//   let dummy = new Node(0);
//   dummy.next = headA;
//   let slow = dummy;
//   let fast = dummy;
//   let counter = inputNumber;
//   while (counter > 0) {
//     fast = fast.next;
//     counter--;
//   }

//   while (fast.next) {
//     slow = slow.next;
//     fast = fast.next;
//   }
//   slow.next = slow.next.next;

//   return dummy.next;
// };
// console.log("result", removeNthNodeFromEnd(3));

//15.Remove Duplicate From Sorted List
// const removeDuplicates = () => {
//   let dummy = new Node(0);
//   dummy.next = headA;
//   let curr = dummy;
//   while (curr && curr.next) {
//     if (curr.val === curr.next.val) {
//       curr.next = curr.next.next;
//     }
//     curr = curr.next;
//   }
//   return dummy.next;
// };

// console.log("result", removeDuplicates());

//16.Odd Even Node
// const oddEvenNode = () => {
//   if (!head || !head.next) return head;
//   let odd = head;
//   let even = head.next;
//   let evenHead = even;
//   while (even && even.next) {
//     odd.next = even.next;
//     odd = odd.next;

//     even.next = odd.next;
//     even = even.next;
//   }
//   odd.next = evenHead;
//   return head;
// };

// console.log("result", oddEvenNode());

//17.Rotate Node right side
// const rotateTimes = 2;
// const rotateNode = () => {
//   if (!head || !head.next) return head;
//   let linkLength = 1;
//   let curr = head;
//   while (curr.next) {
//     curr = curr.next;
//     linkLength++;
//   }
//   console.log("ll", linkLength);
//   let rotate = rotateTimes % linkLength;
//   let newTail = head;
//   let stepToNewHead = linkLength - rotate;
//   for (let i = 1; i < stepToNewHead; i++) {
//     newTail = newTail.next;
//   }

//   const newHead = newTail.next;
//   newTail.next = null;
//   curr.next = head;

//   return newHead;
// };

// console.log("result", rotateNode());

//18.merge Two Sorted Nodes

// const mergeTwoSortedNodes = () => {
//   let newHead = new Node(0);
//   let dummy = newHead;
//   let currA = headA;
//   let currB = headB;
//   while (currA && currB) {
//     if (currA.value < currB.value) {
//       dummy.next = currA;
//       currA = currA.next;
//     } else {
//       dummy.next = currB;
//       currB = currB.next;
//     }
//     dummy = dummy.next;
//   }

// if (!currA) {
//   dummy.next = currB;
// }
// if (!currB) {
//   dummy.next = currA;
// }
//   return newHead.next;
// };

//19.Add Two Numbers
// const addTwonumbers = () => {
//   let newHead = new Node(0);
//   let curr = newHead;
//   let currA = headA;
//   let currB = headB;
//   let carryForward = 0;
//   let unitDigit;
//   while (currA || currB || carryForward > 0) {
//     let sum = (currA?.val || 0) + (currB?.val || 0) + carryForward;

//     unitDigit = sum % 10;
//     carryForward = Math.floor(sum / 10);
//     curr.next = new Node(unitDigit);
//     curr = curr.next;
//     currA = currA?.next;
//     currB = currB?.next;
//   }
//   return newHead.next;
// };

// console.log("result", addTwonumbers());

//20.findStartingPoint
// const findStartingPoint = () => {
//   if (!head || !head.next) return null;

//   let slow = head;
//   let fast = head;
//   // Phase 1: detect cycle
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       // Phase 2: find cycle start
//       let pointer1 = head;
//       let pointer2 = slow;

//       while (pointer1 !== pointer2) {
//         pointer1 = pointer1.next;
//         pointer2 = pointer2.next;
//       }

//       return pointer1; // start of cycle
//     }
//   }

//   return null; // no cycle
// };

//21.reorderList https://neetcode.io/problems/reorder-linked-list?list=neetcode250
// const reorderList = () => {
//   if (!head || !head.next) return head;

//   // Step 1: find middle
//   let slow = head,
//     fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }

//   // Step 2: reverse second half
//   let prev = null,
//     curr = slow.next;
//   slow.next = null; // cut first half
//   while (curr) {
//     let nextTemp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = nextTemp;
//   }

//   // Step 3: merge halves
//   let first = head,
//     second = prev;
//   while (second) {
//     let tmp1 = first.next;
//     let tmp2 = second.next;

//     first.next = second;
//     second.next = tmp1;

//     first = tmp1;
//     second = tmp2;
//   }

//   return head;
// };

//22.reverseBetween --https://neetcode.io/problems/reverse-linked-list-ii?list=neetcode250

// const reverseBetween = (head, left, right) => {
//   if (!head || left === right) return head;

//   // Step 1: dummy node
//   let dummy = new Node(0);
//   dummy.next = head;
//   let prev = dummy;

//   // Step 2: move prev to (left - 1)
//   for (let i = 1; i < left; i++) {
//     prev = prev.next;
//   }

//   // Step 3: reverse sublist
//   let curr = prev.next;
//   let next = null;
//   let lastUnreversed = prev; // node before left
//   let firstReversed = curr; // node at left (will be tail after reversal)

//   for (let i = 0; i < right - left + 1; i++) {
//     next = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = next;
//   }

//   // Step 4: reconnect
//   lastUnreversed.next = prev; // prev is now head of reversed sublist
//   firstReversed.next = curr; // connect tail of reversed sublist to rest

//   return dummy.next;
// };

// ----------xxxxxxxx-----Trees------xxxxxxxxxxx----------

// 1.Create a tree
// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// function buildBinaryTree(arr) {
//   if (!arr.length || arr[0] == null) return null;

//   const root = new TreeNode(arr[0]);
//   const queue = [root];
//   let i = 1;

//   while (queue.length > 0 && i < arr.length) {
//     const current = queue.shift();

//     if (i < arr.length && arr[i] != null) {
//       current.left = new TreeNode(arr[i]);
//       queue.push(current.left);
//     }
//     i++;

//     if (i < arr.length && arr[i] != null) {
//       current.right = new TreeNode(arr[i]);
//       queue.push(current.right);
//     }
//     i++;
//   }

//   return root;
// }

// const sample = [1, 2, 3, 4, 5, null, 8, null, null, 6, 7, 9];
// const root = buildBinaryTree(sample);
// console.log("root", root);

//2.Traversal
// const preOrderTraversal = (inputRoot) => {
//   const result = [];
//   if (!inputRoot) {
//     return;
//   }
//   const traversal = (node) => {
//     result.push(node.val);
//     node.left && traversal(node.left);
//     node.right && traversal(node.right);
//   };
//   traversal(inputRoot);
//   return result;
// };
// console.log("result", preOrderTraversal(root));

// const inOrderTraversal = (inputRoot) => {
//   const result = [];
//   if (!inputRoot) {
//     return;
//   }
//   const traversal = (node) => {
//     node.left && traversal(node.left);
//     result.push(node.val);
//     node.right && traversal(node.right);
//   };
//   traversal(inputRoot);
//   return result;
// };
// console.log("result", inOrderTraversal(root));

// const postOrderTraversal = (inputRoot) => {
//   const result = [];
//   if (!inputRoot) {
//     return;
//   }
//   const traversal = (node) => {
//     node.left && traversal(node.left);
//     node.right && traversal(node.right);
//     result.push(node.val);
//   };
//   traversal(inputRoot);
//   return result;
// };

// console.log("result", postOrderTraversal(root));

//3.Traversal - Iterative Apporoch

// const preOrderTraversal = (inputRoot) => {
//   const result = [];
//   const stack = [inputRoot];

//   while (stack.length) {
//     const node = stack.pop();
//     result.push(node.val);
//     if (node.right) {
//       stack.push(node.right);
//     }
//     if (node.left) {
//       stack.push(node.left);
//     }
//   }

//   return result;
// };

// console.log("result", preOrderTraversal(root));

// const inOrderTraversal = (inputRoot) => {
//   const result = [];
//   const stack = [];
//   let curr = inputRoot;
//   while (curr || stack.length) {
//     while (curr) {
//       stack.push(curr);
//       curr = curr.left;
//     }
//     const node = stack.pop();
//     result.push(node.val);
//     node.right && stack.push(node.right);
//   }

//   return result;
// };

// console.log("result", inOrderTraversal(root));

// const levelOrderTraversal = (inputRoot) => {
//   const result = [];
//   const queue = [inputRoot];

//   while (queue.length > 0) {
//     const levelSize = queue.length;
//     const currentLevel = [];

//     for (let i = 0; i < levelSize; i++) {
//       let node = queue.shift();
//       currentLevel.push(node.val);
//       node.left && queue.push(node.left);
//       node.right && queue.push(node.right);
//     }
//     result.push(currentLevel);
//   }

//   return result;
// };

// console.log("result", levelOrderTraversal(root));

//4.Max Depth
//Top-Up
// const maxDepth = (inputRoot) => {
//   let maxDepthValue = 0;
//   function traversal(node, level) {
//     maxDepthValue = Math.max(maxDepthValue, level);

//     node.left && traversal(node.left, level + 1);
//     node.right && traversal(node.right, level + 1);
//   }
//   traversal(inputRoot, 1);

//   console.log("maxDepthValue", maxDepthValue);
// };
// maxDepth(root);

//Bottom Up
// const maxDepth = (node) => {
//   if (!node) return 0;
//   let leftMax = maxDepth(node.left);
//   let rightMax = maxDepth(node.right);

//   return 1 + Math.max(leftMax, rightMax);
// };
// console.log("maxDepthValue", maxDepth(root));

//5.pathSum
//Top-Up
// const pathSum = (node, sum = 0, target) => {
//   if (!node) return false;
//   sum = sum + node.val;

//   if (!node.left && !node.right && sum === target) {
//     return true;
//   }

//   return pathSum(node.left, sum, target) || pathSum(node.right, sum, target);
// };
// console.log("pathSum", pathSum(root, 0, 8));

//Bottom Up
// const pathSumBottomUp = (node, target) => {
//   if (!node) return false;

//   // leaf check
//   if (!node.left && !node.right) {
//     return node.val === target;
//   }

//   return (
//     pathSumBottomUp(node.left, target - node.val) ||
//     pathSumBottomUp(node.right, target - node.val)
//   );
// };

//6.Is Symetric(Recursive)
// const isSymetric = (node) => {
//   const isMirror = (leftSide, rightSide) => {
//     if (!leftSide && !rightSide) return true;
//     if (!leftSide || !rightSide) return false;
//     return (
//       leftSide.val === rightSide.val &&
//       isMirror(leftSide.left, rightSide.right) &&
//       isMirror(leftSide.right, rightSide.left)
//     );
//   };
//   return isMirror(node.left, node.right);
// };

// console.log("isSymetric", isSymetric(root));

//isSymetric (Iterative)
// const isSymetric = (node) => {
//   const queue = [node.left, node.right];
//   while (queue.length) {
//     const p1 = queue.shift();
//     const p2 = queue.shift();
//     if (!p1 && !p2) {
//       continue;
//     }
//     if (!p1 || !p2) {
//       return false;
//     }
//     if (p1.val !== p2.val) {
//       return false;
//     }
//     queue.push(p1.left, p2.right);
//     queue.push(p1.right, p2.left);
//   }
//   return true;
// };

// console.log("isSymetric", isSymetric(root));

//7.invertTree
// const invertTree = (node) => {
//   if (!node) return node;
//   let temp = node.left;
//   node.left = node.right;
//   node.right = temp;
//   invertTree(node.left);
//   invertTree(node.right);
//   return node;
// };

// console.log("invertTree", invertTree(root));

//8.sameTree
// const sameTree = (nodeA, nodeB) => {
//   if (!nodeA && !nodeB) {
//     return true;
//   }
//   if (!nodeA || !nodeB) {
//     return false;
//   }
//   if (nodeA.val !== nodeB.val) {
//     return false;
//   }

//   return sameTree(nodeA.left, nodeB.left) && sameTree(nodeA.right, nodeB.right);
// };

// console.log("sameTree", sameTree(root1, root2));

//9.isBalanced
// const isBalanced = (root) => {
//   const dfs = (node) => {
//     if (!node) return 0; // height of empty subtree

//     const left = dfs(node.left);
//     if (left === -1) return -1; // left not balanced

//     const right = dfs(node.right);
//     if (right === -1) return -1; // right not balanced

//     if (Math.abs(left - right) > 1) return -1; // current node unbalanced

//     return Math.max(left, right) + 1; // return height
//   };

//   return dfs(root) !== -1;
// };

//10.Lowest Common Ancestor
// const lowestCommonAncestor = (inputRoot, first, second) => {
//   let lca = null;
//   const traversal = (node) => {
//     let count = 0;
//     if (!node) return 0;
//     let leftSide = traversal(node.left);
//     let rightSide = traversal(node.right);
//     if (node.val === first || node.val === second) {
//       count++;
//     }
//     count = count + leftSide + rightSide;

//     if (count === 2 && !lca) {
//       lca = node;
//     }
//     return count;
//   };
//   traversal(inputRoot);

//   return lca;
// };

// console.log("lowestCommonAncestor", lowestCommonAncestor(root, 7, 6));

//11.zigZag
// const zigZag = (node) => {
//   let result = [];
//   const queue = [node];
//   let leftToRight = true;
//   while (queue.length) {
//     let levelSize = queue.length;
//     let levelResult = [];
//     for (let i = 0; i < levelSize; i++) {
//       let curr = queue.shift();
//       if (leftToRight) {
//         levelResult.push(curr.val);
//       } else {
//         levelResult.unshift(curr.val);
//       }

//       curr.left && queue.push(curr.left);
//       curr.right && queue.push(curr.right);
//     }
//     leftToRight = !leftToRight;
//     result.push(levelResult);
//   }
//   console.log("result", result);

//   return result;
// };

// console.log("zigZag", zigZag(root));

//12.rightSideView
// const rightSideView = (inputRoot) => {
//   if (!inputRoot) return [];
//   const queue = [inputRoot];
//   const result = [];
//   while (queue.length) {
//     let lastValue = null;
//     let levelSize = queue.length;
//     for (let i = 0; i < levelSize; i++) {
//       let curr = queue.shift();
//       lastValue = curr.val;
//       curr.left && queue.push(curr.left);
//       curr.right && queue.push(curr.right);
//     }
//     result.push(lastValue);
//   }
//   return result;
// };

// console.log("rightSideView", rightSideView(root));

//13.goodNode
// const goodNode = (inputRoot) => {
//   let result = 0;
//   if (!inputRoot) return 0;
//   const traversal = (node, maxSeen) => {
//     if (node.val >= maxSeen) {
//       result++;
//     }
//     let currMax = Math.max(maxSeen, node.val);
//     node.left && traversal(node.left, currMax);
//     node.right && traversal(node.right, currMax);
//   };
//   traversal(inputRoot, -Infinity);
//   return result;
// };

// console.log("goodNode", goodNode(root));

//14.populateNextRight
// const populateNextRight = (inputRoot) => {
//   if (!inputRoot) return inputRoot;
//   const traversal = (node) => {
//     if (node.left) {
//       node.left.next = node.right;
//     }
//     if (node.right && node.next) {
//       node.right.next = node.next.left;
//     }
//     node.left && traversal(node.left);
//     node.right && traversal(node.right);
//   };
//   traversal(inputRoot);
//   return inputRoot;
// };

// console.log("populateNextRight", populateNextRight(root));

//15.isSubRoot
// const isSubRoot = (main, sub) => {
//   const mainRoot = serialize(main);
//   const subRoot = serialize(sub);
//   console.log("mainRoot", mainRoot);
//   console.log("subRoot", subRoot);

//   return mainRoot.includes(subRoot);
// };

// const serialize = (inputNode) => {
//   let hash = "";
//   const traverse = (node) => {
//     if (!node) {
//       hash = hash + "-#";
//       return;
//     }
//     hash = hash + "-" + node.val;
//     traverse(node.left);
//     traverse(node.right);
//   };
//   traverse(inputNode);
//   return hash;
// };
// console.log("isSub", isSubRoot(root, subRoot));

// ----------xxxxxxxx-----Binary Search Tree------xxxxxxxxxxx----------

//isValidBST
// const isValidBST = (inputRoot) => {
//   let result = true;
//   const traversal = (node, lower, upper) => {
//     if (!node) return;
//     if (
//       (lower !== null && node.val <= lower) ||
//       (upper !== null && node.val >= upper)
//     ) {
//       result = false;
//       return;
//     }
//     node.left && traversal(node.left, lower, node.val);
//     node.right && traversal(node.right, node.val, upper);
//   };
//   traversal(inputRoot, null, null);

//   return result;
// };

// console.log("isValidBST", isValidBST(root));

//searchBST
// const searchBST = (inputRoot, target) => {
//   let node = inputRoot;

//   while (node) {
//     if (node.val === target) {
//       return node;
//     } else if (node.val < target) {
//       node = node.right;
//     } else {
//       node = node.left;
//     }
//   }
//   return null;
// };

// console.log("searchBST", searchBST(root, 5));

// const searchBST = (inputRoot, target) => {
//   if (!inputRoot || inputRoot.val === target) return inputRoot;

//   return inputRoot.val < target
//     ? searchBST(inputRoot.right, target)
//     : searchBST(inputRoot.left, target);
// };

// console.log("searchBST", searchBST(root, 7));

//insertBST
// const insertBST = (inputRoot, target) => {
//   if (!inputRoot) return new TreeNode(target);
//   if (target < inputRoot.val) {
//     inputRoot.left = insertBST(inputRoot.left, target);
//   } else {
//     inputRoot.right = insertBST(inputRoot.right, target);
//   }
//   return inputRoot;
// };

// console.log("insertBST", insertBST(root, 5));

//kth Smallest
// const kSmallest = (inputRoot, target) => {
//   const result = [];
//   const traversal = (node) => {
//     if (!node) return;
//     node.left && traversal(node.left);
//     result.push(node.val);
//     node.right && traversal(node.right);
//   };
//   traversal(inputRoot);
//   console.log("result", result);
//   return result[target - 1];
// };
// console.log("kSmallest", kSmallest(root, 3));

//lowestCommonAncestor
// const lowestCommonAncestor = (inputRoot, firstValue, secondValue) => {
//   if (!inputRoot) return null;
//   if (firstValue.val < inputRoot.val && secondValue.val < inputRoot.val) {
//     return lowestCommonAncestor(inputRoot.left, firstValue, secondValue);
//   } else if (
//     firstValue.val > inputRoot.val &&
//     secondValue.val > inputRoot.val
//   ) {
//     return lowestCommonAncestor(inputRoot.right, firstValue, secondValue);
//   } else {
//     return inputRoot;
//   }
// };
// console.log("lowestCommonAncestor", lowestCommonAncestor(root, 1, 3));

// ----------xxxxxxxx-----BackTracking------xxxxxxxxxxx----------

// Subsets
// const sample = [1, 2, 3];
// const subSet = (inputArray) => {
//   let result = [];
//   const backTracking = (path, start) => {
//     result.push([...path]);
//     for (let i = start; i < inputArray.length; i++) {
//       path.push(inputArray[i]);
//       backTracking(path, i + 1);
//       path.pop();
//     }
//   };
//   backTracking([], 0);
//   return result;
// };
// console.log("result", subSet(sample));

//Combination
// const combination = (n, k) => {
//   const result = [];
//   const backTracking = (path, start) => {
//     if (path.length === k) {
//       result.push([...path]);
//       return;
//     }
//     for (let i = start; i <= n; i++) {
//       path.push(i);
//       backTracking(path, i + 1);
//       path.pop();
//     }
//   };
//   backTracking([], 1);
//   return result;
// };
// console.log("result", combination(4, 2));

//Permute All Combination
// const sample = [1, 2, 3];
// const permute = (inputArray) => {
//   const result = [];
//   const backTracking = (path, used) => {
//     if (path.length === inputArray.length) {
//       result.push([...path]); // found one permutation
//       return;
//     }

//     for (let i = 0; i < inputArray.length; i++) {
//       if (used[i]) {
//         continue;
//       }
//       path.push(inputArray[i]);
//       used[i] = true;

//       backTracking(path, used);
//       path.pop();
//       used[i] = false;
//     }
//   };
//   backTracking([], Array(inputArray.length).fill(false));
//   return result;
// };
// console.log("result", permute(sample));

// const sample = [1, 2, 3];
// const permute = (inputArray) => {
//   const result = [];
//   const backTracking = (path) => {
//     if (path.length === inputArray.length) {
//       result.push([...path]);
//       return;
//     }
//     for (let i = 0; i < inputArray.length; i++) {
//       if (!path.includes(inputArray[i])) {
//         path.push(inputArray[i]);
//         backTracking(path);
//         path.pop();
//       }
//     }
//   };
//   backTracking([]);
//   return result;
// };
// console.log("result", permute(sample));

// subSet with duplicates
// const sample = [1, 2, 2, 3];
// const subSet = (inputArray) => {
//   const result = [];
//   inputArray.sort((a, b) => a - b);
//   const backTracking = (path, start) => {
//     result.push([...path]);
//     for (let i = start; i < inputArray.length; i++) {
//       if (i > start && inputArray[i - 1] === inputArray[i]) {
//         continue;
//       }
//       path.push(inputArray[i]);
//       backTracking(path, i + 1);
//       path.pop();
//     }
//   };
//   backTracking([], 0);
//   return result;
// };

// console.log("result", subSet(sample));

//combinationSum
// const sample = [2, 3, 6, 7],
//   target = 7;

// const combinationSum = (inputArray, inTarget) => {
//   const result = [];
//   const backTraking = (path, remainingSum, start) => {
//     if (remainingSum === 0) {
//       result.push([...path]);
//     }
//     if (remainingSum <= 0) {
//       return;
//     }
//     for (let i = start; i < inputArray.length; i++) {
//       path.push(inputArray[i]);
//       backTraking(path, remainingSum - inputArray[i], i);
//       path.pop();
//     }
//   };
//   backTraking([], inTarget, 0);
//   return result;
// };
// console.log("result", combinationSum(sample, target));

//combinationSum2
// const sample = [10, 1, 2, 7, 6, 1, 5],
//   target = 8;
// const combinationSum2 = (inputArray, inTarget) => {
//   const result = [];
//   inputArray.sort((a, b) => a - b);
//   const backTracking = (path, remainingSum, start) => {
//     if (remainingSum === 0) {
//       result.push([...path]);
//     }
//     if (remainingSum <= 0) {
//       return;
//     }
//     for (let i = start; i < inputArray.length; i++) {
//       if (i > start && inputArray[i - 1] === inputArray[i]) {
//         continue;
//       }
//       path.push(inputArray[i]);
//       backTracking(path, remainingSum - inputArray[i], i + 1);
//       path.pop();
//     }
//   };
//   backTracking([], inTarget, 0);
//   return result;
// };
// console.log("result", combinationSum2(sample, target));

//combinationSum3
// const combinationSum3 = (n, k) => {
//   const result = [];

//   const backTracking = (path, remainingSum, start) => {
//     if (remainingSum === 0 && path.length === k) {
//       result.push([...path]);
//     }
//     if (path.length > k || remainingSum <= 0) {
//       return;
//     }
//     for (let i = start; i <= n; i++) {
//       path.push(i);
//       backTracking(path, remainingSum - i, i + 1);
//       path.pop();
//     }
//   };
//   backTracking([], n, 1);
//   return result;
// };
// console.log("result", combinationSum3(7, 3));

//letterCombinations
// const digits = "23";
// const letterCombinations = (inputDigit) => {
//   const phoneMap = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };
//   const result = [];

//   const backTracking = (path, index) => {
//     if (index === inputDigit.length) {
//       result.push(path);
//       return;
//     }
//     const letters = phoneMap[inputDigit[index]];
//     for (let letter of letters) {
//       backTracking(path + letter, index + 1);
//     }
//   };
//   backTracking("", 0);
//   return result;
// };
// console.log("result", letterCombinations(digits));

//Permutations II
// const nums = [1, 2, 3];
// const permuteUnique = (inputArray) => {
//   const result = [];
//   inputArray.sort((a, b) => a - b); // sort to handle duplicates
//   const used = new Array(inputArray.length).fill(false);

//   const backTracking = (path) => {
//     if (path.length === inputArray.length) {
//       result.push([...path]);
//       return;
//     }

//     for (let i = 0; i < inputArray.length; i++) {
//       if (used[i]) continue;

//       // skip duplicates: only use the first unused one in a group
//       if (i > 0 && inputArray[i] === inputArray[i - 1] && !used[i - 1]) {
//         continue;
//       }

//       path.push(inputArray[i]);
//       used[i] = true;

//       backTracking(path);

//       path.pop();
//       used[i] = false;
//     }
//   };

//   backTracking([]);
//   return result;
// };

// console.log("result", permuteUnique(nums));

// ----------xxxxxxxx-----Greedy------xxxxxxxxxxx----------

//Two City Scheduling
// const costs = [
//   [10, 20],
//   [30, 200],
//   [400, 50],
//   [30, 20],
// ];
// const twoCitySchedCost = (inputArray) => {
//   let result = 0;
//   inputArray.sort((a, b) => b[1] - b[0] - (a[1] - a[0]));
//   let n = inputArray.length / 2;

//   for (let i = 0; i < n; i++) {
//     result = result + inputArray[i][0];
//   }
//   for (let i = n; i < 2 * n; i++) {
//     result = result + inputArray[i][1];
//   }

//   return result;
// };

// console.log("result", twoCitySchedCost(costs));

//Assign Cookies
// const g = [1, 2],
//   s = [1, 2, 3];

// const findContentChildren = () => {
//   g.sort((a, b) => a - b);
//   s.sort((a, b) => a - b);

//   let child = 0; // pointer for g
//   let cookie = 0; // pointer for s

//   while (cookie < s.length) {
//     if (s[cookie] >= g[child]) {
//       child++;
//     }
//     cookie++;
//   }

//   return child;
// };

// console.log("result", findContentChildren());

//Lemonade Change
// const lemonadeChange = (bills) => {
//   if (!Array.isArray(bills)) return false; // edge case

//   let five = 0,
//     ten = 0;

//   for (let bill of bills) {
//     if (bill === 5) {
//       five++;
//     } else if (bill === 10) {
//       if (five === 0) return false;
//       five--;
//       ten++;
//     } else if (bill === 20) {
//       if (ten > 0 && five > 0) {
//         ten--;
//         five--;
//       } else if (five >= 3) {
//         five -= 3;
//       } else {
//         return false;
//       }
//     } else {
//       // Invalid bill value
//       return false;
//     }
//   }

//   return true;
// };
// console.log(lemonadeChange([5, 5, 10, 10, 20])); // false
// console.log(lemonadeChange([5, 5, 5, 10, 20])); // true

//Insert Interval
// const intervals = [
//     [1, 2],
//     [3, 5],
//     [6, 7],
//     [8, 10],
//     [12, 16],
//   ],
//   newInterval = [4, 8];

// const insertInterval = () => {
//   let result = [];
//   let [newStart, newEnd] = newInterval;

//   let i = 0;
//   while (i < intervals.length && intervals[i][1] < newStart) {
//     result.push(intervals[i]);
//     i++;
//   }

//   while (i < intervals.length && intervals[i][0] <= newEnd) {
//     let [start, end] = intervals[i];
//     newStart = Math.min(newStart, start);
//     newEnd = Math.max(newEnd, end);

//     i++;
//   }
//   result.push([newStart, newEnd]);

//   while (i < intervals.length) {
//     result.push(intervals[i]);
//     i++;
//   }

//   return result;
// };

// console.log("result", insertInterval());

//mergeInterval
// const intervals = [
//   [4, 7],
//   [1, 4],
// ];

// const mergeInterval = () => {
//   let result = [intervals[0]];
//   for (let i = 1; i < intervals.length; i++) {
//     let [lastStart, lastEnd] = result[result.length - 1];
//     let [currStart, currEnd] = intervals[i];

//     if (currStart <= lastEnd) {
//       // Overlap → merge
//       result[result.length - 1][1] = Math.max(lastEnd, currEnd);
//     } else {
//       // No overlap → add new interval
//       result.push([currStart, currEnd]);
//     }
//   }
//   return result;
// };

// console.log("result", mergeInterval());

//partitionLabels
// const s = "ababcbacadefegdehijhklij";

// const partitionLabels = () => {
//   let lastIndex = {};
//   for (let i = 0; i < s.length; i++) {
//     let value = s[i];
//     lastIndex[value] = i;
//   }

//   let start = 0;
//   let end = 0;
//   let result = [];

//   for (let i = 0; i < s.length; i++) {
//     let value = s[i];
//     end = Math.max(end, lastIndex[value]);
//     if (i === end) {
//       let length = end - start + 1;
//       result.push(length);
//       start = i + 1;
//     }
//   }
//   return result;
// };

// console.log("result", partitionLabels());

//Erase Overlap Intervals
// const intervals = [
//   [1, 2],
//   [2, 3],
//   [3, 4],
//   [1, 3],
// ];

// const eraseOverlapIntervals = () => {
//   let result = 0;
//   intervals.sort((a, b) => a[1] - b[1]);

//   let previousEnd = intervals[0][1];

//   for (let i = 1; i < intervals.length; i++) {
//     const [start, end] = intervals[i];

//     if (start < previousEnd) {
//       result++;
//     } else {
//       previousEnd = end;
//     }
//   }
//   return result;
// };

// console.log("result", eraseOverlapIntervals());

//Gas Station
// const gas = [2, 3, 4],
//   cost = [3, 4, 3];

// const canCompleteCircuit = () => {
//   let startPoint = 0;
//   let tank = 0;
//   let total = 0;

//   for (let i = 0; i < gas.length; i++) {
//     let gain = gas[i] - cost[i];
//     tank = tank + gain;
//     total = total + gain;

//     if (tank < 0) {
//       tank = 0;
//       startPoint = i + 1;
//     }
//   }

//   return total >= 0 ? startPoint : -1;
// };

// console.log("result", canCompleteCircuit());

//carPooling
// const trips = [
//     [2, 1, 5],
//     [3, 5, 7],
//   ],
//   capacity = 4;

// const carPooling = () => {
//   const passengerAtStop = {};
//   for (let i = 0; i < trips.length; i++) {
//     const [passenger, start, end] = trips[i];
//     passengerAtStop[start] = (passengerAtStop[start] || 0) + passenger;
//     passengerAtStop[end] = (passengerAtStop[end] || 0) - passenger;
//   }

//   let totalPassenger = 0;
//   for (let stop in passengerAtStop) {
//     totalPassenger = totalPassenger + Number(passengerAtStop[stop]);
//     if (totalPassenger > capacity) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log("result", carPooling());
//   const stopPoints = Object.keys(changes).map(Number).sort((a, b) => a - b); // but object keys in JavaScript are not guaranteed to be iterated in numeric order (especially if they’re string keys like "1", "5", "7")

//Meeting Rooms -->https://neetcode.io/problems/meeting-schedule?list=neetcode250
// const intervals = [
//   [0, 5],
//   [15, 18],
//   [15, 20],
// ];

// const canAttendMeetings = () => {
//   intervals.sort((a, b) => a[1] - b[1]);
//   console.log("s", intervals);
//   let previousEnd = intervals[0][1];
//   for (let i = 1; i < intervals.length; i++) {
//     const [start, end] = intervals[i];
//     if (start < previousEnd) {
//       return false;
//     } else {
//       previousEnd = end;
//     }
//   }
//   return true;
// };

// console.log("result", canAttendMeetings());

//Jump Game -->https://neetcode.io/problems/jump-game?list=neetcode250
// const canJump = (nums) => {
//   let maxReach = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (i > maxReach) return false;
//     maxReach = Math.max(maxReach, i + nums[i]);
//     if (maxReach >= nums.length - 1) return true;
//   }
//   return true;
// };

// console.log(canJump([2, 5, 0, 0])); // true

//Jump Game --> https://neetcode.io/problems/jump-game-ii?list=neetcode250
// const nums = [2, 4, 1, 1, 1, 1];
// const canJump = () => {
//   let jumpCount = 0;
//   let maxReach = 0;
//   let end = 0;

//   for (let i = 0; i < nums.length; i++) {
//     maxReach = Math.max(maxReach, i + nums[i]);
//     if (i === end) {
//       jumpCount++;
//       end = maxReach;
//       if (end >= nums.length - 1) return jumpCount;
//     }
//   }
//   return jumpCount;
// };

// console.log("result", canJump());

//Jump Game --> https://neetcode.io/problems/jump-game-vii?list=neetcode250
// const s = "00110010",
//   minJump = 2,
//   maxJump = 4;
// const canJump = () => {
//   const n = s.length;
//   if (s[n - 1] === "1") return false;
//   const reachable = new Array(n).fill(false);
//   reachable[0] = true;

//   let count = 0;

//   for (let i = 1; i < n; i++) {
//     if (i - minJump >= 0 && reachable[i - minJump]) {
//       count++;
//     }
//     if (i - maxJump - 1 >= 0 && reachable[i - maxJump - 1]) {
//       count--;
//     }
//     reachable[i] = count > 0 && s[i] === "0";
//   }
//   return reachable[n - 1];
// };

// console.log("result", canJump());

//Hand of Straights
// const hand = [1, 2, 3, 10, 11, 12],
//   groupSize = 3;
// const isNStraightHand = () => {
//   if (hand.length % groupSize !== 0) return false;
//   hand.sort((a, b) => a - b);
//   let seen = {};
//   for (let i = 0; i < hand.length; i++) {
//     const value = hand[i];
//     seen[value] = (seen[value] || 0) + 1;
//   }

//   for (let key in seen) {
//     const count = seen[key];
//     if (count > 0) {
//       for (let i = 0; i < groupSize; i++) {
//         const nextCard = Number(key) + i;
//         if ((seen[nextCard] || 0) < count) return false;
//         seen[nextCard] = seen[nextCard] - count;
//       }
//     }
//   }
//   return true;
// };

// console.log("result", isNStraightHand());

//isNStraightHand
// const isNStraightHand = () => {
//   if (hand.length % groupSize !== 0) return false;
//   let seen = {};
//   for (let i = 0; i < hand.length; i++) {
//     const value = hand[i];
//     seen[value] = (seen[value] || 0) + 1;
//   }
//   hand.sort((a, b) => a - b);

//   for (const num of hand) {
//     if (seen[num] > 0) {
//       for (let i = num; i < num + groupSize; i++) {
//         if (!seen[i]) return false;
//         seen[i] = seen[i] - 1;
//       }
//     }
//   }
//   return true;
// };

//maxSubArray
// const nums = [2, -3, 4, -2, 2, 1, -1, 4];

// const maxSubArray = () => {
//   let maxSum = nums[0];
//   let currSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let value = nums[i];
//     if (currSum < 0) {
//       currSum = 0;
//     }

//     currSum = currSum + value;
//     maxSum = Math.max(currSum, maxSum);
//   }
//   return maxSum;
// };

// console.log("result", maxSubArray());

//Maximum Sum Circular Subarray
// const nums = [-2, 4, -5, 4, -5, 9, 4];

// const maxSubArray = () => {
//   let maxSum = nums[0];
//   let currMaxSum = nums[0];

//   let minSum = nums[0];
//   let currMinSum = nums[0];

//   let total = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     let value = nums[i];

//     currMaxSum = Math.max(value, currMaxSum + value);
//     maxSum = Math.max(currMaxSum, maxSum);

//     currMinSum = Math.min(value, currMinSum + value);
//     minSum = Math.min(currMinSum, minSum);
//     console.log("minSum", minSum, currMinSum);

//     total = total + value;
//   }
//   if (maxSum < 0) return maxSum;

//   return Math.max(maxSum, total - minSum);
// };

// console.log("result", maxSubArray());

// ----------xxxxxxxx-----Maths------xxxxxxxxxxx----------

//Excel Sheet Column Title
// const convertToTitle = (columnNumber) => {
//   let result = "";

//   while (columnNumber > 0) {
//     columnNumber--; // adjust for 1-indexing
//     let remainder = columnNumber % 26;
//     result = String.fromCharCode(65 + remainder) + result;
//     columnNumber = Math.floor(columnNumber / 26);
//   }

//   return result;
// };

// // Example runs
// console.log(convertToTitle(1)); // "A"
// console.log(convertToTitle(28)); // "AB"
// console.log(convertToTitle(701)); // "ZY"
// console.log(convertToTitle(705)); // "AAC"

//plusOne
// const plusOne = (digits) => {
//   for (let i = digits.length - 1; i >= 0; i--) {
//     if (digits[i] < 9) {
//       digits[i]++;
//       return digits;
//     }
//     digits[i] = 0; // carry
//   }
//   digits.unshift(1); // if all digits were 9
//   return digits;
// };
// };

// console.log(plusOne([1, 2, 3, 4])); // [1, 2, 3, 5]
// console.log(plusOne([9, 9, 9])); // [1, 0, 0, 0]

// ----------xxxxxxxx-----Dynamic Programming------xxxxxxxxxxx----------

//Fibonachi -Top Down Apporoach
// let store = {};
// const fib = (n) => {
//   if (n <= 1) {
//     return n;
//   }
//   if (!store[n]) {
//     store[n] = fib(n - 1) + fib(n - 2);
//   }
//   return store[n];
// };

// console.log("result", fib(20));

//Fibonachi -Bottom Up Apporoach
// const fibIter = (n) => {
//   if (n <= 1) return n;
//   let prev2 = 0,
//     prev1 = 1;
//   for (let i = 2; i <= n; i++) {
//     const curr = prev1 + prev2;
//     prev2 = prev1;
//     prev1 = curr;
//   }
//   return prev1;
// };
// console.log("result", fibIter(20));

//climbStairs
// let seen = {};
// const climbStairs = (inputNum) => {
//   if (inputNum <= 2) {
//     return inputNum;
//   }
//   if (!seen[inputNum]) {
//     seen[inputNum] = climbStairs(inputNum - 1) + climbStairs(inputNum - 2);
//   }
//   return seen[inputNum];
// };

// console.log("res", climbStairs(3));

// const climbStairs = (inputNum) => {
//   let result = [0, 1, 2];
//   for (let i = 3; i <= inputNum; i++) {
//     result[i] = result[i - 1] + result[i - 2];
//   }
//   return result[inputNum];
// };

// console.log("res", climbStairs(4));

//min Cost Climbing Stairs
// cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1];

// const minCostClimbingStairs = () => {
//   let result = [0, 0];
//   let n = cost.length;

//   for (let i = 2; i <= n; i++) {
//     result[i] = Math.min(
//       result[i - 1] + cost[i - 1],
//       result[i - 2] + cost[i - 2]
//     );
//   }
//   return result[n];
// };

// console.log("res", minCostClimbingStairs());

//House Robber
// nums = [1, 2, 3, 1];

// const rob = () => {
//   let result = [nums[0]];
//   result[1] = Math.max(nums[0], nums[1]);
//   let n = nums.length;

//   for (let i = 2; i < n; i++) {
//     result[i] = Math.max(result[i - 1], result[i - 2] + nums[i]);
//   }
//   console.log("result", result);
//   return result[n-1];
// };

// console.log("res", rob());

//
// const robOpt = (nums) => {
//   let prev2 = 0,
//     prev1 = 0;
//   for (let num of nums) {
//     let curr = Math.max(prev1, prev2 + num);
//     prev2 = prev1;
//     prev1 = curr;
//   }
//   return prev1;
// };

//House Robber Circular
// nums = [2, 3, 2];

// const rob = () => {
//   let n = nums.length;
//   if (n === 1) return nums[0];
//   const helperFn = (start, end) => {
//     let prev1 = 0;
//     let prev2 = 0;
//     for (let i = start; i <= end; i++) {
//       let value = nums[i];
//       let curr = Math.max(prev1, value + prev2);
//       prev2 = prev1;
//       prev1 = curr;
//     }
//     return prev1;
//   };
//   const first = helperFn(0, n - 2);
//   const second = helperFn(1, n - 1);

//   return Math.max(first, second);
// };

// console.log("res", rob());

//Coin Change - Top Down Approach
// const coins = [1, 2, 5];
// let amount = 11;

// const coinChange = () => {
//   let store = {};
//   let n = coins.length;
//   const helperFn = (remAmount) => {
//     if (remAmount === 0) return 0;
//     if (remAmount < 0) return -1;
//     if (store[remAmount]) {
//       return store[remAmount];
//     }
//     let minCoins = Infinity;
//     for (let i = 0; i < n; i++) {
//       result = helperFn(remAmount - coins[i]);
//       if (result != -1) {
//         minCoins = Math.min(minCoins, 1 + result);
//       }
//     }
//     store[remAmount] = minCoins === Infinity ? -1 : minCoins;
//     return store[remAmount];
//   };

//   return helperFn(amount);
// };

// console.log("result", coinChange());

//Coin Change - Bottom Up Approach
// const coins = [1, 2, 5];
// let amount = 11;

// const coinChange = () => {
//   let n = coins.length;
//   let dp = new Array(amount + 1).fill(Infinity);
//   dp[0] = 0;
//   for (let rem = 1; rem <= amount; rem++) {
//     for (let i = 0; i < n; i++) {
//       let remaingAmount = rem - coins[i];
//       if (remaingAmount >= 0) {
//         dp[rem] = Math.min(dp[rem], 1 + dp[remaingAmount]);
//       }
//     }
//   }
//   return dp[amount] === Infinity ? -1 : dp[amount];
// };

// console.log("result", coinChange());

//wordBreak
// const s = "applepenapple",
//   wordDict = ["apple", "pen"];

// const wordBreak = () => {
//   const memo = {};
//   const helperFn = (remString) => {
//     if (remString === "") return true;
//     let result = false;
//     for (let i = 0; i < remString.length; i++) {
//       let word = remString.substring(0, i + 1);
//       if (wordDict.includes(word) && helperFn(remString.substring(i + 1))) {
//         result = true;
//       }
//     }
//     return result;
//   };
//   return helperFn(s);
// };

// console.log("result", wordBreak());

//
// const s = "applepenapple",
//   wordDict = ["apple", "pen"];

// const wordBreak = () => {
//   const memo = {};
//   const helperFn = (remString) => {
//     if (remString === "") return true;
//     if (memo[remString]!== undefined) return memo[remString];
//     let result = false;
//     for (let i = 0; i < remString.length; i++) {
//       let word = remString.substring(0, i + 1);
//       if (wordDict.includes(word) && helperFn(remString.substring(i + 1))) {
//         result = true;
//       }
//     }
//     return (memo[remString] = result);
//   };
//   return helperFn(s);
// };

// console.log("result", wordBreak());
