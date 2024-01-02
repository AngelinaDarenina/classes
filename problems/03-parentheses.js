/**
 * Строка со скобками считается валидной, если на каждую закрывающую скобку имеется ранее открытая
 * и на каждую ранее открытую имеется закрывающая.
 *
 * Напишите функцию parentheses(value) проверяющую строку со скобками на валидность.
 *
 * Пример:
 *
 * parentheses('') === false
 * parentheses('()()') === true
 * parentheses('(()())') === true
 * parentheses('(()') === false
 * parentheses(')') === false
 *
 * @param {string} value
 * @returns {boolean}
 */

function parentheses(value) {
    let opens = [];
    if (value.length === 0) {
        return false;
    }
    for (let i = 0; i < value.length; i++) {
        if (value[i] === "(") {
            opens.push(value[i]);
        }

        if (value[i] === ")") {
            if (opens.length === 0) {
                return false;
            } else {
                opens.pop();
            }
        }
    }

    return opens.length === 0;
}

module.exports = parentheses;
