/**

 * Описание задачи: Напишите функцию, которая делает глубокую проверку на пустоту объекта.
 * Пустые значения: '', null, NaN, undefined, [], {}
 * Ожидаемый результат: ({}) => true,
 ({ a: { b: undefined } }) => true,
 ({ a: { b: [] } }) => true
 * @param {Object} object - любой объект
 * @returns {boolean}
 */

 const isEmptyDeep = (object) => {
    let result = [];
    for (let key in object) {
        if (typeof object[key] === "object" && object[key] !== null) {
            result.push(isEmptyDeep(object[key]));
        } else {
            result.push(!object[key]);
        }
    }
    return result.every((elem) => elem === true);
};

console.log(isEmptyDeep({ a: { b: undefined } })); // true
console.log(isEmptyDeep({ a: { b: 1 } })); //false
console.log(isEmptyDeep({ a: null })); //true
console.log(isEmptyDeep({})); //true
console.log(isEmptyDeep({ a: { b: [] } })); //true

const data = { a: { b: undefined } };
const data2 = { a: { b: 1 } };
console.log(isEmptyDeep(data)); // true
console.log(isEmptyDeep(data2)); // false
