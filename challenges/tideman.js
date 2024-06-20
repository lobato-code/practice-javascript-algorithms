const candidates = ['A', 'B', 'C'];

let candidates_count = candidates.length;

const ranks = [
  [0, 1, 2],
  [2, 1, 0],
  [1, 0, 2],
];
const voters = ranks.length;

const pairs = [];

const preferences = Array.from({ length: candidates_count }, () =>
  Array(candidates_count).fill(0)
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
          pairs.push({
            winner: i,
            loser: j,
          });
        } else {
          pairs.push({
            winner: j,
            loser: i,
          });
        }
      }
    }
  }
}
recordPreferences();
addPairs();

console.log('preferences', preferences);
console.log('pairs', pairs);
