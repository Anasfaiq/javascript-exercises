const repeatString = function(string, rep) {
  result = '';

  if(rep < 0) {
    return "ERROR"
  }else {
    for(let i = 0; i < rep ; i++){
    result += string;
    }
    return result;
  }
};

repeatString("hello",10)

// Do not edit below this line
module.exports = repeatString;
