/**

 * Описание задачи: Напишите функцию, которая поверхностно сравнивает два объекта.
 * Ожидаемый результат: True если объекты идентичны, false если объекты разные ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true
 * @param {Object<string | number>} firstObject - объект с примитивами
 * @param {Object<string | number>} secondObject - объект с примитивами
 * @returns {boolean}
 */

export const isEqual = (firstObject, secondObject) => {
    let arr1Keys = Object.keys(firstObject);
    let arr2Keys = Object.keys(secondObject);
    let arr1Values = Object.values(firstObject);
    let arr2Values = Object.values(secondObject);

    let resultKeys =
        arr1Keys.length === arr2Keys.length &&
        arr1Keys.every((elem, index) => elem === arr2Keys[index]);

    let resultValues =
        arr1Values.length === arr2Values.length &&
        arr1Values.every((elem, index) => elem === arr2Values[index]);

    return resultKeys && resultValues;
};

const data = { a: 1, b: 1 };
const data2 = { a: 1, b: 1 };
const data3 = { a: 1, b: 2 };
console.log(isEqual(data, data2)); // true
console.log(isEqual(data, data3)); // false
