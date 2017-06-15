import angular from 'angular';
import mocks from 'angular-mocks';

import * as app from '../src/app';

let context = require.context('.', true, /\.spec\.js/);

// Get all files, for each file, call the context function
// that will require the file and load it here. Context will
// loop and require those spec files here.
context.keys().forEach(context);
