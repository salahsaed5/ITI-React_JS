function validateParameters(param1, param2) {
    if (arguments.length !== 2) {
      throw new Error("Function requires exactly 2 parameters.");
    }
  
  }

  try {
    validateParameters(5, 7); 
  } catch (error) {
    console.error("Error:", error.message);
  }