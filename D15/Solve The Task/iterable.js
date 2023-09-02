
  var Iterable = {
    namess: {
      name1: 'salah',
      name2: 'saed',
      name3: 'salah'
    },
    [Symbol.iterator]() {
      const namess = Object.entries(this.namess);
      let index = 0;
  
      return {
        next: () => {
          if (index < namess.length) {
            const [key, value] = namess[index];
            index++;
            return { value: { key, value }, done: false };
          } else {
            return { done: true };
          }
        }
      };
    }
  };
  
  
  for (var { key, value } of Iterable) {
    console.log(`key: ${key}, Value: ${value}`);
  }
  
    
    