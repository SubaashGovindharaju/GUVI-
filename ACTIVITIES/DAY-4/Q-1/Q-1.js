function compareObjects(obj1, obj2) {
    const arr1 = Object.entries(obj1);
    const arr2 = Object.entries(obj2);
  
    // Sort arrays by keys
    arr1.sort((a, b) => a[0].localeCompare(b[0]));
    arr2.sort((a, b) => a[0].localeCompare(b[0]));
  
    const sortedObj1 = Object.fromEntries(arr1);
    const sortedObj2 = Object.fromEntries(arr2);

    if(JSON.stringify(sortedObj1) === JSON.stringify(sortedObj2))
    {
      return "Equal";
    }
    else
    {
    return "Not Equal";
    }
    
  }
    const obj1 = { name: "Person 1", age:5 };
  const obj2 = { age:5, name: "Person 1" };
  console.log(compareObjects(obj1, obj2));