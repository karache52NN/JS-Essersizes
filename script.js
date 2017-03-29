var location1=0;
var location2=0;
var location3=0;
var randlock=Math.floor(Math.random()*5);
location1=randlock;
location2=location1+1;
location3=location2+1;

var gues=0;
var numberOfTry=0;
var hits=0;
var guesses=0;

var isSunk=false;

while (isSunk==false) {
  gues=prompt("Ready! Aim! Fire!(enter a number 0-6):");
  if (gues<0 || gues>6) {
    alert("Please? enter a valid cell number");
  }
  else {
    guesses=guesses+1;
  }

  if (gues==location1 || gues==location2 || gues==location3) {
    hits=hits+1;
    alert("Hit");
  }
  else {
    alert("Miss");
  }

  if (hits==3) {
    isSunk=true;
    alert("You sank the battleship");
  }
}
var stats="You took "+guesses+" guesses to sunk my battleship" +
" wich means you accuracy was "+((3/guesses)*100)+"%";
alert(stats);
