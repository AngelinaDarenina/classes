/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    let opensRound = [];
    let opensFig = [];
    let opensCorner = [];
    if (value.length === 0) {
        return false;
    }
    for (let i = 0; i < value.length; i++) {
        if (value[i] === "(") {
            opensRound.push(value[i]);
        }
        if (value[i] === "{") {
            opensFig.push(value[i]);
        }
        if (value[i] === "<") {
            opensCorner.push(value[i]);
        }

        if (value[i] === ")") {
            if (opensRound.length === 0) {
                return false;
            } else {
                opensRound.pop();
            }
        }
        if (value[i] === "}") {
            if (opensFig.length === 0) {
                return false;
            } else {
                opensFig.pop();
            }
        }
        if (value[i] === ">") {
            if (opensCorner.length === 0) {
                return false;
            } else {
                opensCorner.pop();
            }
        }
       }

    return !opensRound.length&&!opensFig.length&&!opensCorner.length;
}


module.exports = parentheses;
