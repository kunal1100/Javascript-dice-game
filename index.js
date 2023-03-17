dicegame=()=>{

const player1 = Math.floor(Math.random()*6)+1
const play1dice = "images/dice"+player1+".png"
var image1 = document.querySelectorAll("img")[0]
image1.setAttribute('src', play1dice)

const player2 = Math.floor(Math.random()*6)+1
const play2dice = "images/dice"+player2+".png"
var image2 = document.querySelectorAll("img")[1]
image2.setAttribute('src', play2dice)

if(player1>player2){
    document.querySelector('h1').innerHTML = 'Player 1 Wins!'
}
else if(player1<player2){
    document.querySelector('h1').innerHTML = 'Player 2 Wins!'
}
else{
    document.querySelector('h1').innerHTML = 'Oops, Draw!'
}
}