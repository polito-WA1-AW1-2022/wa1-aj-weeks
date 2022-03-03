'use strict' ;

const scores = [28, 25, 21, 30, 18, 24, 22] ;

console.log(scores.join(', '))

// scores[0] = 29

// console.log(scores.join(', '))

// scores.push(26)

// console.log(scores.join(', '))


// scores = [...scores, 22]

const new_scores = [...scores]

// find the minimum score
let min_pos = 0 ;
for(let i = 0; i<new_scores.length; i++) {
    if(new_scores[i]<new_scores[min_pos])
        min_pos = i ;
}
new_scores.splice(min_pos,1)

// find the minimum score
min_pos = 0 ;
for(let i = 0; i<new_scores.length; i++) {
    if(new_scores[i]<new_scores[min_pos])
        min_pos = i ;
}
new_scores.splice(min_pos,1)


// compute average over new_scores
let new_avg = 0;
for(let x of new_scores) {
    new_avg += x ;
}
new_avg /= new_scores.length;

new_scores.push(Math.round(new_avg));
new_scores.push(Math.round(new_avg));

console.log(new_scores.join(', '))
