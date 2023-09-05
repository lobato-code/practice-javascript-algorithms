

function factorialize(num) {
  if (num == 0 || mum == 1) {
    return 1;
  }
  if(!num) return undefined;
  return num * factorialize(num - 1);
}

factorialize(5);




//Better solution

function factorialize(num, factorial = 1) {
  if (num <= 0) {
    return factorial;
  } else {
    return factorialize(num - 1, factorial * num);
  }
}

factorialize(5);