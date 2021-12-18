// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
  let result = []
  
  // pertama
  const max1 = Math.max(...arr1)

  if(!arr2.every(i => i > max1)){
    result.push(false)
  } else {
    result.push(true)
  }
  // kedua
  const min1 = Math.min(...arr1)
  const min2 = Math.min(...arr2)

  if(min2 < min1) {
    result.push(true)
  } else {
    result.push(false)
  }

  return result  

}

console.log(result(arr1,arr2))