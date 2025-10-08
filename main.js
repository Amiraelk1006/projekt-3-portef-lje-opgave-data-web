
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
