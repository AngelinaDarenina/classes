/**

 * Описание задачи: Напишите функцию, которая глубоко находит пересечения объектов и возвращает объект пересечений.
 * Ожидаемый результат: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }
 * @param {Object} firstObject - объект любых значений
 * @param {Object} secondObject - объект любых значений
 * @returns {Object}
 */

const intersectionDeep = (firstObject, secondObject) => {
      
    let result={};
    for(let key1 in firstObject){
    for(let key2 in secondObject){
    if(key1==key2&&firstObject[key1]!==null&& typeof firstObject[key1]=="object" ){
         result[key1]=intersectionDeep(firstObject[key1], secondObject[key2]);
        
    }
    if(key1==key2&& typeof firstObject[key1]!="object"||firstObject[key1]===null&&firstObject[key1]==secondObject[key2]){
       result[key1]=firstObject[key1];
        
    }
    }
    }
    return result;
   
};

const data = {a: 1, b: {c: 3}};
const data2 = {c: 1, b: {c: 3}};
console.log(intersectionDeep(data, data2)); // { b: { c: 3 } }

module.exports = intersectionDeep;
