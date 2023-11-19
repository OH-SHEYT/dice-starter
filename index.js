const dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

var player_1_random = Math.floor(Math.random() * 6);
$(document).ready(function(){
  $(".img1").attr("src", dice[player_1_random]);
})


var player_2_random = Math.floor(Math.random() * 6);
$(document).ready(function(){
  $(".img2").attr("src", dice[player_2_random]);
})


if (player_1_random > player_2_random) {
$("h1").text("🚩 Player 1 wins 🚩");
}else if (player_2_random > player_1_random) {
$("h1").text("🚩 Player 2 wins 🚩");
}else{
  $("h1").text("draw");
}
