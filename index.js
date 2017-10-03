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
  }

};
