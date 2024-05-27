const {
    rounding,
    extractDigits
} = require('./auxiliary-functions')


const determinantOfMatrix = (nextHash) => {

    //Построим матрицу
    const matrixFromArray = (arr) => {
        const rows = rounding(Math.sqrt(arr.length), 0)
        console.log('1) Число элементов в матрице:' + arr.length)
        //проверка длины массива цифр из хеша на пригодность для построения матрицы
        if (arr.length !== Math.pow(rows, 2)) {
            console.log("Количество элементов в массиве не соответствует размеру матрицы");
            return
        }

        const matrix = [];
        //строим матрицу
        for (let i = 0; i < rows; i++) {
            matrix[i] = arr.slice(i * rows, (i + 1) * rows);
        }
        console.log('2) Полученная матрица:')
        console.table(matrix)
        return matrix;
    }

//Вычисление определителя матрицы
    const calculatingDeterminant = (matrix) => {

        //код проходит по всем столбцам исходной матрицы,
        // для каждого столбца создает подматрицу (без текущей строки и текущего столбца),
        // рекурсивно вычисляет определитель подматрицы

        const n = matrix.length;
        if (n === 1) {
            return matrix[0][0];
        } else if (n === 2) {
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        } else { //условие для матриц большей размерности
            let det = 0; //сюда будем записывать значения определителей подматриц
            for (let j = 0; j < n; j++) { //цикл для столбцов матрицы
                const subMatrix = []; //подматрица
                for (let i = 1; i < n; i++) { //цикл для строк матрицы
                    subMatrix[i - 1] = matrix[i].slice(0, j).concat(matrix[i].slice(j + 1));
                    //Подматрица получается путем удаления текущей строки (индекс i) и текущего столбца (индекс j) из исходной матрицы
                }
                det += Math.pow(-1, j) * matrix[0][j] * calculatingDeterminant(subMatrix);
                //Math.pow(...) вычисляет знак для элемента матрицы в зависимости от номера столбца (чередование знаков: +, -, +, …)
                //matrix[0][j] - берется элемент первой строки и текущего столбца исходной матрицы.
                // calculatingDeterminant(subMatrix) - вызывается рекурсивно функция для вычисления определителя полученной подматрицы.
            }
            return det;
        }
    }
    const matrix = matrixFromArray(extractDigits(nextHash))

    if (!!matrix){ //если матрица посстроена ... (то есть !!matrix === true), посчитаем определитель
        const det = calculatingDeterminant(matrix)
        console.log('3) Посчитаем определитель: |A| = ' + det)
        return det
    }
    else{
        console.log('Данная матрица нам не подходит :(')
    }

}


module.exports = {
    determinantOfMatrix
}