
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
// Her skriver jeg else if for at tjekke hvike grade der falder idn
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















