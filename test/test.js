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

    // BIT DEPTH

    it('should convert a sample rate, channel count and bitrate (44.1KHz, stereo, 1411267kbps)', function() {
        var result = audiotools.formatBitDepth(44100,2, 1411267);
        expect(result).to.equal(16);
    });

    it('should convert a sample rate, channel count and bitrate (44100, stereo, 2116000)', function() {
        var result = audiotools.formatBitDepth(44100,2, 2116000);
        expect(result).to.equal(24);
    });

    it('should convert a sample rate, channel count and bitrate (96000, stereo, 4608000)', function() {
        var result = audiotools.formatBitDepth(96000,2, 4608000);
        expect(result).to.equal(24);
    });

    // BIT RATE

    it('should convert a sample rate, channel count and bit depth (44100, stereo, 16)', function() {
        var result = audiotools.formatBitRate(44100,2, 16);
        expect(result).to.equal(1411200);
    });




});
