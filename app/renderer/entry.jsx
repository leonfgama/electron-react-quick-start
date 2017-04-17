// Need both React and ReactDOM for the JSX transpiler.
import ReactDOM from 'react-dom';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Main from './components/Main';

injectTapEventPlugin();

ReactDOM.render(
  <Main />,
  document.getElementById('react-root')
);