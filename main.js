
//02 - Startup name generator


// Array 1: First part of the startup name
const firstword = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
// Array 2: Second part of the startup name
const secondword = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

//Her laver jeg et navn
const getStartUpName = () =>{
    const firstNum = Math.floor(Math.random() * firstword.length)
    const secondNum = Math.floor(Math.random() * secondword.length)
    return `${firstword[firstNum]} ${secondword[secondNum]}`
}

console.log("Your startup name is: " + getStartUpName() )







//03 - Treasure Hunter
//level 1
const island = ['-', '-', 'T',  '-', '-'];
//tæller hvor mange index der er i array
//+ for mellemrum
console.log("there are " + island.length + " moves on the island")
