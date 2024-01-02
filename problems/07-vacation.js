/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */
function vacation(date) {
    let begin=new Date(date.split(".").reverse().join("-"));
    
    begin.setDate(begin.getDate()+14);
    
    
    let month=begin.getMonth()+1;
    month=month<10?`0${month}`:month;
   let day=begin.getDate();
   day=day<10?`0${day}`:day;
    return`${day}.${month}.${begin.getFullYear()}`;
  }

module.exports = vacation;
