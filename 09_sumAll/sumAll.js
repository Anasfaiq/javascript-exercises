const sumAll = function(startNum, endNum) {
  // checking if the num is positive and integer
  if(startNum < 0 || endNum < 0 || !Number.isInteger(startNum) || !Number.isInteger(endNum)){
    return "ERROR";
  } else {
    startNum && endNum
  }
  
  //checking if the array start from smaller number to larger number
  if(startNum > endNum){
    let temp = startNum;
    startNum = endNum;
    endNum = temp;
  }


  let result = [];

  for (let i = startNum; i <= endNum; i++) {
    result.push(i)
  }
  return result.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0)
};

// Do not edit below this line
module.exports = sumAll;
