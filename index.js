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
const marks = [99, 500, 100, 70]
let largest = marks[0]
for(const num of marks)
{
    if(num > largest){
        largest = num
    }
}
console.log(largest)