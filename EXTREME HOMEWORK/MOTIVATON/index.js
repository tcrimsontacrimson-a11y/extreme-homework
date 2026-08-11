
var motivation=[
    "You can do it",
    "I believe in you",
    "I love you",
    "I will always trust you",
    "Congratulations",
    "Excellent",
    "Wonderful",
    "You can do it",
    "Good",
    "Thank You",
    "I forgive you",
    "I like you",
    "Sorry",
    "My bad",
    "Congrats",
    "Darling",
    "Winner"
];
function random() {
  let ranResult=Math.floor(Math.random()*motivation.length);
document.getElementById("result").textContent=motivation[ranResult];
}

