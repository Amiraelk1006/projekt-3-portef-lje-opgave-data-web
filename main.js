
//02 - Startup name generator

// Array 1: First part of the startup name
const firstword = ["Tech", "Inno", "Smart", "Blue", "Next", "Bright", "Quantum", "Rapid", "Future", "Digital"];
// Array 2: Second part of the startup name
const secondword = ["Vision", "Solutions", "Systems", "Works", "Dynamics", "Hub", "Network", "Innovations", "Labs", "Path"];

//Here I create a name
const getStartUpName = () =>{

    //here I pick a random number/name from both array
    const firstNum = Math.floor(Math.random() * firstword.length)
    const secondNum = Math.floor(Math.random() * secondword.length)

    // here I combine the two arrays and return it
    return `${firstword[firstNum]} ${secondword[secondNum]}`
}
//here i log out
console.log("Your startup name is: " + getStartUpName() )



//03 - Treasure Hunter
//level 1
const island = ['-', '-', 'T',  '-', '-'];
//here i counts how many indexes there are in the array.
//+ for space
console.log("there are " + island.length + " moves on the island")


//i got help from a fellow student

//level 2
const island1 = ['-', '-', 'T',  '-', '-'];

// here the variable treasures counts the treasures.
let treasures = 0
console.log("There's " + island.length + " moves on this island");

//note to myself: variable 1 runs the numbers 0,1,2,3,4,5.
for (let i = 0; i < 5; i++){
    if (island1[1]=== 'T'){
        console.log(`treasure found at move ${i + 1} :)`);
        // If more than one is found
        treasures++;
    }else {
        console.log('no treasure found');
    }
}

console.log('There are ' + treasures + ' treasures at this island');


//level 3

const island2 = ['-', '-', 'T',  '-', '-'];

//The variable counts the treasures
let treasures1 = 0;

// here we count from each field
for(const cell of island2){
    if (cell === 'T'){
        treasures1++;
    }
}
//i log how many treasures are found
console.log(`There are ${treasures1} treasures on the island`);



//04 - Student Grades Analysis


const studentGrades=[85, 78, 68, 63, 95, 58, 72, 54]

console.log(studentGrades.length);


// 3. Classify and log each grade into one of the following categories - level 2

// In this part I received help from a classmate
// here i write else if to check which grade it falls into
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

//got help from student
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




// 6. Output

// here I find the highest and lowest grade using Math.max and Math.min
const highest = Math.max(...studentGrades);
const lowest = Math.min(...studentGrades);

// here i find the average
const average = studentGrades.reduce((a, b) => a + b, 0) / studentGrades.length;

// the letters are outside the numbers
//here I got help from a fellow student who helped build the function
function getLetter(grade) {
    if (grade >= 90) return "A";
    else if (grade >= 80) return "B";
    else if (grade >= 70) return "C";
    else if (grade >= 60) return "D";
    else return "F";
}

// here I log them so we can see them
//with help from fellow student
console.log("OUTPUT ");
console.log("Highest Grade:", highest, "(", getLetter(highest), ")");
console.log("Lowest Grade:", lowest, "(", getLetter(lowest), ")");
console.log("Average Grade:", average.toFixed(1), "(", getLetter(average), ")");





// 6 - Dice Rolling Championship

// Level 1 - Player Setup

//here I use prompt to ask for player 1 and player 2’s names.
const player1 = prompt("Enter Player 1's name:");
const player2 = prompt("Enter Player 2's name:");

// Here i log them so they appear in the console.
//"Welcome to the Dice Rolling Championship" I wrote it just so you can see which task we are on
console.log("Welcome to the Dice Rolling Championship")
console.log("Player 1:", player1);
console.log("Player 2:", player2);



//Level 2 - Single Round
// I write function because it will choose a number between 1 and 6.
function rollDice(){
    //math.random chose a random number between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}
//with function prompt you get the option to press as if it were a game
prompt(`${player1}, press Enter to roll...`);


// i log them now so the dice are rolled and a random number is chosen form 1 or 2
//first roll
const player1Roll = rollDice();
console.log(`${player1} rolled: ${player1Roll}`);


// second roll
const player2Roll = rollDice();
console.log(`${player2} rolled: ${player2Roll}`);



//Level 3 - Track Scores
//these are two variables
let total1 = 0, total2 = 0;

// for it to be played 10 rounds i use a loop that runs 10 times  so we get 10 rounds in total.
// here i used ai to help set the kode up
for (let i = 1; i <= 10; i++) {
    console.log(`Runde ${i}`);

    // this gives me  a random number between 1 and 6
    prompt(`${player1}, tryk Enter for at slå`);
    const roll1 = rollDice();

    // again this gives me  a random number between 1 and 6
    prompt(`${player2}, tryk Enter for at slå`);
    const roll2 = rollDice();


    //here i add each roll to their total score.
    total1 += roll1;
    total2 += roll2;

    // This shows each player’s roll and total score
    console.log(`${player1} slog ${roll1} (total: ${total1})`);
    console.log(`${player2} slog ${roll2} (total: ${total2})`);
}

// when all 10 rounds are done we show the result
console.log(`\nSlutresultat: ${player1} = ${total1}, ${player2} = ${total2}`);

// then i check  who has the higher score
console.log(`\nSlutresultat: ${player1} = ${total1}, ${player2} = ${total2}`);
console.log(total1 > total2 ? `${player1} vandt! ` : total2 > total1 ? `${player2} vandt! ` : "Uafgjort ");






//Level 4 - Complete Game (10 Rounds)
// i first ask for both players' names
// i use _4 because i have alredy used player1 and player2
const player1_4= prompt("Enter Player 1's name:");
const player2_4 = prompt("Enter Player 2's name:");

//then i log it
// i just used this from the example
console.log("Welcome to the Dice Rolling Championship");
console.log("Player 1:", player1_4);
console.log("Player 2:", player2_4);


//now i use function to make a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
// both players start at zero to be fair
let total1_4 = 0;
let total2_4 = 0;

//for loop to run it 10 rounds
//i got help from a fellow student
for (let round = 1; round <= 10; round++) {
    console.log(`Round ${round}:`);

// here both players roll the dice and get a random number from 1-6
    for (let player of [player1_4, player2_4]) {
        prompt(`${player}, press Enter to roll...`);
        let roll = rollDice();

// here it means add to the right player's total, so if it's player 1 "else" it's 2
        if (player === player1_4) total1_4 += roll;
        else total2_4 += roll;

//this shows the right total for the player who rolled.
        if (player === player1_4)
            console.log(`${player} rolled: ${roll} (Total: ${total1_4})`);
        else
            console.log(`${player} rolled: ${roll} (Total: ${total2_4})`);
    }
}


// this is after all 10 rounds show the final result because we log out

console.log("Final Scores:");
console.log(`${player1_4}: ${total1_4}`);
console.log(`${player2_4}: ${total2_4}`);


// here i check who has the most points or if it's a tie
// i got help here form i student
 if (total1_4 > total2_4) console.log(` ${player1_4} wins!`);
 else if (total2_4 > total1_4) console.log(` ${player2_4} wins! `);
 else console.log(" It's a tie!");
