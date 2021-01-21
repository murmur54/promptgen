//These variables hold strings that make up each part of the prompt- a beginning, a middle, and end.

const part1 = [
    "A strangely small man",
    "A robust, strong-willed elf child",
    "A busty woman that is quite obviously three halflings in a trenchcoat",
    "The president of the Orc society",
    "A talking dog",
];
const part2 = [
    "sprints to your feet",
    "springs up in front of you",
    ", covered in blood and smelling of fish, walks past",
    "sets the nearest wooden object ablaze",
    "picks up a small rodent and eats it",
];
const part3 = [
    "asks you for any loose change",
    "wonders aloud where they're staying tonight",
    "shakes your hand and says 'Welcome! Don't stay too long, or they'll get you!",
    "sniffs you. Really, really deeply.",
    "cries out in pain and dies.",
];

function getMessage(){
    const a = part1[Math.floor(Math.random() * part1.length)];
    const b = part2[Math.floor(Math.random() * part2.length)];
    const c = part3[Math.floor(Math.random() * part3.length)];

    if (!a || !b || !c) {
        console.log("error");
    };

    printMessage(a, b, c);
}

function printMessage(a, b, c){
    //This will change the innerHTML of elements on the webpage to show the current prompt.
    const message = `${a} ${b}, then ${c}`;
    console.log(message);
}

getMessage();