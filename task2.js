function parseAndStore(str) {
  const data = {};

  str.split(", ").forEach((el) => {
    const [key, value] = el.split(" - ");
    data[key] = value;
  });

  let dataFromStorage = localStorage.getItem("data");
  console.log("data from storage", dataFromStorage);
  let existingDataObj;
  if (dataFromStorage) {
    existingDataObj = JSON.parse(dataFromStorage);
    const existingKeys = Object.keys(existingDataObj);
    console.log("existing keys", existingKeys);
    const newKeys = Object.keys(data);
    console.log("newKeys", newKeys);

    const keysMatch = newKeys.every((key) => existingKeys.includes(key));

    console.log("keysMatch", keysMatch);
    if (keysMatch) {
      existingDataObj = { ...existingDataObj, ...data };
      console.log("key match object", existingDataObj);
      localStorage.setItem("data", JSON.stringify(existingDataObj));
    } else {
      console.log("keys do not match");
      let tempData = {};
      newKeys.forEach((key) => {
        if (!existingKeys.includes(key)) {
          tempData[key] = data[key];
        }
      });
      console.log(tempData);
      existingDataObj = { ...existingDataObj, ...tempData };

      localStorage.setItem("data", JSON.stringify(existingDataObj));
    }
  } else {
    existingDataObj = data;
    console.log("key do NOT match object", existingDataObj);
    localStorage.setItem("data", JSON.stringify(existingDataObj));
  }
}
parseAndStore("city - London, country - United Kingdom");

parseAndStore("city - London, country - United Kingdom, town - hawskwill");
parseAndStore("city - London, country - United Kingdom, town - cracow");
parseAndStore("city - London, country - United Kingdom, riverside - tennesy");
parseAndStore("city - London, country - United Kingdom, riverside - kansas");
