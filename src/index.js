import React from 'react';
import ReactDOM from 'react-dom';

import Education from './components/education';
import Contact from './components/contact';
import Interests from './components/interests';


ReactDOM.render(
  <React.StrictMode>
    <Education />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <Interests />
  </React.StrictMode>,
  document.getElementById('interest')
);

ReactDOM.render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>,
  document.getElementById('contact')
);
