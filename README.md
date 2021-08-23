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

### 2. demo

[在线demo](https://juqipeng.github.io/vulcan-markdown-editor-cli/docs/index.html在线demo)

```javascript
import React from 'react';
import MDEditor from 'vulcan-markdown-editor-cli/lib';
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
