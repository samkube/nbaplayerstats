'use strict';
module.exports = function (scoring) {
    var highest = {
        name: '',
        points: 0
    };
    for (var i = 0; i < scoring.length; i++) {
        if (scoring[i].points > highest.points) {
            highest = scoring[i];
        }
    }
    return highest;
};