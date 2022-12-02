const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (people) {
  people.forEach((person) => {
    if (!person.yearOfDeath) {
      person.yearOfDeath = new Date().getFullYear();
    }
  });

  return people.reduce((oldestPerson, person) => {
    const highestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
    const age = person.yearOfDeath - person.yearOfBirth;
    return age > highestAge ? person : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
