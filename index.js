//  sum of array

// arr=[1,5,6,4,10]
// newarr= arr.reduce((total,value)=>{
//   return total+value
// })
// console.log(newarr)

// Staircase

// let n=4
// for (let index = 0; index<n; index++) {
//   let sentence="#"
//   for (let index2 = 0; index2<index; index2++) {
//    sentence= sentence+"#"
// }
// console.log(sentence)
// }

// Reverse an array

// arr=[1,2,3,4,5]
// console.log(arr.reverse());

//     const reversed = arr.reduce((acc, curr) => {
//   return [current, ...acc];
// }, []);

// Reverse a String

// console.log(reverse("Gaurav"))

// function reverse(str){
// return str.split("").reduce((acc,item)=>item+acc,"")
// }

// Kth smallest

// arr=[1,22,3,-4,5]

//  arr.sort((a, b) => a - b)

// console.log(arr[k]);

// Best Time to Buy and Sell Stock

// prices = [7,10,5,13,60,4]
// let min= Infinity
// let profit=0
// for(i=0;i<prices.length;i++){
//   min=Math.min(min,prices[i])
//   profit=Math.max(profit,prices[i]-min)
// }
// console.log(profit);

// Find First Duplicate

// let nums = [2, 3, 55, 4, 8, 10, 55, 5, 3];

// const firstDuplicate = (inputArr) => {
//   const newArr = inputArr.filter((item, index) => {
//     return inputArr.indexOf(item) !== index;
//   });
//   console.log(newArr[0]);
// };

// firstDuplicate(nums);

// const duplicates = [];
// nums.forEach((item, index) => {
//   if (nums.indexOf(item) !== index) {
//     duplicates.push(item);
//   }
// });
// console.log("Duplicate", duplicates[0]);

// Maximum Product of Three Numbers

// arr=[1,2,10,3,4,5]
// newarr=[]

// for(j=0;j<3;j++){
//   let max=0
// for(i=0;i<arr.length;i++){
//   max= max<arr[i]?arr[i]:max;
// }
// newarr.push(max)
// arr.splice(arr.indexOf(max), 1);
// }
// let product=newarr[0]*newarr[1]*newarr[2]
// console.log(newarr);
// console.log(product);

//     Factorial

//     const factorial=(number)=>{
//   if (number === 0 || number === 1) {
//     return 1;
//   }
//    let product=1
//    for(var i=1;i<=number;i++){
//          product=product*i
//       }
//       return product
// }
//     console.log(factorial(5));

// const factorial = (n) => {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// };

// palindrome

// let sentence="abcecba"

// arr= sentence.split("")
// len=arr.length
// let flagNP= true
// for(i=0;i<(len-1)/2;i++){
//     if(arr[i]!=arr[len-1-i]) flagNP= false
// }

// if(flagNP){
//     console.log("A palindrome");
// }
// else{
//     console.log("Not a palindrome");
// }
// sentence === sentence.split('').reverse().join('');

// Frequency counter

// let sentence="Gaurav"
// function Counter(sentence){
//   return sentence.split("").reduce((total, letter) => {
//     total[letter] ? total[letter]++ : total[letter] = 1;
//     return total;
//   }, {});
// };

// let newsentence=Counter(sentence)
//  console.log(newsentence)

// First Unique Character in a String

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

// Sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
// Find the sum of first 100 prime numbers

// function sumprime(number){
//     let numArray=[];
// for(i=1;i<number;i++){

//     numArray.push(i)
// }

// num = numArray.filter((number) => {
//     if(number<2>){
//       return false
//     }
//    else if(number===2){
//       return true
//     }
//   for (var i = 2; i <= Math.sqrt(number); i++) {
//     if (number % i === 0) return false;
//   }
//   return number;
// }).reduce((total,value)=>{
//     return total=total+value
// },0)

// console.log(num)
// }

// sumprime(10)

// write a function to find strings appearing an odd number of times
// arr=['aa','bb','aa','bb','aa','cc','cc','ddd'] ===> ['aa','ddd'] because aa appears 3x and ddd 1x

// function Counter(sentence){
//   let array= sentence.reduce((total, letter) => {
//     total[letter] ? total[letter]++ : total[letter] = 1;
//     return total;
//   }, {});
//   let newarr=[]
//   for(const property in array){
//       if(array[property]%2!==0){
//            newarr.push(property)
//       }
//   }
//   return newarr
// };

