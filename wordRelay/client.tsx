import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import wordRelay from './wordRelay';

const Hot = hot(wordRelay);

ReactDOM.render(<Hot />, document.querySelector('#root'));
