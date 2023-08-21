function sortStrings(arr) {
  console.log(
    `arr`,
    arr.sort((a, b) => a.length - b.length)
  );
  return arr.sort((a, b) => a.length - b.length)
}
sortStrings(["Really", "person", "Denis",  "to join EPAM", "right"]);
