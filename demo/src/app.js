import React from 'react';
import _ from '../../src/index';

const { MDEditor } = _;

export default () => {
    const value =
        "# 一个基于 react-codemirror2 打造的 markdown 在线编辑器 \n\
        \n\
## 1、描述\n\
\n\
目前已经存在很多在线的 markdown 编辑器，本着不重复造轮子的想法，奈何没有找到适合我的，（重度强迫症患者..）\n\
于是就想想自己实现一个编辑器。当前的版本主要还是满足自己的需求，不太支持太多定制化的功能。\n\
后续有空的话，可以考虑重新封装。\n\
\n\
初始版本，目前支持的功能：\n\
\n\
-   图片上传(上传本地图片、复制粘贴上传)\n\
-   实时预览\n\
-   代码高亮风格\n\
-   编辑器主题\n\
-   文档主题\n\
-   markdown 文档本地导入\n\
\n\
## 用法\n\
\n\
### 1.安装\n\
\n\
```shell\n\
npm i --save vulcan-markdown-editor-cli/lib\n\
```\n\
\n\
### 2. 编辑器 demo\n\
\n\
[在线 demo](https://juqipeng.github.io/vulcan-markdown-editor-cli/)\n\
\n\
```javascript\n\
import React from 'react';\n\
import { MDEditor } from 'vulcan-markdown-editor-cli/lib';\n\
import 'vulcan-markdown-editor-cli/lib/main.min.css';\n\
\n\
export default () => {\n\
    // 图片上传配置项\n\
    const imageUploadConf = {\n\
        url: apiPath.attachments,\n\
        headers: { Authorization: `Bearer ${getToken('access')}` }\n\
        headers: { Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjMwMDg4Njg4LCJqdGkiOiIyNjFhZjQ4YzY3MGM0YWM4OTRiNTdjMWY1MjcwZmFiZiIsInVzZXJfaWQiOjF9.euei6eO6x1Gh5hg5ygur-U1dSVpc-xyUixB_yLv89Nk` }\n\
    };\n\
\n\
    const initValue = '# 这是一个基于react-codemirror2打造的markdown在线编辑器';\n\
\n\
    return (\n\
        <MDEditor\n\
            imageUploadConf={imageUploadConf}\n\
            initValue={initValue}\n\
            height={'100%'}\n\
            onChange={value => {\n\
                console.log(value);\n\
            }}\n\
        />\n\
    );\n\
};\n\
```\n\
\n\
### 3. markdown 转 html 组件 demo\n\
\n\
```javascript\n\
import React from 'react';\n\
import { MDPriview } from 'vulcan-markdown-editor-cli/lib';\n\
import 'vulcan-markdown-editor-cli/lib/main.min.css';\n\
\n\
export default () => {\n\
    // markdown内容\n\
    const value = '# 这是一个基于react-codemirror2打造的markdown在线编辑器';\n\
\n\
    // 文章内容主题\n\
    const contentTheme = 'awesome-green';\n\
\n\
    // 代码高亮风格\n\
    // 目前内置（a11yDark、prism、synthwave84、tomorrow）\n\
    const codeHigTheme = 'a11yDark';\n\
\n\
    return <MDPriview value={value} contentTheme='awesome-green' codeHigTheme={codeHigTheme} />;\n\
};\n\
```\n\
\n\
> 目前该组件内置四种主题：\n\
\n\
-   awesome-green\n\
-   juejin\n\
-   smartblue\n\
-   channing-cyan\n\
\n\
上述主题均来自社区优秀的主题[地址](https://github.com/xitu/juejin-markdown-themes)，再次特别鸣谢这些主题的作者，若有侵权，请联系作者删除！\n\
";

    return <MDEditor initValue={value} />;
};
