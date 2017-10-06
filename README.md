Audio Tools
=========

A small library that provides utility functions for audio and other time-based
media (especially the functions I've re-written countless times!)

## Installation

  `npm install @evancooney/audiotools`

      var Audiotools = require('@evancooney/audiotools');
      var formattedNum = Audiotools.formatMilliseconds(64000.00);

      or with React

      import {formatMilliseconds} from 'audiotools'
      formatMilliseconds(64000.00);


      Output should be `01:04`

## Usage

**formatMilliseconds(milliseconds)**
Usage:
- formatMilliSeconds(64000.00)
- Output is: 01:04

**formatMilliseconds(seconds)**
- formatMilliSeconds(64)
- Output is: 01:04

-- Empty or negative values with return: 0:00

**formatBitDepth(sampleRate, channels, bitrate)**
- formatBitDepth(44100, 2, 1411267)
-  Output is: 16

**formatBitrate(sampleRate, channels, bitDepth)**
- formatBitDepth(44100, 2, 16)
- Output is: 1411200



## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style.
Would welcome any assistance!
