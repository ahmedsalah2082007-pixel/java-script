//A. 1
// console.log(Number("123") + 7);

// 2
// let x = 0;
// if (Boolean(x) === false)
// {
//     console.log("invalid");
// }

// // 3
// for (let i = 1; i <= 10; i++)
// {
//     if (i % 2 === 0)
//     {
//         continue;
//     } else
//     {
//         console.log(i);
        
//     }
    
// }

// 4
// let arr = [1, 2, 3, 4, 5, 6];
// const result = arr.filter(num => num % 2 === 0);
// console.log(result);

// 5
// let arr1 = [1,2,3];
// let arr2 = [4,5];
// const result = [...arr1 ,...arr2]
// console.log(result);

// 6
// let day = 4;
// switch (day) {
//     case 1:
//         console.log("sun.");
//         break;
//     case 2:
//         console.log("mon.");
//         break;
//     case 3:
//         console.log("tue.");
//         break;
//     case 4:
//         console.log("wed.");
//         break;
//     case 5:
//         console.log("thu.");
//         break;
//     case 6:
//         console.log("fri");
//         break;
//     case 7:
//         console.log("sat.");
//         break;

//     default:
//         console.log("invalid day");
        
//         break;
// }

// 7
// let names = ["ahmed", "ali", "mohamed"];
// const result = names.map(item => item.length);
// console.log(result);

// 8
// function check(x)
// {
//     if (x % 3 === 0 && x % 5 === 0)
//     {
//         console.log("divisible by both");
//     } else {
//         console.log("cannot divisible by both");
//     }
// }
// check(15);
// check(10);

// 9
// const power2 = (x) => {
//     return x ** 2;
// }
// console.log(power2(5));

// 10
// let user = {
//     name: "ahmed",
//     age : 20
// }
// const { name, age } = user;
// console.log(`${name} is ${age} years old`);

// 11
// function sum(...nums)
// {
//     return nums.reduce((total, num) => total + num, 0);
// }
// console.log(sum(10,20,30,40,50));

// 12
// function test() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("success");
//         }, 3000);
//     });
// }

// test().then((msg) => {
//     console.log(msg);
// });

// 13
// function largest(arr) {
//     let max = arr[0];

//     for (const num of arr) {
//         if (num > max) {
//             max = num;
//         }
//     }
//     return max;
// }
// console.log(largest([1, 5, 8, 9, 4]));

// 14
// function key(user)
// {
//     return Object.keys(user);
// }
// console.log(key({
//     name: "ahmed",
//     age : 20
// }));

// 15
function split(str) {
    return str.split(" ");
}
console.log(split("The quick brown fox"));
