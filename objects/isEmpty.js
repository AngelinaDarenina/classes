/**

 * Описание задачи: Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
 * Ожидаемый результат: ({}) => true,
 ({ a: undefined }) => true,
 ({ a: 1 }) => false
 * Пустые значения: '', null, NaN, undefined
 * @param {Object} object - объект с примитивами
 * @returns {boolean}
 */

export const isEmpty = (object) => {
    let result = [];
    for (let key in object) {
        console.log(object[key]);
        if (
            Number.isNaN(object[key]) ||
            object[key] == "" ||
            object[key] == undefined ||
            object[key] == null
        ) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    console.log(result);
    return result.every((elem) => elem === true);
};

const data = { a: 1, b: undefined };
const data2 = { a: undefined };
console.log(isEmpty(data)); // false
console.log(isEmpty(data2)); // true
