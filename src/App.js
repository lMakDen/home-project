import React, { Component } from 'react';
import { injectGlobal } from 'styled-components';

import {Landing} from './containers/landing';
import regular from './../src/assets/fonts/Lato/Lato-Regular.ttf'
import italic from './../src/assets/fonts/Lato/Lato-Italic.ttf'

class App extends Component {
  render() {

    return (
        <Landing/>
    );
  }
}

injectGlobal`
  @font-face {
    font-family: 'Lato-Italic';
    src: url("${italic}");
  }
  @font-face {
    font-family: 'Lato-Regular';
    src: url("${regular}");
  }
  body{
    margin:0;
  }
`

export default App;
