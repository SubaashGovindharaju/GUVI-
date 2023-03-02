const data = {
    "name": "subaash",
    "age": 20,
    "city": "Erode"
  };

//for loop
  for (let key in data) {
    console.log(`${key} : ${data[key]}`);
  }
//for..in loop

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      console.log(key + ": " + data[key]);
    }
  }
//for..of loop

  const entries = Object.entries(data);
for (const [key, value] of entries) {
  console.log(`${key}: ${value}`);
}

//forEach loop

const dataArray = Object.entries(data);
dataArray.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});