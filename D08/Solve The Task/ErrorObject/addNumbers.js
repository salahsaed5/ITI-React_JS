function addNumbers(...numbers) {
    if (numbers.length === 0) {
      throw new Error("No parameters provided to the function.");
    }
  
    let sum = 0;
  
    for (let num of numbers) {
      if (typeof num !== "number") {
        throw new Error("Invalid parameter type. Only numbers are allowed.");
      }
      sum += num;
    }
  
    return sum;
  }
  
  try {
    // console.log(addNumbers(1, 2, 3, 4)); 
    // console.log(addNumbers(1, "2", 3));  
    // console.log(addNumbers());       
  } catch (error) {
    console.error("Error:", error.message);
  }
