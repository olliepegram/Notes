const gradeCalc = function (studentScore, totalScore = 20) {
    const percent = (studentScore / totalScore) * 100
    let grade = ''
    switch (percent > 0) {
        case (percent >= 90):
            grade = 'A'
            break;
        case (percent >= 80):
            grade = 'B'
            break;
        case (percent >= 70):
            grade = 'C'
            break;
        case (percent >= 60):
            grade = 'D'
            break;
        case (percent < 60):
            grade = 'F'
            break;
    }
    return `You got a ${grade} (${percent}%)!`
}

const result = gradeCalc(12, 20);
console.log(result);
