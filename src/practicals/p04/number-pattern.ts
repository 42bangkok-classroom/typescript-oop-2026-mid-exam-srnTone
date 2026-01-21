// Write your code below
const input = process.argv[2];
const number = Number(input);

if (Number.isNaN(input)){
    process.exit()
}   else if (number <= 0){
    process.exit()
}

for (let i=1; i <= number;i++){
    let line = ''
    console.log(line);
}   for (let j = 1; j < number;j++){
    console.log(j);
}
