/**
 * Напишите функцию rle(value) реализующую алгоритм сжатия строки.
 *
 * Пример:
 *
 * rle('AAABC') === '3ABC'
 * rle('AAAaaB') === '3A2aB'
 *
 * @param {string} value
 * @returns {string}
 */
function rle(value) {
    arr = value.split("");
    console.log(arr);
    let result = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            counter += 1;
        } else {
            result.push(counter > 1 ? counter + arr[i] : arr[i]);
            counter = 1;
        }
    }

    return result.join('');
}

module.exports = rle;
