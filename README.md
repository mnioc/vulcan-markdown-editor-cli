# 一个基于 react-codemirror2 打造的 markdown 在线编辑器

## 1、描述

目前已经存在很多在线的 markdown 编辑器，本着不重复造轮子的想法，奈何没有找到适合我的，（重度强迫症患者..）
于是就想想自己实现一个编辑器。当前的版本主要还是满足自己的需求，不太支持太多定制化的功能。
后续有空的话，可以考虑重新封装。

初始版本，目前支持的功能：

-   图片上传(上传本地图片、复制粘贴上传)
-   实时预览
-   代码高亮风格
-   编辑器主题
-   文档主题
-   markdown 文档本地导入

## 用法

### 1.安装

```shell
npm i --save vulcan-markdown-editor-cli/lib
```

### 2. 编辑器 demo

[在线 demo](https://juqipeng.github.io/vulcan-markdown-editor-cli/docs/index.html)

```javascript
import React from 'react';
import { MDEditor } from 'vulcan-markdown-editor-cli/lib';
import 'vulcan-markdown-editor-cli/lib/main.min.css';

export default () => {
    // 图片上传配置项
    const imageUploadConf = {
        url: apiPath.attachments,
        headers: { Authorization: `Bearer ${getToken('access')}` }
    };

    const initValue = '# 这是一个基于react-codemirror2打造的markdown在线编辑器';

    return (
        <MDEditor
            imageUploadConf={imageUploadConf}
            initValue={initValue}
            height={'100%'}
            onChange={value => {
                console.log(value);
            }}
        />
    );
};
```

### 3. markdown 转 html 组件 demo

```javascript
import React from 'react';
import { MDPriview } from 'vulcan-markdown-editor-cli/lib';
import 'vulcan-markdown-editor-cli/lib/main.min.css';

export default () => {
    // markdown内容
    const value = '# 这是一个基于react-codemirror2打造的markdown在线编辑器';

    // 文章内容主题
    const contentTheme = 'awesome-green';

    // 代码高亮风格
    // 目前内置（a11yDark、prism、synthwave84、tomorrow）
    const codeHigTheme = 'a11yDark';

    return <MDPriview value={value} contentTheme="awesome-green" codeHigTheme={codeHigTheme} />;
};
```

> 目前该组件内置四种主题：

-   awesome-green
-   juejin
-   smartblue
-   channing-cyan

上述主题均来自社区优秀的主题[地址](https://github.com/xitu/juejin-markdown-themes)，再次特别鸣谢这些主题的作者，若有侵权，请联系作者删除！
