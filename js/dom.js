
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
const arrowFunction  = (first, second) => first + second;
const result = arrowFunction(20, 50);
console.log(result);




