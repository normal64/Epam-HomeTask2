function capitalizeDe(str) {
  console.log(`str`, str.split(""));
  const splitted = str.split("");
  let capitalizeThis = splitted.map((elem) => {
    if (elem.toLowerCase() === elem) {
      console.log(`elem.toUpperCase()`, elem.toUpperCase());
      return elem.toUpperCase();
    } else {
      console.log(`elem.toLowerCase()`, elem.toLowerCase());
      return elem.toLowerCase();
    }
  });
  console.log(capitalizeThis.join("").split(" "));
  return capitalizeThis.join("").split(" ");
}
capitalizeDe(
  "Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer"
);
