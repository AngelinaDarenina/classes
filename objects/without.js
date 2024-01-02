/**

 * Описание задачи: Напишите функцию, которая возвращает новый объект без указанных значений.
 * Ожидаемый результат: ({ a: 1, b: 2 }, 'b') => { a: 1 }
 * @param {Object} object - любой объект
 * @param {?} args - список значений для удаления
 * @returns {Object} - новый объект без удаленных значений
 */

export const without = (object, ...args) => {
    for (let arg of args) {
        delete object[arg];
    }
    return object;
};

const data = { a: 1, b: 2, c: 3 };
console.log(without(data, "b", "c")); // { a: 1 }
console.log(without({ a: 1, b: 2 }, "b", "a"));
