function parseAndStore(str) {
  const data = {};

  str.split(", ").forEach((el) => {
      const [key, value] = el.split(" - ");
      data[key] = value;
  })

  //console.log("data", data);
  let dataFromStorage = localStorage.getItem("data")
  console.log(dataFromStorage);
  let existingDataObj;
  if (dataFromStorage) {
      existingDataObj = JSON.parse(dataFromStorage);
      const existingKeys = Object.keys(existingDataObj)
      const newKeys = Object.keys(data)
      const keysMatch = existingKeys.every(key => newKeys.includes(key)
      )
      if (keysMatch) {
          existingDataObj = { ...existingDataObj, ...data }
          console.log("key match object", existingDataObj);
          localStorage.setItem('data', JSON.stringify(existingDataObj));
      } else {
          console.log("keys do not match")
          const timestamp = new Date().getTime();
          existingDataObj[`data_${timestamp}`] = data;
          localStorage.setItem('data', JSON.stringify(existingDataObj));
      }
  } else {
      existingDataObj = data;

      localStorage.setItem('data', JSON.stringify(existingDataObj));
  }

}
parseAndStore("city - London, country - United Kingdom");

parseAndStore("city - London, country - United Kingdom, town - hawskwill");
parseAndStore("city - London, country - United Kingdom, town - cracow");
parseAndStore("city - London, country - United Kingdom, riverside - tennesy");
parseAndStore("city - London, country - United Kingdom, riverside - kansas");