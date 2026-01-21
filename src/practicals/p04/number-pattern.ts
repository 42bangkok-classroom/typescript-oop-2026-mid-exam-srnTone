// Write your code below
const input = process.argv[2];
const number = Number(input);

if (Number.isNaN(input)){
    process.exit(1)
}   else if (number <= 0){
    process.exit(1)
}

for (let i=1; i <= number;i++){
    console.log(i)
}   for (let j = 1; j < number;j++){
    console.log(j);
}
