// function quickSort(arr) {
//   if (arr.length < 2) return arr;
//   let pivot = arr[0];
//   const left = [];
//   const right = [];
//   for (let i = 1; i < arr.length; i++) {
//     if (pivot > arr[i]) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   return quickSort(left).concat(pivot, quickSort(right));
// }

// if you want to make it a bit harder you can add sorting for strings by first letter too, but it's entirely up to you.
function quickSortAdv(arr) {
	
	let resource;
	resource = typeof(arr) ==="string" ? arr.split("") : arr
  if (resource.length < 2) return resource;
  let pivot = resource[0];
  const left = [];
  const right = [];
  for (let i = 1; i < resource.length; i++) {
    if (pivot > resource[i]) {
      left.push(resource[i]);
    } else {
      right.push(resource[i]);
    }
  }
  return quickSortAdv(left).concat(pivot, quickSortAdv(right));
}


console.log(quickSortAdv(['ybacfd',"asdas","xcvf","ixcvf","dabudi"]));


console.log(quickSortAdv('ybacfd'));
console.log(quickSortAdv([5, 2, 6, 1, 30, -10]));
