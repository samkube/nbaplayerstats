/*global describe, it */
'use strict';
var assert = require('assert');
var nbaplayerstats = require('../');
var topscorer = require('../Daily Leaders/TopScorer.js');

describe('nbaplayerstats node module', function () {
    it('must have at least one test', function () {
        var a = nbaplayerstats();
        assert(a, 'I suck');
    });
});

describe('daily leaders top scorer', function () {
    it('return the highest daily scorer', function () {
        var scoring = [{
            name: 'Dave',
            points: 34
        }, {
            name: 'Dylan',
            points: 4
        }, {
            name: 'Ethan',
            points: 1
        }];
        var highest = topscorer(scoring);
        assert(highest.points === 34, 'I suck again');
    });
});