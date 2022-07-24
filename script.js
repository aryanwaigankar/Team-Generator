'use strict';

// let names = [];
let team1 = [];
let team2 = [];

document.querySelector('.btn-primary').addEventListener('click', function(){
    team1 = [];
    team2 = [];
    document.querySelector('.team1').value = ' ';
    document.querySelector('.team2').value = ' ';
    const list = document.querySelector('.playersAll').value
    // console.log(list);
    const names = list.split(' ')
    console.log(names);

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
        team1.push(array.slice(0,array.length/2))
        team2.push(array.slice(array.length/2,array.length))
      }
    shuffle(names)
    console.log(team1);
    // team1.join(' ')
    document.querySelector('.team1').value = team1;
    document.querySelector('.team2').value =  team2;
})

document.querySelector('.btn-danger').addEventListener('click', function(){
    team1 = [];
    team2 = [];
    document.querySelector('.team1').value = ' ';
    document.querySelector('.team2').value = ' ';
})