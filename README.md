Audio Tools
=========

A small library that provides utility functions for audio and other time-based
media.

## Installation

  `npm install @evancooney/audiotools`

## Usage

    var Audiotools = require('@evancooney/audiotools');
    var formattedNum = Audiotools.formatMilliseconds(64000.00);

    or with React

    import {formatMilliseconds} from 'audiotools'
    formatMilliseconds(64000.00);


  Output should be `01:04`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.
