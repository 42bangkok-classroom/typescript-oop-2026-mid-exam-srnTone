// Write your code below
const input = process.argv[2];
const number = Number(input);

if (Number.isNaN(input)){
    console.log("Invalid input");
    process.exit()
}   else if (number <= 0 ){
    console.log("Invalid input");
    process.exit()
}

for (let i = 1; i <= number; i++){
    if (i%3==0&&i%5==0){
    console.log("FizzBuzz");
}   else if (i%5==0){
    console.log("Buzz");
}   else if (i%3==0){
    console.log("Fizz");
}
    else {
    console.log(i);
}
}

