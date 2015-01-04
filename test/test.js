/*global describe, it */
'use strict';
var assert = require('assert');
var nbaplayerstats = require('../');

describe('nbaplayerstats node module', function () {
  it('must have at least one test', function () {
    var a = nbaplayerstats();
    assert(a,'I suck');
  });
});
