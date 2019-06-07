import React from 'react';
import ReactDOM from 'react-dom';
import { Stackblitz } from '../index.js';

const Demo = () => <Stackblitz>
  <file name="index.html" content="<h1>Hello</h1>" />
  <file name="index.ts" open>console.log("hello stackblitz!!");</file>
</Stackblitz>

ReactDOM.render(<Demo/>,document.getElementById('root'));
