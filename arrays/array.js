const inventors = [
  {
    name: "Ada",
    lastname: "Lovelace",
    invention: "Analytical Engine",
    year: 1837,
    birthYear: 1815,
    deathYear: 1852,
  },
  {
    name: "Alexander",
    lastname: "Graham Bell",
    invention: "Telephone",
    year: 1876,
    birthYear: 1847,
    deathYear: 1922,
  },
  {
    name: "Thomas",
    lastname: "Edison",
    invention: "Light bulb",
    year: 1879,
    birthYear: 1847,
    deathYear: 1931,
  },
  {
    name: "Nikola",
    lastname: "Tesla",
    invention: "Alternating current",
    year: 1887,
    birthYear: 1856,
    deathYear: 1943,
  },
  {
    name: "Guglielmo",
    lastname: "Marconi",
    invention: "Radio",
    year: 1895,
    birthYear: 1874,
    deathYear: 1937,
  },
  {
    name: "Wilbur",
    lastname: "Wright",
    invention: "Airplane",
    year: 1903,
    birthYear: 1867,
    deathYear: 1912,
  },
  {
    name: "John",
    lastname: "Baird",
    invention: "Television",
    year: 1926,
    birthYear: 1888,
    deathYear: 1946,
  },
  {
    name: "Grace",
    lastname: "Hopper",
    invention: "Compiler",
    year: 1952,
    birthYear: 1906,
    deathYear: 1992,
  },
  {
    name: "Tim",
    lastname: "Berners-Lee",
    invention: "World Wide Web",
    year: 1989,
    birthYear: 1955,
    deathYear: false,
  },
  {
    name: "Elon",
    lastname: "Musk",
    invention: "Tesla Roadster",
    year: 2008,
    birthYear: 1971,
    deathYear: false,
  },

  {
    name: "Marie",
    lastname: "Curie",
    invention: "Radioactivity",
    year: 1898,
    birthYear: 1867,
    deathYear: 1934,
  },
  {
    name: "Albert",
    lastname: "Einstein",
    invention: "Theory of relativity",
    year: 1905,
    birthYear: 1879,
    deathYear: 1955,
  },
  {
    name: "Walt",
    lastname: "Disney",
    invention: "Mickey Mouse",
    year: 1928,
    birthYear: 1901,
    deathYear: 1966,
  },
  {
    name: "Edwin",
    lastname: "Hubble",
    invention: "Hubble Space Telescope",
    year: 1990,
    birthYear: 1889,
    deathYear: 1953,
  },
  {
    name: "James",
    lastname: "Dyson",
    invention: "Dyson vacuum cleaner",
    year: 1978,
    birthYear: 1947,
    deathYear: false,
  },
  {
    name: "Shuji",
    lastname: "Nakamura",
    invention: "Blue LED",
    year: 1993,
    birthYear: 1954,
    deathYear: false,
  },
  {
    name: "Elmer",
    lastname: "Sperry",
    invention: "Marine gyrocompass",
    year: 1908,
    birthYear: 1860,
    deathYear: 1930,
  },
  {
    name: "Ralph",
    lastname: "Baer",
    invention: "Video game console",
    year: 1968,
    birthYear: 1922,
    deathYear: 2014,
  },
  {
    name: "Robert",
    lastname: "Goddard",
    invention: "Liquid-fueled rocket",
    year: 1926,
    birthYear: 1882,
    deathYear: 1945,
  },
  {
    name: "Hedy",
    lastname: "Lamarr",
    invention: "Frequency-hopping spread spectrum",
    year: 1942,
    birthYear: 1914,
    deathYear: 2000,
  },
];

//Array.prototype.filter() => Returns an array with the elements that pass thorugh a filter or conditional
//1. Filter the list of inventors for those who where born in the 1900's
const nineteen = inventors.filter(
  (inventor) => inventor.birthYear >= 1900 && inventor.birthYear < 2000
);
console.table(nineteen);

//Array.prototype.map() => Executes a function with each of the elements
// 2.Give us an array of the inventor first and last names
const inventorsName = inventors.map(
  (inventor) => `${inventor.name} ${inventor.lastname}`
);
console.log(inventorsName);

//Array.prototype.sort()
//3.Sort the inventors by birthdate, oldest to youngest
const sortInventors = inventors.sort((a, b) =>
  a.birthYear > b.birthYear ? 1 : -1
);
console.table(sortInventors);

//Array.prototype.reduce()
// 4. Give the sum of the years of inventors life, for those who are deceased of course.
const sumAges = inventors.reduce((total, inventor) => {
  return inventor.deathYear
    ? total + (inventor.deathYear - inventor.birthYear)
    : total;
}, 0);
console.log(sumAges);

//5.Sort the inventors by years lived.
const sortLifeTime = inventors.sort((a, b) => {
  let lastGuy;
  let nexGuy;
  a.deathYear
    ? (lastGuy = a.deathYear - a.birthYear)
    : (lastGuy = 2023 - a.birthYear);
  b.deathYear
    ? (nexGuy = b.deathYear - b.birthYear)
    : (nexGuy = 2023 - b.birthYear);

  a.lifeTime = !a.deathYear ? `${lastGuy}..` : `${lastGuy}`;
  b.lifeTime = !b.deathYear ? `${nexGuy}..` : `${nexGuy}`;

  return lastGuy > nexGuy ? 1 : -1;
});
console.table(sortLifeTime);

const people = [
  "John Smith",
  "Sarah Johnson",
  "Michael Davis",
  "Emily Rodriguez",
  "Jacob Martinez",
  "Olivia Hernandez",
  "William Garcia",
  "Sophia Lopez",
  "Ethan Brown",
  "Isabella Perez",
];

//Array.prototype.split()
//6.Put a comma between name and last name strings:

const putComma = people.map((person) => {
  const [name, lastname] = person.split(" ");
  return `${name}, ${lastname}`;
});
console.log(putComma);

//7. Reformat the array instances as: last name, name:
const refortmatted = people.map((person) => {
  const [name, lastname] = person.split(" ");
  return `${lastname} ${name}`;
});
console.log(refortmatted);

//8. Sort the people alphabetically by the last name:

const sortPeople = refortmatted.sort((a, b) => {
  const [aLastName] = a.split(" ");
  const [bLastName] = b.split(" ");
  return aLastName > bLastName ? 1 : -1;
});
console.table(sortPeople);

const cyptocoins = [
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "bitcoin",
  "etherium",
  "etherium",
  "etherium",
  "etherium",
  "etherium",
  "etherium",
  "etherium",
  "etherium",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "dodgecoin",
  "lightcoin",
  "lightcoin",
  "lightcoin",
  "lightcoin",
];

//9. Sum up the times that instances has repeated in the array.
const sumUp = cyptocoins.reduce((obj, coin) => {
  if (!obj[coin]) {
    obj[coin] = 0;
  }
  obj[coin]++;
  return obj;
}, {});

console.table(sumUp);

// FINAL CHALENGE:
// Return an object from the `inventors` arrays with the properties: completeName, invention: year, lifeTime

const finalChallenge = inventors.map((inventor) => {
  const completeName = `${inventor.name} ${inventor.lastname}`;

  const inventionYear = `${inventor.invention}: ${inventor.year}`;

  const lifeTime = () => {
    if (inventor.deathYear) {
      return inventor.deathYear - inventor.birthYear;
    } else {
      return 2023 - inventor.birthYear;
    }
  };

  const object = {
    completeName: completeName,
    inventionYear: inventionYear,
    lifeTime: lifeTime(),
  };

  return object;
});

console.table(finalChallenge);
