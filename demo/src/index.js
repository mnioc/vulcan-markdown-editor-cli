import React from 'react';
import ReactDOM from 'react-dom';
import MDEditor from '../../src/index';

ReactDOM.render(
    <MDEditor initValue={'## 一个基于react-codemirror2打造的markdown在线编辑器'} />,
    document.getElementById('root')
);
