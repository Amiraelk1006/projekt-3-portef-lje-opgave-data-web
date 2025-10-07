
//02 - Startup name generator
s


// First I make two lists of words for the startup names
const firstPart = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
const secondPart = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

// Now I want to make a function that picks a random word from each list
function getStartupName() {
    // Pick a random index for the first word
    const firstIndex = Math.floor(Math.random() * firstPart.length);

    // Pick a random index for the second word
    const secondIndex = Math.floor(Math.random() * secondPart.length);

    // Combine the two words with a space in between and return it
    return firstPart[firstIndex] + " " + secondPart[secondIndex];
}

// Then i test it a few times to see some names
console.log("Your startup name could be: " + getStartupName());
console.log("Your startup name could be: " + getStartupName());
console.log("Your startup name could be: " + getStartupName());




//03 - Treasure Hunter