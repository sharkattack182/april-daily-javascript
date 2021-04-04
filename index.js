// Balanced Words
// We can assign a value to each character in a word, based on their position in the alphabet (a = 1, b = 2, ... , z = 26). A balanced word is one where the sum of values on the left-hand side of the word equals the sum of values on the right-hand side. For odd length words, the middle character (balance point) is ignored.
// Difficulty: Very Hard
// Date: April 1 2021
// Solve Time: 18 minutes

// function balanced(string) {
//     var l = string.length;

//     if(l % 2 == 0) {
//         var half = string.length / 2;
//         var firstHalf = string.substring(0, half);
//         var secondHalf = string.substring(half);

//         var side1 = 0;
//         var side2 = 0;

//         firstHalf.split("").forEach(element => {
//             var value = element.charCodeAt(0) - 96;
//             side1 += value;
//         });

//         secondHalf.split("").forEach(element => {
//             var value = element.charCodeAt(0) - 96;
//             side2 += value;
//         });

//         if(side1 === side2) {
//             console.log("true")
//         } else {
//             console.log("false")
//         }
//     } else {
//         var mid = string.length / 2 + .5;
//         var firstHalf = string.substring(0, mid - 1);
//         var secondHalf = string.substring(mid);

//         var side1 = 0;
//         var side2 = 0;

//         firstHalf.split("").forEach(element => {
//             var value = element.charCodeAt(0) - 96;
//             side1 += value;
//         });

//         secondHalf.split("").forEach(element => {
//             var value = element.charCodeAt(0) - 96;
//             side2 += value;
//         });

//         if(side1 === side2) {
//             console.log("true")
//         } else {
//             console.log("false")
//         }
//     }
// }

// balanced("zips");
// balanced("brake");

// Product of Digits of Sum
// Create a function that takes numbers as arguments, adds them together, and returns the product of digits until the answer is only 1 digit long.
// Difficulty: Very Hard
// Date: April 2 2021
// Solve Time: 19 minutes

// function sumDigProd(...nums) {
//     const sum = nums.reduce((total, num) => total += num, 0);
//     const str = sum.toString();

//     if(str.length === 1) {
//         console.log(sum)
//     } else {
//         return multiplyDigits(str);
//     }

//     function multiplyDigits(str) {
//         const product = str.split("").reduce((total, val) => total *= parseInt(val));

//         if(product < 10) {
//             console.log(product);
//             return product;
//         } else {
//             return multiplyDigits(product.toString())
//         }
//     }

// }

// sumDigProd(16, 28);
// // 16 + 28 = 44
// // 4 * 4 =  16
// // 1 * 6 = 6

// sumDigProd(0);

// sumDigProd(1, 2, 3, 4, 5, 6);

// Find All Digits
// Taking each four digit number of an array in turn, return the number that you are on when all of the digits 0-9 have been discovered. If not all of the digits can be found, return "Missing digits!".
// Difficulty: Very Hard
// Date: April 3 2021
// Solve Time: 18 minutes

function findAllDigits(array) {
    let found = new Set();
    for (let n of array) {
        for(let d of [...`${n}`]) {
            found.add(d);
            if(found.size === 10) {
                console.log(n);
                return
            }
        }
    }
    console.log("missing digits")
}

findAllDigits([5175, 4538, 2926, 5057, 6401, 4376, 2280, 6137, 8798, 9083]);
// digits found:  517-  4-38  29-6  -0

findAllDigits([5719, 7218, 3989, 8161, 2676, 3847, 6896, 3370, 2363, 1381]);
// digits found:  5719  -2-8  3---  --6-  ----  --4-  ----  ---0

findAllDigits([4883, 3876, 7769, 9846, 9546, 9634, 9696, 2832, 6822, 6868]);
// digits found:  48-3  --76  ---9  ----  -5--  ----  ----  2---
// 0 and 1 are missing
