// Program to say Hello to all elements from any array use key of loop
// const employees = [
//     "Priya",
//     "Snehal",
//     "Rishi",
//     "Yamini",
//     "Sanket",
//     "Krishna",
//     "kush"
// ]

// for(const employ of employees)
// {
//     console.log(`Hello ${employ}`)
// }

// Program to find the largest number from the given array
// const marks = [99, 500, 100, 70]
// let largest = marks[0]
// for(const num of marks)
// {
//     if(num > largest){
//         largest = num
//     }
// }
// console.log(largest)

// Program to find the sum of odd numbers from the given array
const numbers = [7, 4, 12, 20, 7, 15]
let sum = 0;
for(let i=0; i<numbers.length; i++)
{
    if(numbers[i]%2==1){
        sum+= numbers[i]
    }
}
console.log(`Sum: ${sum}`)