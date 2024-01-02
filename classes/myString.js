/**
 * Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде, метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */

class MyString {
    reverse = (string) => {
        if (typeof string === "string")
            return string.split("").reverse().join("");
    };
    ucFirst = (string) => {
        if (typeof string === "string") {
            if (string === "") {
                return "";
            }
            let arr = string.split("");
            let letterArr = arr.filter((item) => item !== " ");
            letterArr[0] = letterArr[0].toUpperCase();
            return letterArr.join("");
        }
    };
    ucWords = (string) => {
        if (typeof string === "string") {
            if (string === "") {
                return "";
            }
            let words = string.split(" ");
            let onlyWords = words.filter((item) => item !== "");
            let wordsByLetters = onlyWords.map((elem) => {
                let arr = elem.split("");
                arr[0] = arr[0].toUpperCase();
                return arr.join("");
            });
            return wordsByLetters.join(" ");
        }
    };
}
const str = new MyString();

console.log(str.reverse("abcde")); //выведет 'edcba'
console.log(str.ucFirst("abcde")); //выведет 'Abcde'
console.log(str.ucWords("abcde abcde abcde")); //выведет 'Abcde Abcde Abcde'

module.exports = MyString;
