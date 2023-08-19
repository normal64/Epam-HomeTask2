function writeTimeInFile() {
  const moment = require("moment");
  const fs = require("fs");
  let currentTime = moment().format("MMMM Do YYYY, h:mm:ss a");

  fs.writeFile("time.txt", currentTime, (err) => {
    if (err) throw err;
  });
}
writeTimeInFile();
