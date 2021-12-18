// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arr2.forEach(i => {
  if(!arr1.includes(i) && i % 2 == 0) arr1.push(i)
  else if(!arr1.includes(i) && i % 2 != 0) arr1.unshift(i)
})

console.log(arr1);