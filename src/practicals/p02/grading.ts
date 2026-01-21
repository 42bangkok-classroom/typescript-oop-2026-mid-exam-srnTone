// Write your code below
const input = process.argv[2];
const number = Number(input);

if (Number.isNaN(input)){
    console.log("Invalid input");
    process.exit(1)
}   else if (number < 0 || number > 100){
    console.log("Invalid input");
    process.exit(1)
}

if (number >= 80){
    console.log("Grade is A");
}   else if (number >= 70){
    console.log("Grade is B");
}   else if (number >= 60){
    console.log("Grade is C");
}   else if (number >= 50){
    console.log("Grade is D");
}   else if (number >= 0){
    console.log("Grade is F");
}   else {
    console.log("Invalid input");
}
