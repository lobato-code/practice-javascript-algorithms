const sayHello = (name) => {
  const text = `Hello ${name}`;
  return () => {
    console.log(text);
  };
};

const sayWorksAt = (place) => {
  let text = `Works at ${place}`;
  return console.log(text);
};

//Two ways to execute the same function - when return => function
let executerOne = sayHello("Frost");
executerOne(); //'Hello Frost'
sayHello("Frost")(); //'Hello Frost'

//Two ways to execute the same function - when return => action
let executerTwo = sayWorksAt("Platzi"); //'Works at Platzi'
sayWorksAt("Platzi"); //'Works at Platzi'

const counterCreator = () => {
  let count = 0;
  return () => {
    console.log(count);
    count++;
  };
};
//Two ways, different result
const counter = counterCreator();
for (let i = 0; i < 5; i++) {
  counter(); // counter is the only way to see this value of "count"
} // 0 1 2 3 4
for (let i = 0; i < 5; i++) {
  counterCreator()();
} // 0 0 0 0 0