// arr=['aa','bb','aa','bb','aa','cc','cc','ddd']

// Counter(arr)

// Find the number start and end positin of "556013604"

// mystring =
// "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450"
// let find="556013604"
// console.log(mystring.search(find))
// let start=mystring.search(find)
// let end =  find.length -1 +start

// console.log(`start at ${start} and end at ${end}`)

// tricky ques
//     1 + true  // 2
//     true + true // 2
//     "1" + true // "1true"
//     "2" > "3" // false
//     "two" > "three" // true it compares letters with highest number
// "true"==true  // ans is false as "true" converted into NaN and true into 1

// loop in react
// function App() {
//   const list = []

//   for(let i=5;i<101;){
//    list.push(<li>{i}</li>)
//    i=i+5
// }

// console.log(list);
//   return (
//     <>
//    <h1>React</h1>
//    <ul>
//    {list.map((item)=>{
//      return <>{item}</>
//    })}
//    </ul>
//     </>
//   );
// }

// export default App;

// var arr = [[1,2],[3,4],[4,5]] //[1,2,3,4,5]

// let newarray= arr.flat()
// let newarray= arr.flat(Infinity)

// const flatten=(arr)=>{
//     const newArray= arr.reduce((acc,item)=>{
//   if(Array.isArray(item)){
//      const flatArray=  flatten(item)
//      acc.push(...flatArray)
//       } else{
//        acc.push(item)
//       }
//       return acc
//    },[])
//    return newArray
// }
// console.log(flatten(arr));

// const flat = (array) => {
//   return array.reduce(
//     (acc, it) => acc.concat(Array.isArray(it) ? flat(it) : it),
//     []
//   );
// };

// const brunch = {
//     food: 'Dim sum',
//     beverage: 'Jasmine tea',
//     order: () => {
//         return `I'll have the ${this.food} with ${this.beverage} please.`
//     }
// }
// brunch.order();

// var trees = ["xyz","xxxx","test","ryan","apple"];
// delete trees[3];
// console.log(trees.length);  //5
// console.log(trees);   //  ['xyz', 'xxxx', 'test', empty, 'apple']

// function display() {
//   var a = b = 10;
// }
// display();
// console.log('b', typeof b === 'undefined'); b,false  typeof b is number
// console.log('a', typeof a === 'undefined'); a,true

// But in fact, var a = b = 3; is actually shorthand for:

// b = 3;
// var a = b;
// Therefore, b ends up being a global variable (since it is not preceded by the var keyword)
//  and is still in scope even outside of the enclosing function.

// The reason a is undefined is that a is a local variable to that self-executing anonymous function

// const items = [
//   {name: 'a', price: 100},
//   {name: 'b', price: 10},
//   {name: 'c', price: 50},
//   {name: 'd', price: 30},
// ];
// let newitems=[]
//  newitems = items.filter((item,index)=>{
//         return item.price>50
// })

// console.log(newitems);

// let arr = [1.34567,2.34,3.6,8,9.05676]

// arr.map((item)=>{
//   return item.toFixed(2)
// })

// log

// console.log([2].reduce((a) => {
//       return a
// }))       ==> 2

// let a = [1,20,33,100,22,1000,2]
// a.sort()

// a.sort((a,b)=>{
//    return a-b
// })

// function a(){
//   console.log("a")
//   setTimeout(()=>{console.log("b")}, 0)
//   Promise.resolve().then(_ => console.log("c"))
//   console.log("c2")
//   console.log("c3")
// }
// a()

// ==>
//a
//c2
//c3
//c
//b

// function a() {
//     console.log(this.name);
// }

// var obj={
//     name:"Gaurav"
// }

// a.call(obj)

// let a =3;
// let b=5;
// for (var i = 1; i < 51; i++) {
//   a--;
//   b--;
//   if (a === 0 && b === 0) {
//     console.log("Fizz Buzz");
//     a=3;b=5;
//   } else if (a === 0) {
//     console.log("Fizz");
//     a=3
//   } else if (b === 0) {
//     console.log("Buzz");
//     b=5;
//   } else {
//     console.log(i);
//   }
// }

// let a={a:1}
// let b={a:1}
// let c=a
// console.log(a===c) //true   here comparison of reference is done
// console.log(a==b) //false

// const a=[1, [2], [3, [[4]]],[5,6]]

// console.log(a.flat(Infinity));

