/**

 * Описание задачи: Напишите функцию, которая делает глубокое сравнение объектов.
 * Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true
 * @param {Object} firstObj - Объект с любыми значениями
 * @param {Object} secondObj - Объект с любыми значениями
 * @returns {boolean}
 */
export const isEqualDeep = (element) => {
    //починить!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    let arr1Keys = Object.keys(firstObject);
    let arr2Keys = Object.keys(secondObject);
    let resultKeys =
        arr1Keys.length === arr2Keys.length &&
        arr1Keys.every((elem, index) => elem === arr2Keys[index]);
    let arr1Values = Object.values(firstObject);
    let arr2Values = Object.values(secondObject);
        if(resultKeys){
    let object1Arr=arr1Values.filter(elem=>typeof elem==="object"&&elem!==null);
    let object2Arr=arr2Values.filter(elem=>typeof elem==="object"&&elem!==null);
    console.log(object1Arr)
    console.log(object2Arr)
    if( object1Arr.length===0&&object2Arr.length===0){
        let resultValues =
        arr1Values.length === arr2Values.length &&
        arr1Values.every((elem, index) => elem === arr2Values[index]);
        return resultKeys && resultValues;
    }
    if(object1Arr.length!==0&&object1Arr.length===object2Arr.length){
       for (let i=0; i<object1Arr.length; i++){
       return isEqualDeep (object1Arr[i], object2Arr[i])
       }
    }

    }else{
            return false;
        }
};
const data = {a: 1, b: {c: 1}};
const data2 = {a: 1, b: {c: 1}};
const data3 = {a: 1, b: {c: 2}};
console.log(isEqualDeep(data, data2)); // true
console.log(isEqualDeep(data, data3)); // false
