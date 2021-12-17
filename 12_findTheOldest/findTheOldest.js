const findTheOldest = function (people) {
    const age = (x) => (x.yearOfDeath || new Date().getFullYear()) - x.yearOfBirth;
    const oldest = people.sort((a, b) =>
      age(b) - age(a)
    );
    return oldest[0];
  };
// Do not edit below this line
module.exports = findTheOldest;
