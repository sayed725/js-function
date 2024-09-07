// function sumOfNumbers (numbers){

//     let sum = 0;
//     for(const number of numbers){
//         console.log(number);
//         sum= sum + number;

//     }

// return sum;

// }
// const numbers = [10,20,30,40]
// const sum = sumOfNumbers(numbers);
// console.log( 'sum of the number is', sum);

function evenNumbersOnly(numbers) {

    const even = [];
    for (const number of numbers) {
        if(number %2 ===0){
            console.log(number);
            even.push(number)
        }
    }
    return even;
}
const numbers = [5, 8 , 91, 24, 6]
// const even = evenNumbersOnly(numbers)
// console.log(even)

function sumOfEvennumbers(numbers){
    let sum = 0;
    for (const number of numbers){
        if(number%2===0){
            // console.log(number);
            sum = sum+number
        }
    }
    return sum;
}
const rum = (sumOfEvennumbers(numbers))
console.log(rum)