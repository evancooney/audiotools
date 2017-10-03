'use strict';

var expect = require('chai').expect;
var audiotools = require('../index');

describe('#numFormatter', function() {

    // MILLISECONDS 

    it('should convert 64000 miliseconds to 01:04 format', function() {
        var result = audiotools.formatMilliseconds(64000.00);
        expect(result).to.equal('01:04');
    });


    it('should convert a negative number to 00:00', function() {
        var result =audiotools.formatMilliseconds(-5000.00);
        expect(result).to.equal('00:00');
    });

    it('should convert an empty string to 00:00', function() {
        var result =audiotools.formatMilliseconds('');
        expect(result).to.equal('00:00');
    });

    // SECONDS

    it('should convert 64 seconds to 01:04 format', function() {
        var result = audiotools.formatSeconds(64.00);
        expect(result).to.equal('01:04');
    });


});
