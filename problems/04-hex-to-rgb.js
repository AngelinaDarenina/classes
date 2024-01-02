/**
 * Hex и RGB - текстовые форматы для представления цвета в коде.
 *
 * Напишите функцию hexToRgb(color) конвертирующую цвет закодированный в формате HEX
 * в RGB кодированную строку.
 *
 * Пример:
 *
 * hexToRgb('#000000') === 'rgb(0, 0, 0)'
 * hexToRgb('#fff') === 'rgb(255, 255, 255)'
 * hexToRgb('#800080') === 'rgb(128, 0, 128)'
 *
 * @param {string} color
 * @returns {string}
 */
function hexToRgb(color) {
let arr=color.split("");
let hex;
    if(arr.length===4){
       hex=[arr[1]+arr[1], arr[2]+arr[2], arr[3]+arr[3]];
      }else{
        hex=[arr[1]+arr[2], arr[3]+arr[4], arr[5]+arr[6]];
    }
    return `rgb(${parseInt(hex[0], 16)}, ${parseInt(hex[1], 16)}, ${parseInt(hex[2], 16)})`
}

module.exports = hexToRgb;
