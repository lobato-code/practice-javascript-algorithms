const candidates = ['A', 'B', 'C'];

let candidates_count = candidates.length;

const ranks = [
  [0, 1, 2],
  [1, 0, 2],
  [1, 2, 0],
  [1, 2, 0],
];
const voters = ranks.length;

const pairs = Array.from(
  { length: (candidates_count * (candidates_count - 1)) / 2 },
  // () => Array().fill({ winner: 0, loser: 0 })
  () => {
    return { winner: null, loser: null };
  }
);

const preferences = Array.from({ length: candidates_count }, () =>
  Array(candidates_count).fill(0)
);
const locked = Array.from({ length: candidates_count }, () =>
  Array(candidates_count).fill(false)
);

function recordPreferences() {
  for (let i = 0; i < voters; i++) {
    for (let j = 0; j < candidates_count; j++) {
      for (let k = j + 1; k < candidates_count; k++) {
        // console.log(`${ranks[i][j]} -> ${ranks[i][k]}`);
        preferences[ranks[i][j]][ranks[i][k]] += 1;
      }
    }
  }
}

function addPairs() {
  for (let i = 0; i < candidates_count; i++) {
    for (let j = i + 1; j < candidates_count; j++) {
      if (i != j && preferences[i][j] != preferences[j][i]) {
        if (preferences[i][j] > preferences[j][i]) {
          pairs[i].winner = i;
          pairs[i].loser = j;
        } else {
          pairs[i].winner = j;
          pairs[i].loser = i;
        }
      }
    }
  }
  for (let i = 0; i < pairs.length; i++) {
    console.log(
      `Pair: ${candidates[pairs[i].winner]} ->  ${candidates[pairs[i].loser]}`
    );
  }
  // console.log('pairs', pairs);
}

function printPreferences() {
  for (let i = 0; i < candidates_count; i++) {
    for (let j = 0; j < candidates_count; j++) {
      if (i != j) {
        console.log(
          `Preference: ${candidates[i]} -> ${candidates[j]}: ${preferences[i][j]}`
        );
      }
    }
  }
  console.log('preferences', preferences);
}

function sortPairs() {
  // let arr = [1, 8, 6, 9, 5, 3, 2];
  // int arrLength = sizeof(arr) / sizeof(arr[0]);

  for (let i = 0; i < pairs.length - 1; i++) {
    for (let j = 0; j < pairs.length - 1; j++) {
      if (
        preferences[pairs[j].winner][pairs[j].loser] <
        preferences[pairs[j + 1].winner][pairs[j + 1].loser]
      ) {
        let temp = pairs[j + 1];
        pairs[j + 1] = pairs[j];
        pairs[j] = temp;
      }
    }
  }

  console.log('sorted pairs', pairs);
  return 0;
}

function lockPairs() {
  console.log('pairs', pairs);
  // for (let i = 0; i < pairs.length; i++) {
  //   locked[pairs[i].winner][pairs[i].loser] = true;
  // }
  // console.log('locked', locked);
}

function printWinner() {
  for (let i = 0; i < locked.length; i++) {
    let clean = true;
    for (let j = 0; j < locked.length; j++) {
      if (locked[j][i] == true) {
        // console.log(`${candidates[j]}->${candidates[i]}`);
        clean = false;
      }
    }
    if (clean) {
      console.log('Winner', candidates[i]);
      return;
    }
  }
}

recordPreferences();
printPreferences();
addPairs();
sortPairs();
lockPairs();
// printWinner();
