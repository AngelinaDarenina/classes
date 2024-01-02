/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
    if (object!==null&&typeof object==="object"){
let currentObject=object;
for(let item of path){
  
    if(Object.keys(currentObject).includes(item)){
       currentObject=currentObject[item];
    }else{
        return false;
    }

}
return true;
}
return false
}
module.exports = has;