// obj = {
// 	a: 1,
// 	b: 2,
// 	c: {
// 		d: 4
// 	}
// }
// obj2 = {...obj};
// obj2.c.d = 5;
// console.log(obj);
// console.log(obj2);

// var a = 5;
// console.log(a); //5
// function abc(){
//     var a = 3;
//     console.log(a); //3
// }
// abc();
// console.log(a); //5

// let counter = 1;
// let a = counter++;
// alert(a);  //1

// state = {
// 	a: 100
// }

// function changeState(){
// 	setState({
// 		a :200
// 	});
// 	console.log(this.state.a);
// }

// changeState();

// var a={name:"Gaurav",surname:"Pawar"}
// var b={name:"Varun",state:"Hs"}
// var c={...a,...b}
// console.log(c)

// const arr =[{age: 15, isSelected: false}, {age:20, isSelected: false},
//     { age: 25 , isSelected:false}]

//     let arry4=arr.reduce((total,value)=>{
//     if(value.age>18){
//          value.isSelected=true
//    total.push(value)
//     }
//    return total
// },[])

// console.log("newarray",arry4);

// const series = (inputNumber) => {
//     if (inputNumber <= 0) {
//       console.log("grt than zero");
//     } else if (inputNumber.toString().includes(".")) {
//       const twoNumbers = inputNumber.toString().split(".");
//       const greaterNumber =
//         twoNumbers[0] > twoNumbers[1] ? twoNumbers[0] : twoNumbers[1];
//       console.log(`greater Number ${greaterNumber}`);
//     } else {
//       console.log(inputNumber);
//     }
//   };

// series(55.657)
// series(-25)
// series(100)
// series(25.13)

// let array=[3,5,4,3,5,3]

// value 3 is dup at index 3
// value 5 is dup at index 4
// value 3 is dup at index 5

// array.forEach((item, index, arr) => {
//     for (let i = 0; i < array.length; i++) {
//       if (item === array[i] && index < i) {
//         return console.log(`value ${item} is dup at index ${i}`);
//       }
//     }
//   });

// data=[2,5]
// data.length>0?

// useEffect(()=>{
//     if(data.length>0){
//         Our Api call
//     }
// },[Fetchdata])

// Filter duplicate id
// const arr = [
//   { id: 1, name: "test1" },
//   { id: 2, name: "test2" },
//   { id: 2, name: "test3" },
//   { id: 3, name: "test4" },
//   { id: 4, name: "test5" },
//   { id: 5, name: "test6" },
//   { id: 5, name: "test7" },
//   { id: 6, name: "test8" }
// ]

// const filteredArr = arr.reduce((acc, current) => {
//   const x = acc.find(item => item.id === current.id);
//   if (!x) {
//    acc.push(current);
//   }
//     return acc;
//
// }, []);

// console.log(filteredArr);

// var myObject = {
//     foo: "bar",
//     func: function() {
//          var self = this;
//          console.log("outer func: this.foo = " + this.foo);
//          console.log("outer func: self.foo = " + self.foo);

//          (function() {
//            console.log("inner func: this.foo = " + this.foo);
//             console.log("inner func: self.foo = " + self.foo);
//             }());
//           }
//       };

//     myObject.func();

// Bar
// bar

// undefined
// bar

//   var b=15;
// function foo(){
//     var b=5;

//     function baz (){
//         console.log(b)
//     }
//     exec(baz);
// }

// function exec(func){
//     var b=10;
//     func();
// }
// foo();

//5
// Inside exec, another variable b is declared with the value 10, but this b is local to exec.
// When func() (which is actually baz) is called, it does not refer to the variable b inside exec,
// because baz was defined in the lexical scope of foo, not exec.
// So, when baz runs, it looks for the value of b in the scope where it was defined (inside foo), where b = 5.
// Closures allow functions to "remember" the scope in which they were created. Even though baz is executed inside exec,
//  it still refers to the variable b from the foo function's scope, which is 5.
// The variable b = 10 inside exec is not used by baz because baz is bound to the scope where it was defined (foo).

// // You have an array of products, each with a type and name. Group the products by their type.
// const products = [
//   { id: 1, type: "electronics", name: "TV" },
//   { id: 2, type: "clothing", name: "T-shirt" },
//   { id: 3, type: "electronics", name: "Laptop" },
//   { id: 4, type: "clothing", name: "Jeans" },
//   { id: 5, type: "furniture", name: "Sofa" },
// ];

