const rounding = (num) => {
    return Math.round(num * 100) / 100
}

const extractDigits = (str) => {
    const digits = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            digits.push(parseInt(str[i]));
        }
    }
    return digits;
}

const sumOfTrigonometricSquares = (data) => {
    const result = []
    for (let i = 0; i < data.length; i++) {
        result.push(Math.floor(Math.cos(data[i]) ** 2 + Math.sin(data[i]) ** 2))
    }
    return result
}

module.exports = {
    rounding,
    extractDigits,
    sumOfTrigonometricSquares
}