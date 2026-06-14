let selected = null;
let choices = {
    1:'rock',
    2:'paper',
    3:'scissors'
}
let beats = {
    'rock':'scissors',
    'paper':'rock',
    'scissors':'paper'
}

const rock = document.querySelector('.rock');

rock.addEventListener('click', function(event){
    selected = 'rock';
    const player_img = document.querySelector('.player').querySelector('img');
    player_img.src = `images/hand-rock.png`;
    updateChoice();
let computer_image = document.querySelector('.computer').querySelector('img');
    computer_image.src="";
});


const paper = document.querySelector('.paper');

paper.addEventListener('click', function(event){
    selected = 'paper';
    const player_img = document.querySelector('.player').querySelector('img');
    player_img.src = `images/hand-paper.png`;
    updateChoice();
let computer_image = document.querySelector('.computer').querySelector('img');
    computer_image.src="";
});


const scissors = document.querySelector('.scissors');

scissors.addEventListener('click', function(event){
    selected='scissors';
    const player_img = document.querySelector('.player').querySelector('img');
    player_img.src = `images/hand-scissors.png`;
    updateChoice();
let computer_image = document.querySelector('.computer').querySelector('img');
    computer_image.src="";
});


const choice = document.querySelector('.choice');

if(selected != null){
    choice.textContent = selected;
};

function updateChoice(){
    if (selected!= null){
        choice.textContent = selected;
    }
}

const result = document.querySelector('.result');

const play = document.querySelector('.play').addEventListener('click', function(event){
    const computer = choices[Math.floor(((Math.random()*3) + 1))];
    let computer_image = document.querySelector('.computer').querySelector('img');
    computer_image.src = `images/hand-${computer}.png`;
    computer_image.style.transform = 'scaleX(-1)';
    console.log(selected);
    console.log(computer);
    let res = '';
    if (computer == selected){
        res = `it's a draw, computer chose ${computer}`;
    }
    else if(computer == beats[selected]){
        res = `you lose, computer chose ${computer}`;
    }
    else{
        res = `you win, computer chose ${computer}`;
    }
    result.textContent = res;
})