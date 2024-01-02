/**
 * Реализуйте класс Validator, который будет проверять строки.
 * К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет.
 * Если является - возвращает true, если не является - то false.
 * Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена,
 * метод isDate для проверки даты и метод isPhone для проверки телефона:
 */
class Validator {
    isEmail(string){
        if(typeof string==="string"){
        return string.endsWith(`@mail.ru`)||string.endsWith(`@gmail.com`)?true:false;
           }else{
               return false
           }
           }
    
    isDomain(string){
         if(typeof string==="string"){
        return string.endsWith(`.net`)||string.endsWith(`.com`)||string.endsWith(`.ru`)?true:false;
         }else{
               return false
           }
    }
    isDate(string){
        //починить!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        /*if (typeof string==="string"&&string.length===10){
        let dateString=string.split(".").reverse().join("-");
        console.log(dateString)
        let date=new Date(dateString);
        console.log(date.getMonth())
        return !isNaN(date.getTime());
        /*if (typeof string==="string"&&string.length===10){
        let dateArr=string.split(".");
        console.log(dateArr)
        if(dateArr[1]<=12&&dateArr[0]<=31){
        return true;
    }else{
        return false
    }*/
    }
    isPhone(){
        
    }
}


const validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

module.exports = Validator;
