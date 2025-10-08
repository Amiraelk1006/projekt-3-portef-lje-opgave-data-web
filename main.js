
//02 - Startup name generator

// Array 1: First part of the startup name
const firstword = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
// Array 2: Second part of the startup name
const secondword = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

//Her laver jeg et navn
const getStartUpName = () =>{

    //her vælger et tilfældigt tal/navn fra begge arrays
    const firstNum = Math.floor(Math.random() * firstword.length)
    const secondNum = Math.floor(Math.random() * secondword.length)

    // her sammensætter jeg de to arrays og retunere det
    return `${firstword[firstNum]} ${secondword[secondNum]}`
}
//her logger jeg ud
console.log("Your startup name is: " + getStartUpName() )



//03 - Treasure Hunter
//level 1
const island = ['-', '-', 'T',  '-', '-'];
//tæller hvor mange index der er i array
//+ for mellemrum
console.log("there are " + island.length + " moves on the island")


//jeg har fået hjælp af klassekamarater

//level 2
const island1 = ['-', '-', 'T',  '-', '-'];

// Her tæller variabelet treasures skattene
let treasures = 0
console.log("There's " + island.length + " moves on this island");

//Note til mig selv variablet 1 kører talene 0,1,2,3,4,5
for (let i = 0; i < 5; i++){
    if (island1[1]=== 'T'){
        console.log(`treasure found at move ${i + 1} :)`);
        // hvis der fundet mere end 1
        treasures++;
    }else {
        console.log('no treasure found');
    }
}

console.log('There are ' + treasures + ' treasures at this island');


//level 3

const island2 = ['-', '-', 'T',  '-', '-'];

//Variablet tæller skattene
let treasures1 = 0;

// Her tæller vi fra hvert felt
for(const cell of island2){
    if (cell === 'T'){
        treasures1++;
    }
}
// her logger vi ud hvor mange skatte der bliver fundet
console.log(`There are ${treasures1} treasures on the island`);



//04 - Student Grades Analysis

//if else   math.floor
// 1
const studentGrades=[85, 78, 68, 63, 95, 58, 72, 54]

console.log(studentGrades.length);


// 3. Klassificer og log hver karakter i en af følgende kategorier - niveau 2

// jeg har i denne del modtaget hjælp fra en medstuderende
// Her skriver jeg else if for at tjekke hvike grade der falder ind
for (const grade of studentGrades) {
    if (grade >= 90) {
        console.log(`Grade: ${grade} -> A`);
    } else if (grade >= 80) {
        console.log(`Grade: ${grade} -> B`);
    } else if (grade >= 70) {
        console.log(`Grade: ${grade} -> C`);
    } else if (grade >= 60) {
        console.log(`Grade: ${grade} -> D`);
    } else {
        console.log(`Grade: ${grade} -> F`);
    }
}



//4. Evaluate overall class performance - level 2

//Jeg har modtaget hjælp fra en medstuderende
if (studentGrades.length === 0) {
    console.log("Ingen karakterer at evaluere.");
} else {
    const sum = studentGrades.reduce((acc, g) => acc + g, 0);
    const average = sum / studentGrades.length;

    let performance;
    if (average >= 90) {
        performance = "Excellent";
    } else if (average >= 80) {
        performance = "Good";
    } else if (average >= 70) {
        performance = "Satisfactory";
    } else {
        performance = "Needs Improvement";
    }
    console.log(`Gennemsnit: ${average.toFixed(2)} -> ${performance}`);
}




// 6. Output - viser højeste, laveste, gennemsnit og alle karakterer

// Her finder jeg den højeste og laveste karakter med a Math.max og Math.min
// jeg har fået hjælp til igen af en medstuderende
const highest = Math.max(...studentGrades);
const lowest = Math.min(...studentGrades);

// her finder man gennemsnittet
const average = studentGrades.reduce((a, b) => a + b, 0) / studentGrades.length;

// bogstaverne er ude fra talene
//her har jeg fået hjælp af en medstuderende, som har anvendt til opbygningen af funktionen
function getLetter(grade) {
    if (grade >= 90) return "A";
    else if (grade >= 80) return "B";
    else if (grade >= 70) return "C";
    else if (grade >= 60) return "D";
    else return "F";
}

// her logger jeg dem så vi kan se dem
//hjælp fra medstuderende
console.log("OUTPUT ");
console.log("Highest Grade:", highest, "(", getLetter(highest), ")");
console.log("Lowest Grade:", lowest, "(", getLetter(lowest), ")");
console.log("Average Grade:", average.toFixed(1), "(", getLetter(average), ")");





// 6 - Dice Rolling Championship


// Level 1 - Player Setup

// her får jeg prompt til at spørge om player 1 og 2s navn
const player1 = prompt("Enter Player 1's name:");
const player2 = prompt("Enter Player 2's name:");

// Her logger vi dem ud så de kommer frem på cosolen
//"Welcome to the Dice Rolling Championship" har jeg skrevet bare så man kan se hvilke opgave vi er i
console.log("Welcome to the Dice Rolling Championship")
console.log("Player 1:", player1);
console.log("Player 2:", player2);



//Level 2 - Single Round
//jeg skriver function da den så vil vælge et tal mellem 1 - 6
function rollDice(){
    //math.random tager et tilfældigt tal mellem 1-6
    return Math.floor(Math.random() * 6) + 1;
}
//ved hjælp af denne function altså prompt, får man muligheden for at trykke som et spil
prompt(`${player1}, press Enter to roll...`);


// vi logger dem nu ud for at terningerne bliver kastet og det random tal bliver valgt for player 1 og 2
//første kast
const player1Roll = rollDice();
console.log(`${player1} rolled: ${player1Roll}`);


// andet kast
const player2Roll = rollDice();
console.log(`${player2} rolled: ${player2Roll}`);