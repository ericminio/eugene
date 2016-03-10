var renderer = function(category, message) {
    var date = renderer.getCurrentTime();
    var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
    var ms = date.getMilliseconds() < 10 ? '00' + date.getMilliseconds() :
             date.getMilliseconds() < 100 ? '0' + date.getMilliseconds() : date.getMilliseconds();

    var timestamp = date.getFullYear() + '-'
                    + (date.getMonth() + 1) + '-'
                    + day + ' '
                    + hours + ':'
                    + minutes + ':'
                    + seconds + '.' + ms;

    return  '[' + timestamp + ']' + ' [' + category + '] ' + message;
};

renderer.getCurrentTime = function() {
    return new Date();
};

module.exports = renderer;
