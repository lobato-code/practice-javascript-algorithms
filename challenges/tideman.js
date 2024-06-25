const candidates = ['A', 'B', 'C'];

let candidates_count = candidates.length;
let pair_count = 0;

const ranks = [
    [0, 1, 2],
    [1, 0, 2],
    [1, 2, 0],
    [1, 2, 0],
];
const voters = ranks.length;

const pairs = Array.from(
    { length: (candidates_count * (candidates_count - 1)) / 2 },
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
    printPreferences()
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
                pair_count = pair_count + 1      
            }
        }
    }
    printPairs()
}

function printPairs() {
    for (let i = 0; i < pair_count; i++) {
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
    // console.log('preferences', preferences);
}

function sortPairs() {

    for (let i = 0; i < pair_count - 1; i++) {
        for (let j = 0; j < pair_count - 1; j++) {
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

    printPairs()
    return 0;
}

function lockPairs() {
    // console.log('pairs', pairs);
    for (let i = 0; i < pair_count; i++) {
      locked[pairs[i].winner][pairs[i].loser] = true;
    }
    console.log('locked', locked);
}

function printWinner() {
    for (let i = 0; i < candidates_count; i++) {
        let clean = true;
        for (let j = 0; j < candidates_count; j++) {
            if (locked[j][i] == true) {
                console.log(`${candidates[j]}->${candidates[i]}`);
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
addPairs();
sortPairs();
lockPairs();
printWinner();
