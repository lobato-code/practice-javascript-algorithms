const candidates = ['Darwin', 'Rafael', 'Monica']

let candidates_count = candidates.length

const ranks = [
    [0, 1, 2],
    [2, 1, 0],
    [1, 0, 2]
]
const voters = ranks.length

const preferences = Array.from({ length: candidates_count }, () => Array(candidates_count).fill(0))

const pairs = []


for (let i = 0; i < voters; i++) {
    for (let j = 0; j < ranks[i].length; j++) {
        for (let k = j + 1; k < ranks[i].length; k++) {
            preferences[ranks[i][j]][ranks[i][k]] += 1
        }
    }
}


for (let i = 0; i < candidates_count; i++) {
   for (let j = 0; j < candidates_count; j++) {
    if(i!=j){
         console.log(`Preference: ${candidates[i]} -> ${candidates[j]}: ${preferences[i][j]}`)
    }  
   }   
}

