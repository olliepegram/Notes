// let add = function(a, b, c) {
//     return a + b + c
// }

// let result = add(10, 1, 5)

// console.log(result)

// let getScoreText = function(name = 'Anonymous', score = 0) {
//     return 'Name: ' + name + ' - Score: ' + score
// }

// let scoreText = getScoreText('Ollie', 99)
// console.log(scoreText)

let getTip = function(total, tipPercent = .2) {
    let percent = tipPercent * 100
    let tip = total * tipPercent
    return `A ${percent}% on $${total} would be $${tip}`
}

let tip = getTip(29, .25)
console.log(tip)
