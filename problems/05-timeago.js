/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
function timeago(seconds) {
    if (seconds < 10) {
        return "just now";
    }
    if (seconds < 60) {
        let minute = String(seconds);
        return `${minute[0]}0 seconds ago`;
    }
    if (seconds < 1800) {
        if (Math.floor(seconds / 60) === 1) {
            return `${Math.floor(seconds / 60)} minute ago`;
        }
        return `${Math.floor(seconds / 60)} minutes ago`;
    }
    if (seconds < 3600) {
        return `30 minutes ago`;
    }
    if (seconds < 43200) {
        if (Math.floor(seconds / 3600) === 1) {
            return `${Math.floor(seconds / 3600)} hour ago`;
        }
        return `${Math.floor(seconds / 3600)} hours ago`;
    }
    if (seconds < 86400) {
        return `12 hours ago`;
    }
    if (seconds < 172800) {
        return `1 day ago`;
    }
    if (seconds < 604800) {
        return `a few days ago`;
    }
    if (seconds < 2419200) {
        if (Math.floor(seconds / 604800) === 1) {
            return `${Math.floor(seconds / 604800)} week ago`;
        }
        return `${Math.floor(seconds / 604800)} weeks ago`;
    }
    return `undefined`;
}

module.exports = timeago;
