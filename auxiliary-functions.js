// const rounding = (num) => {
//     return Math.round(num * 100) / 100
// }

const rounding = (num, decimalPlaces) => {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
}

const extractDigits = (str) => {
    const digits = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] >= '0' && str[i] <= '9') {
            digits.push(parseInt(str[i]));
        }
    }
    console.log('Выбрали цифры из хеша: ')
    console.log(digits)
    return digits;
}


module.exports = {
    rounding,
    extractDigits
}