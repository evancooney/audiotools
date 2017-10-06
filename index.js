'use strict';


/**
 * Convert duration to MM:SS format
 *
 * @param  {Number} milliseconds
 * @return {String}
 */
module.exports = {
  formatMilliseconds: function(milliseconds) {

    if (milliseconds <= 0) {
      return '00:00'
    }

    var hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;
    var minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;
    var seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    return (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
  },

  /**
   * Convert duration to MM:SS format
   *
   * @param  {Number} milliseconds
   * @return {String}
   */

  formatSeconds: function(milliseconds) {

    if (milliseconds <= 0) {
      return '00:00'
    }

    var hours = Math.floor(milliseconds / 3600);
    milliseconds = milliseconds % 3600;
    var minutes = Math.floor(milliseconds / 60);
    milliseconds = milliseconds % 60;
    var seconds = Math.floor(milliseconds / 1);
    milliseconds = Math.floor(milliseconds % 1);

    return (minutes < 10 ? '0' : '') + minutes + ':' +
        (seconds < 10 ? '0' : '') + seconds;
  },

  /**
   * Extract bit depth
   *
   * @param  {sampleRate} Sample Rate
   * @param  {channels} Channels
   * @param  {bitRate} Bit rate
   * @return {Number}
   */

  formatBitDepth: function(sampleRate, channels, bitRate) {

    if (sampleRate == '' || channels == '' || bitRate == '') {
      return 0
    }

    var bitDepth = ( bitRate / channels)  / sampleRate

    return Math.round(bitDepth)
  },

  /**
   * Extract bit rate
   *
   * @param  {sampleRate} Sample Rate
   * @param  {channels} Channels
   * @param  {bitDepth} Bit Depth
   * @return {Number}
   */

  formatBitRate: function(sampleRate, channels, bitDepth) {

    if (sampleRate == '' || channels == '' || bitDepth == '') {
      return 0
    }

    var bitRate = sampleRate * channels  * bitDepth

    return Math.round(bitRate)
  }

};
