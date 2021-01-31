//variables for locking the different parts of the phrase. controlled by user input
let lockA = 0;
let lockB = 0;
let lockC = 0;
let lockD = 0;

let a;
let b;
let c;
let d;

//These variables hold strings that make up each part of the prompt- a beginning, a middle, and end.

const part1 = [
  "Fire",
  "Frost",
  "Formless ",
  "Dead",
  "Sting",
  "Un-",
  "Bright",
  "Steel",
  "Anti-",
  "Beast"
];
const part2 = [
  "brand",
  "mourne",
  "bringer",
  "touch",
  "king",
  "render",
  "ender",
  "birth",
  "hammer",
  "shard"
];
const part3 = [
  "shortsword",
  "dagger",
  "warhammer",
  "knife",
  "crossbow",
  "staff",
  "glaive",
  "arquebus",
  "rapier",
  "lance",
  "crystal",
  "beast",
  "spear",
  "slayer",
  "axe"
];
const part4 = [
  "Darkness",
  "Light",
  "Burning",
  "Chills",
  "Life",
  "The Fallen King",
  "The Hollow Tomb",
  "The Heavens",
  "The Abyss",
  "God Himself",
  "Agamemnon",
  "Asmodeus",
  "your Ancestors",
  "The End",
  "Retribution",
  "Life",
  "Life",
];

// the message creator: first checks if the message parts have been locked by the user. If the variable is not locked, a new message part will be created, then the whole message is displayed.
function getMessage() {
  if (!lockA) {
    a = part1[Math.floor(Math.random() * part1.length)];
  }
  if (!lockB) {
    b = part2[Math.floor(Math.random() * part2.length)];
  }
  if (!lockC) {
    c = part3[Math.floor(Math.random() * part3.length)];
  }
  if (!lockD) {
    d = part4[Math.floor(Math.random() * part4.length)];
  }
  printMessage(a, b, c, d);
}

function printMessage(a, b, c, d) {
  //This will change the innerHTML of elements on the webpage to show the current prompt.
  const message = `${a}${b}, the ${c} of ${d}`;
  console.log(message);
  document.getElementById("message").innerHTML = message;
}

function doLockA() {
  if (!lockA) {
    lockA = 1;
    document.getElementById("locka").style.color = "blue";
    document.getElementById("locka").innerHTML = "Unlock A";
  } else {
    lockA = 0;
    document.getElementById("locka").style.color = "red";
    document.getElementById("locka").innerHTML = "Lock A";
  }
}

function doLockB() {
  if (!lockB) {
    lockB = 1;
    document.getElementById("lockb").style.color = "blue";
    document.getElementById("lockb").innerHTML = "Unlock B";
  } else {
    lockB = 0;
    document.getElementById("lockb").style.color = "red";
    document.getElementById("lockb").innerHTML = "Lock B";
  }
}

function doLockC() {
  if (!lockC) {
    lockC = 1;
    document.getElementById("lockc").style.color = "blue";
    document.getElementById("lockc").innerHTML = "Unlock C";
  } else {
    lockC = 0;
    document.getElementById("lockc").style.color = "red";
    document.getElementById("lockc").innerHTML = "Lock C";
  }
}

function doLockD() {
  if (!lockD) {
    lockD = 1;
    document.getElementById("lockd").style.color = "blue";
    document.getElementById("lockd").innerHTML = "Unlock D";
  } else {
    lockD = 0;
    document.getElementById("lockd").style.color = "red";
    document.getElementById("lockd").innerHTML = "Lock D";
  }
}

getMessage();
