// Write your code below
const input = process.argv[2];
const number = Number(input);

if (Number.isNaN(number)){
    console.log("Invalid input");
    process.exit(0)
}   else if (number < 0 || number > 100){
    console.log("Invalid input");
    process.exit(0)
}
const grade:string = 'B';
if (number >= 80){
    grade = 'A';
}   else if (number >= 70){
    grade = 'B';
}   else if (number >= 60){
    grade = 'C';
}   else if (number >= 50){
    grade = 'D';
}   else {
    grade = 'F';
}
console.log("Grade is ",grade);