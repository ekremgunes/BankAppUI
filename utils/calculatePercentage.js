export function calculatePercentage(
    numbers,
    total,
  ) {
    const percentageArray = [];
  
    numbers.forEach(number => {
      const percentage = Math.round((number / total) * 100);
  
      percentageArray.push(percentage);
    });
  
    return percentageArray;
  }