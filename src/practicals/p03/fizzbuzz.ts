// Write your code below
const input = process.argv[2];
const number = Number(input);

if (Number.isNaN(number)){
    process.exit()
}   else if (number <= 0 ){
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