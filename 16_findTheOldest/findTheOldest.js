const findTheOldest = function(arr) {
  const currentYear = new Date().getFullYear();
  let oldestPerson = arr.reduce((oldest, person) => {
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    const personAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    return personAge > oldestAge ? person : oldest;
  });
  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
