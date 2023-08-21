function quickSort(arr) {
  if (arr.length < 2) return arr;
  let pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
//quickSort([0]);
//quickSort([5, 2, 6, 1, 30, -10]);
console.log(quickSort([0]));
console.log(quickSort([5, 2, 6, 1, 30, -10]));
