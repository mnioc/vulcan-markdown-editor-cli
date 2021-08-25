import React from 'react';
import _ from '../../src/index';
const { MDEditor } = _;

export default () => {
    return <MDEditor initValue={'## 一个基于react-codemirror2打造的markdown在线编辑器 \n\n 请尽情享受创作！'} />;
};
