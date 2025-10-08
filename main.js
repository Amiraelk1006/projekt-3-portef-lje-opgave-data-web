
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




//













