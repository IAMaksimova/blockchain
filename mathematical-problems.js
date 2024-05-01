const {
    rounding,
    extractDigits,
    sumOfTrigonometricSquares
} = require('./auxiliary-functions')

const numberOfPiSearch = (nextHash) => {
    console.log('The search for a suitable number has begun:')

    const lastFive = parseInt(nextHash.slice(-15), 16).toString()
    const arrOfNumbers = lastFive.split('').map(num => parseInt(num))
    const half_length = Math.ceil(arrOfNumbers.length / 2);
    const leftSideSum = arrOfNumbers.slice(0, half_length).reduce((partialSum, a) => partialSum + a, 0);
    const rightSideSum = arrOfNumbers.slice(half_length).reduce((partialSum, a) => partialSum + a, 0);
    const a = rounding(leftSideSum / rightSideSum)
    const b = rounding((rightSideSum + rightSideSum) / leftSideSum)

    console.log(`Current sum : ${a} + ${b} = ${a + b}`)

    return a + b
}

const goldenRatio = (nextHash) => {
    console.log('The search for the golden ratio number has begun:')

    const letters = nextHash.replace(/[^A-Za-z]/g, '').split('')
    const lettersNumbers = letters.map(letter => letter.charCodeAt(0) - 96)
    const result = sumOfTrigonometricSquares(lettersNumbers)
    const sumOfResult = result.reduce((partialSum, a) => partialSum + a, 0)
    const volume = result.length
    const goldenNumber = Math.round(volume / sumOfResult * 1000) / 1000

    console.log('sum of result arr = ' + sumOfResult)
    console.log('volume of arr = ' + volume)
    console.log('result = ' + goldenNumber)

    return goldenNumber
}

const findingSmallestVariance = (nextHash) => {
    console.log('The search for variance has begun:')

    const arrOfNums = extractDigits(nextHash)
    const volume = arrOfNums.length
    const average = rounding((arrOfNums.reduce((partialSum, a) => partialSum + a, 0) / volume))
    const variance = rounding(arrOfNums.reduce((partialSum, a) => partialSum + (a - average) ** 2, 0) / (volume - 1))

    console.log(`Variance: ${variance}`)

    return variance
}


module.exports = {
    numberOfPiSearch,
    findingSmallestVariance,
    goldenRatio
}