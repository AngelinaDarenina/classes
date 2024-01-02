/**

 * Описание задачи: Напишите функцию, которая вызывает метод массива на заданный путь объекта.
 * Ожидаемый результат: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]
 * @param {Object} object
 * @param {String} path - путь в объекте
 * @param {String} func - метод массива для исполнения
 * @param {Array} [args] - список аргументов
 * @returns {?}
 */

const invoke = (object, path, func, args) => {
    let pathArr = path.split(".");
    console.log(pathArr);
    let resultArr = object;
    for (let i of pathArr) {
        resultArr = resultArr[i];
        console.log(resultArr);
    }

    return resultArr[func](...args);
};

const data = { a: { b: [1, 2, 3] } };
console.log(invoke(data, "a.b", "splice", [1, 2])); // [2, 3]

module.exports = invoke;
