// document.getElementById('apply-bg').addEventListener('click', function(){

//     const friendsBg = document.getElementsByClassName('friends');
//     for (const friend of friendsBg) {
//         friend.style.backgroundColor = 'lightblue';
//     }
// });
// //this is for third friend btn
// //now this is a change
// document.getElementById('third-friend-bg').addEventListener('click', function(){
//     const thirdFriend = document.getElementById('third-friend');
//     thirdFriend.style.textAlign = 'center';
// });
// //add new friends
// document.getElementById('add-friend').addEventListener('click', function(){
//     const friendsContainer = document.getElementById('friends-container');
//     const newFriend = document.createElement('div');
//     newFriend.classList.add('friends');
//     newFriend.innerHTML = `
//     <h3 class="friend-name">New Friends</h3>
//     <p>Ad tenetur maxime, accusantium omnis quod ipsum. Aliquam, beatae officiis!</p>
//     `
//     friendsContainer.appendChild(newFriend);

// });

//add to parameter without using function but also using arrow function...
// const arrowFunction  = (first, second) => first + second;
// const result = arrowFunction(20, 50);
// console.log(result);

//single/one parameter
// const fiveTimes = (num) => num *5;
// console.log(fiveTimes(5));

// const doubleIt = (number) => number *2;
// console.log(doubleIt(3));

// const getPie = () => 3.14;
// console.log(getPie());

//multi line arrow function
// const multArrow = (a,b,c) => {
//     const firstSum = a + b;
//     const secondSum = b + c;
//     const multi = firstSum * secondSum;
//     const result  = multi / 2;
//     return result;
// }
// console.log(multArrow(5, 5, 5));

// const add = (a, b) => a * b;
// console.log(add(2,5));

//multiline code/{}second bracket dile => return korte hoy
// const add = (a, b) => {
//     return a * b;
// }
// console.log(add(2,5));

//spread...(3 dot)...
// const maxNumber = Math.max(22,560, 44,66,88,11,44);
// console.log(maxNumber);

// const findMaxFromArray = [22,55,77,22,44,45,788,33,22];
// const largest = Math.max(...findMaxFromArray);
// console.log(...findMaxFromArray);//spread out
// console.log(largest);

//array/object k same var e rakle 2ta same jinis k define korbe
// const number1 = [12,43,4,566,4];
// number1.push(55);

// const number2 = number1;
// number2.push(66);

// console.log(number1);
// console.log(number2);

//oi problem k solve korte spread use korte hobe
// const number1 = [12,43,4,566,4];
// number1.push(55);

// const number2 = [...number1];//spread...
// number2.push(66, 55,88);
// number3 = [10, 30, ...number2, 50, 100];

// console.log(number1);
// console.log(number2);
// console.log(number3);

//destructuring......
// const data1 = {
//     name: 'peon',
//     roll: 44,
//     age: 20,
//     cgpa: 3.30
// };

// let age = data1.age;
// console.log(age);

//property er name diye variable declare kora

// const {name, roll, lived} = {name: 'karim', age: 22, roll: 4334, lived: "andarkilla"};//destructuring
// console.log(name, roll , lived);

//array destructuring
// const [firstvalue, secondvalue,c,d] = [44,55,77,88];
// console.log( firstvalue, secondvalue,c,d);

// const icon = '❤';
// console.log(icon);
// console.log(`love  ${icon}`);

// const roll = [33,44,55,66];
// roll.unshift(44,55)
// console.log(roll);

// function getSum(a, b=9 ) {
//   return a + b;
// }
// console.log(getSum(2,7));

// const y = (x) => x * x;
// const z = y(5);
// console.log(z);

// const division = (num1, num2) => num1 / num2;

// console.log(division(4,2) );
























