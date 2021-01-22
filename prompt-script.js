//variables for locking the different parts of the phrase. controlled by user input
let lockA = 0;
let lockB = 0;
let lockC = 0;

let a;
let b;
let c;


//These variables hold strings that make up each part of the prompt- a beginning, a middle, and end.

const part1 = [
    "A strangely small man",
    "A robust, strong-willed elf child",
    "A busty woman that is quite obviously three halflings in a trenchcoat",
    "The president of the Orc society",
    "A talking dog",
    "Somebody's grandmother",
    "A distant, long-forgotten relative of yours",
    "The deranged, foul-smelling town crier",
    "One of the local deities",
    "King Heinfallr himself",

];
const part2 = [
    "sprints to your feet",
    "springs up in front of you",
    ", covered in blood and smelling of fish, walks past",
    "sets the nearest wooden object ablaze",
    "picks up a small rodent and eats it",
    "does a strange little dance",
    "spends a few minutes gardening",
    "fingerpaints the town's tallest signpost",
    "recites the opening act of their very own play",
    "scarves down a dire-worm wholehog",
];
const part3 = [
    "asks you for any loose change",
    "wonders aloud where they're staying tonight",
    "shakes your hand and says 'Welcome! Don't stay too long, or they'll get you!",
    "sniffs you. Really, really deeply.",
    "cries out in pain and dies.",
    "tries taming your furriest party member.",
    "throws a hollow stone at your feet.",
    "screeches.",
    "takes a short rest.",
    "attempts to rob the nearest person.",
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
    if (!a || !b || !c) {
        console.log("error");
    };

    printMessage(a, b, c);
}

function printMessage(a, b, c){
    //This will change the innerHTML of elements on the webpage to show the current prompt.
    const message = `${a} ${b}, then ${c}`;
    console.log(message);
    document.getElementById("message").innerHTML=message;
}

function doLockA() {
    if (!lockA) {
      lockA = 1;
      document.getElementById("locka").style.color ="blue";
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
      document.getElementById("lockb").style.color ="blue";
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
      document.getElementById("lockc").style.color ="blue";
      document.getElementById("lockc").innerHTML = "Unlock C";
    } else {
      lockC = 0;
      document.getElementById("lockc").style.color = "red";
      document.getElementById("lockc").innerHTML = "Lock C";
    }
  }

getMessage();