
document.getElementById('apply-bg').addEventListener('click', function(){

    const friendsBg = document.getElementsByClassName('friends');
    for (const friend of friendsBg) {
        friend.style.backgroundColor = 'lightblue';
    }
});
//this is for third friend btn
//now this is a change
document.getElementById('third-friend-bg').addEventListener('click', function(){
    const thirdFriendBg = document.getElementById('third-friend');
    thirdFriendBg.style.backgroundColor = 'blue';
});