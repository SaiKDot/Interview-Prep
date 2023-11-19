// let car = function(model) {
//     this.model = model
// }

// car.prototype.getModel = function(){
//     return this.model;
// }

// const toyota = new car("toyota");
// console.log('ert',toyota.getModel())

// var a = 1;
// function b() {
// 	a = 10;
// 	return;
// 	function a() {}
// }
// b();
// console.log(a);

//  function reverseNumber(num) {
//  	let number = num
//   let reversedNumber = 0;

//   while (number !== 0) {

//     console.log(`${reversedNumber * 10} + ${number % 10} = ${reversedNumber}`);
//     reversedNumber = reversedNumber * 10 + (number % 10);
//     number = Math.floor(number / 10);
//     console.log('now number is', number)
//   }

//   return reversedNumber;
// }

// // Example usage
// const number = 12345;
// const reversedNumber = reverseNumber(number);

// console.log(number, reversedNumber);

// TWO SUMS

function twoSumIndicesBasic(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(nums[i], nums[j]);
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// function twoSumIndicesAdvanced(nums,target) {
//     const comps = new Map()
//     const len =nums.length
//     for(let i=0; i< len;i++) {
//         // if (comps[nums[i]] >=0) {
//         //     return [comps[nums[i]],i]
//         // }
//         comps[target - nums[i]] = i;
//         console.log(comps[nums[i]])

//     }
//     console.log(comps);
//    return [];

// }
// // Example usage
// const nums = [ 11, 15,45,2,56,2,7,2,7,21,4,7,3,12,2,1,-3,2,6,6];
// const target = 9;
// // const indices = twoSumIndicesBasic(nums, target);
// const indices2 = twoSumIndicesAdvanced(nums, target);

// console.log(indices2); // Output: [0, 1]

function firstMissingPositiveInteger(nums) {
  const len = nums.length;
  let j = 1;
  for (let i = 0; i < nums.length; i++) {
    let idx = nums[i] - 1;
    console.log({ idx }, { i }, { "nums[i]": nums[i] });
    console.log(`iteration number ${j}`);
    if (i == idx || nums[i] == nums[idx]) {
      console.log(nums[i], nums[idx]);
    } else if (idx >= 0 && idx <= len - 1) {
      [nums[i], nums[idx]] = [nums[idx], nums[i]];
      i--;
    }
    j++;
  }
  console.log(nums);
  for (let i = 0; i < len; i++) {
    if (!(i + 1 !== nums[i])) {
      return i + 1;
    }
  }
  return len + 1;
}
// console.log(firstMissingPositiveInteger([4,5,6,7,7,2,7,48,3,2,8,2,4,2,8,2]));

//  function printFullName() {
//   console.log(this.firstName + " " + this.lastName);
// };

// let name2 = {
//   firstName: "Sai",
//   lastName: "Krishna",
//   funct:
//    (params) => {
//     console.log(this.firstName)
//   }
// }
// name2.funct()
// printFullName.call(name2);

var myArray = [
  { id: 1, name: "John", age: 25, city: "New York" },
  { id: 2, name: "Jane", age: 30, city: "London" },
  { id: 1, name: "John", age: 25, city: "New York" },
  { id: 3, name: "Bob", age: 40, city: "Paris" },
  { id: 2, name: "Jane", age: 30, city: "London" },
  { id: 4, name: "Alice", age: 35, city: "Tokyo" }
];

const removeDuplicates = function (arr) {
  const uniqueArray = [];
  for (i = 0; i < arr.length; i++) {
    let isDup = false;
    for (let j = 0; j < uniqueArray.length; j++) {
      if (!isEqual(arr[i], uniqueArray[j])) {
        isDup = true;
      }
    }
    if (!isDup) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
};

function isEqual(arr1, arr2) {
  for (let prop in arr1) {
    if (arr1.hasOwnProperty(prop) && arr1[prop] !== arr2[prop]) {
      return false;
    }
  }
  return true;
}

// console.log(removeDuplicates(myArray))

function isPalidrome(num) {
  let reverse = 0;
  let number = num;
  // console.log(num > 0 && num <= 900);
  while (num > 0) {
    let rightmost = num % 10;
    reverse = reverse * 10 + rightmost;
    num = Math.floor(num / 10);
    // console.log(num);
    // console.log({ reverse });
  }

  if (number === reverse) return true;
  return false;
}

// console.log(isPalidrome(1111));

function secondHighest(arr) {
  let max = -Infinity;
  let secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  console.log({ secondMax });
  return secondMax;
}

function add(a) {
  return function (b) {
    return b == null ? a : add(a + b);
  };
}

console.log(add(10)(100)(1000)(4)());
