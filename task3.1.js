function capitalizeDe(str) {
  const splitted = str.split("");
  let capitalizeThis = splitted.map((elem) => {
    if (elem.toLowerCase() === elem) {
      return elem.toUpperCase();
    } else {
      return elem.toLowerCase();
    }
  });
  console.log(capitalizeThis.join("").split(" "));
  return capitalizeThis.join("").split(" ");
}
capitalizeDe(
  "Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer"
);