// const result = products.reduce((acc, curr) => {
//   const type = curr.type;
//   if (!acc[type]) {
//     acc[type] = [];
// }
//     acc[type].push(curr);
//   return acc;
// }, {});
// console.log("result", result);

// function Person(name) {
//     this.name = name;
//   }

//   Person.prototype.getName = function () {
//     return this.name;
//   };

//   const person1 = new Person("Alice");
//   const person2 = Person("Bob");

//   console.log(person1.getName()); // Alice
//   console.log(person2.getName()); // error

// const animal = {
//   type: "Animal",
//   speak() {
//     console.log("Roar!");
//   },
// };
// const lion = Object.create(animal);
// lion.speak(); // Roar

// Write a function to find the longest word in a sentence.

// const scent = "I love JavaScript programming";

// function longestWord(inputValue) {
//   const outPut = inputValue.split(" ").reduce((acc, curr) => {
//     acc = curr.length>acc.length?curr:acc;
//     return acc;
//   }, "");
//return outPut
// }
// console.log(longestWord(scent));

// console.log([] == ![]) //true
// console.log(typeof undefined)  //undefined
// console.log([] + []) //
// console.log(1 < 2 < 3) // true
// console.log( 3 > 2 > 1) //false

// var b = 9 || 1 || 3;
// console.log(b) // 9

// function sum(a){
//     return function (b){
//       if(b){
//         return sum (a+b)
//       }
//       else{
//         return a
//       }
//     }
// }

// const sum=(a)=>(b)=> b?sum(a+b):a

// sum(1)(2)(3)(4)()

// -------------------------------------------------------------------------------------

// Deep comparison
// const obj1 = {
//   a: "test1",
//   b: "test2",
//   c: "test3",
//   d: [1, 2, 3],
//   e: {
//     a: 22,
//   },
// };

// const obj2 = {
//   a: "test1",
//   b: "test2",
//   c: "test3",
//   d: [1, 2, 3],
//   e: {
//     a: 22,
//   },
// };

// const deepEqual = (objA, objB) => {
//     //Compare actual value break recursion
//     if (typeof objA !== "object" || typeof objB !== "object") {
//       return objA === objB;
//     }
//     //Compare array
//     if (Array.isArray(objA) && Array.isArray(objA)) {
//       //Compare array length
//       if (objA.length !== objB.length) {
//         return false;
//       }
//       for (let i = 0; i < objA.length; i++) {
//         if (!deepEqual(objA[i], objB[i])) {
//           return false;
//         }
//       }
//       return true;
//     }
//     //Compare objects
//     const KeyA = Object.keys(objA);
//     const KeyB = Object.keys(objB);

//     if (KeyA.length !== KeyB.length) {
//       return false;
//     }
//     for (let key of KeyA) {
//       if (!KeyB.includes(key) || !deepEqual(objA[key], objB[key])) {
//         return false;
//       }
//     }
//     return true;
//   };

// console.log(deepEqual(obj1, obj2));

// function printPattern(n) {
//   let num = 1;
//   let space = n - 1;

//   for (let i = 1; i <= n; i++) {
//     let line = "";

//     // Add spaces
//     for (let j = 1; j <= space; j++) {
//       line += "  ";
//     }

//     // Add numbers
//     for (let j = 1; j <= i; j++) {
//       line += num + " ";
//       num++;
//     }

//     // Update the number of spaces
//     space--;

//     console.log(line);
//   }
// }

// printPattern(4);

//Check if Two Arrays Are Equal
// function arraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     const sortedArr1 = arr1.slice().sort();
//     const sortedArr2 = arr2.slice().sort();
//     return sortedArr1.every((value, index) => value === sortedArr2[index]);
//   }

//   // Usage:
//   console.log(arraysEqual([1, 2, 3], [3, 2, 1])); // Output: true
//   console.log(arraysEqual([1, 2, 3], [4, 5, 6])); // Output: false

// Generate All Permutations of a String

// function permute(str) {
//     if (str.length <= 1) return [str];

//     let result = [];
//     for (let i = 0; i < str.length; i++) {
//       let char = str[i];
//       let remainingStr = str.slice(0, i) + str.slice(i + 1);
//       for (let perm of permute(remainingStr)) {
//         result.push(char + perm);
//       }
//     }
//     return result;
//   }

//   // Usage:
//   console.log(permute('abc')); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
