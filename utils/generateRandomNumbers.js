export function generateRandomNumbers(n) {
    const min = 100;
    const max = 500;
    const result = [];
  
    for (let i = 0; i < n; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      result.push(randomNumber);
    }
  
    return result;
  }