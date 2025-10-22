const removeFromArray = function(arr, ...itemToRemoves) {
  return arr.filter(item => !itemToRemoves.includes(item))  
};

// Do not edit below this line
module.exports = removeFromArray;
