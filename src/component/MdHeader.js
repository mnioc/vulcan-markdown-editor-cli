import React, { useState } from 'react';
import { Space, Divider, Tooltip, Dropdown, Menu, Upload, message } from 'antd';
import {
    QuoteIcon,
    ItalicIcon,
    UnOrderedListIcon,
    OrderedListIcon,
    DeleteLineIcon,
    TaskListIcon,
    MdThemeIcon,
    EditThemeIcon,
    FontSizeIcon,
    HigIcon,
    TableIcon,
    ImgUploadIcon,
    LinkIcon,
    CodeInlineIcon,
    CodeBlockIcon,
    EditPreviewIcon,
    PreviewIcon,
    UploadIcon,
    RedoOutlined,
    UndoOutlined,
    EditOutlined,
    MinusOutlined,
    FullscreenOutlined,
    FullscreenExitOutlined
} from '../assets/Icon';
import { TableModal, LinkModal } from './ModalTool';

export default props => {
    const { setThemeConf, insertText, editor, setEditMode } = props;
    const [showTableModal, setShowTableModal] = useState(false);
    const [showLinkModal, setShowLinkModal] = useState(false);

    const editThemeMenu = (
        <Menu
            onClick={e => {
                setThemeConf({ editTheme: e.key });
            }}
        >
            <Menu.Item key="mdn-like">浅色风格</Menu.Item>
            <Menu.Item key="ambiance">深色风格</Menu.Item>
        </Menu>
    );

    const codeHigMenu = (
        <Menu
            onClick={e => {
                setThemeConf({ codeHig: e.key });
            }}
        >
            <Menu.Item key="a11yDark">a11yDark</Menu.Item>
            <Menu.Item key="prism">prism</Menu.Item>
            <Menu.Item key="synthwave84">synthwave84</Menu.Item>
            <Menu.Item key="tomorrow">tomorrow</Menu.Item>
            <Menu.Item key="xonokai">xonokai</Menu.Item>
        </Menu>
    );

    const fontSizeMenu = (
        <Menu
            onClick={e => {
                setThemeConf({ fontSize: Number(e.key) });
            }}
        >
            <Menu.Item key={12}>12px</Menu.Item>
            <Menu.Item key={13}>13px</Menu.Item>
            <Menu.Item key={14}>14px</Menu.Item>
            <Menu.Item key={15}>15px</Menu.Item>
            <Menu.Item key={16}>16px</Menu.Item>
            <Menu.Item key={17}>17px</Menu.Item>
            <Menu.Item key={18}>18px</Menu.Item>
            <Menu.Item key={19}>19px</Menu.Item>
            <Menu.Item key={20}>20px</Menu.Item>
        </Menu>
    );

    const codeTypeMenu = (
        <Menu
            onClick={e => {
                const tmpText = '```' + (e.key || '') + '\n' + '{$}' + '\n' + '```';
                insertText('middle', tmpText);
            }}
        >
            <Menu.Item key="python">python</Menu.Item>
            <Menu.Item key="java">java</Menu.Item>
            <Menu.Item key="javascript">javascript</Menu.Item>
            <Menu.Item key="c">c</Menu.Item>
            <Menu.Item key="c++">c++</Menu.Item>
            <Menu.Item key="golang">golang</Menu.Item>
            <Menu.Item key="bash">bash</Menu.Item>
            <Menu.Item key="shell">shell</Menu.Item>
            <Menu.Item key="c#">c</Menu.Item>
            <Menu.Item key="css">c++</Menu.Item>
            <Menu.Item key="less">golang</Menu.Item>
            <Menu.Item key="scss">bash</Menu.Item>
            <Menu.Item key="sql">sql</Menu.Item>
            <Menu.Item key="scala">scala</Menu.Item>
            <Menu.Item key="ruby">ruby</Menu.Item>
            <Menu.Item key="php">php</Menu.Item>
            <Menu.Item key="perl">perl</Menu.Item>
        </Menu>
    );

    const contentThemeMenu = (
        <Menu
            onClick={e => {
                setThemeConf({ contentTheme: e.key });
            }}
        >
            <Menu.Item key="none">默认</Menu.Item>
            <Menu.Item key="md-editor-preview-theme-channing-cyan">channing-cyan</Menu.Item>
            <Menu.Item key="md-editor-preview-theme-juejin">juejin</Menu.Item>
            <Menu.Item key="md-editor-preview-theme-smartblue">smartblue</Menu.Item>
            <Menu.Item key="md-editor-preview-theme-awesome-green">awesome-green</Menu.Item>
        </Menu>
    );

    const clickMenuList = [
        [
            { tipTitle: '撤销', icon: <UndoOutlined />, clickEvent: () => editor.undo() },
            { tipTitle: '重做', icon: <RedoOutlined />, clickEvent: () => editor.redo() }
        ],
        [
            { clickEvent: () => insertText('before', '# '), tipTitle: '标题1', icon: 'H1' },
            { clickEvent: () => insertText('before', '## '), tipTitle: '标题2', icon: 'H2' },
            { clickEvent: () => insertText('before', '### '), tipTitle: '标题3', icon: 'H3' },
            { clickEvent: () => insertText('before', '#### '), tipTitle: '标题4', icon: 'H4' },
            { clickEvent: () => insertText('before', '##### '), tipTitle: '标题5', icon: 'H5' },
            { clickEvent: () => insertText('before', '###### '), tipTitle: '标题6', icon: 'H6' }
        ],
        [
            { clickEvent: () => insertText('middle', '**{$}**'), tipTitle: '粗体', icon: 'B' },
            { clickEvent: () => insertText('middle', '*{$}*'), tipTitle: '斜体', icon: <ItalicIcon /> },
            { clickEvent: () => insertText('before', '> '), tipTitle: '引用', icon: <QuoteIcon /> },
            { clickEvent: () => insertText('middle', '~~{$}~~'), tipTitle: '删除线', icon: <DeleteLineIcon /> },
            { clickEvent: () => insertText('middle', '\n *** \n '), tipTitle: '分割线', icon: <MinusOutlined /> }
        ],
        [
            { clickEvent: () => insertText('orderList', '1. '), tipTitle: '有序列表', icon: <OrderedListIcon /> },
            { clickEvent: () => insertText('list', '- '), tipTitle: '无序列表', icon: <UnOrderedListIcon /> },
            { clickEvent: () => insertText('list', '- [x] '), tipTitle: '任务列表', icon: <TaskListIcon /> },
            { clickEvent: () => setShowTableModal(true), tipTitle: '插入表格', icon: <TableIcon /> },
            { clickEvent: () => setShowLinkModal(true), tipTitle: '插入链接', icon: <LinkIcon /> },
            { clickEvent: () => insertText('middle', '`{$}`'), tipTitle: '行内代码', icon: <CodeInlineIcon /> }
        ]
    ];

    const dropdownMenuList = [
        { tipTitle: '编辑器主题', icon: <EditThemeIcon />, overlay: editThemeMenu },
        { tipTitle: '编辑器字体大小', icon: <FontSizeIcon />, overlay: fontSizeMenu },
        { tipTitle: '内容主题', icon: <MdThemeIcon />, overlay: contentThemeMenu },
        { tipTitle: '代码主题风格', icon: <HigIcon />, overlay: codeHigMenu }
    ];

    const otherToolList = [
        { tipTitle: '预览模式', icon: <PreviewIcon />, clickEvent: () => setEditMode(1) },
        { tipTitle: '仅编辑模式', icon: <EditOutlined />, clickEvent: () => setEditMode(0) },
        { tipTitle: '双屏显示模式', icon: <EditPreviewIcon />, clickEvent: () => setEditMode(2) },
        {
            tipTitle: props.isFullScreen ? '退出全屏' : '全屏',
            icon: props.isFullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />,
            clickEvent: () => {
                props.setIsFullScreen();
            }
        }
    ];

    const beforeUpload = async (file, fileList) => {
        var reader = new FileReader();

        if (file.type !== 'text/markdown') {
            message.error('目前只支持markdown文件上传，请检查上传文件是否正确');
            return false;
        }
        reader.readAsText(file, 'utf-8');
        reader.onload = function (e) {
            props.insertText('before', e.target.result);
            return false;
        };
        return false;
    };

    const handleChange = e => {
        if (e.file.status === 'done') {
            props.insertText('before', `![img](${e.file.response.file_path})`);
        }
    };

    return (
        <Space split={<Divider type="vertical" dashed={true} />}>
            <TableModal insertText={insertText} showTableModal={showTableModal} setShowTableModal={setShowTableModal} />
            <LinkModal insertText={insertText} showLinkModal={showLinkModal} setShowLinkModal={setShowLinkModal} />
            {clickMenuList.map((item, __idx) => (
                <Space key={__idx + 100}>
                    {item.map((_, index) => (
                        <a key={index} onClick={_.clickEvent}>
                            <Tooltip placement="bottomLeft" title={_.tipTitle}>
                                <i className="cum-i-icon">{_.icon}</i>
                            </Tooltip>
                        </a>
                    ))}

                    {__idx === 3 && (
                        <>
                            <Tooltip placement="bottomLeft" title="代码块">
                                <Dropdown overlay={codeTypeMenu} trigger={['click']}>
                                    <a onClick={e => e.preventDefault()}>
                                        <i className="cum-i-icon">{<CodeBlockIcon />}</i>
                                    </a>
                                </Dropdown>
                            </Tooltip>
                            <Tooltip title="上传图片">
                                <Upload
                                    name="file_path"
                                    showUploadList={false}
                                    headers={props.imageUploadConf?.headers}
                                    action={props.imageUploadConf?.url}
                                    onChange={handleChange}
                                >
                                    <a onClick={e => e.preventDefault()}>
                                        <i className="cum-i-icon">{<ImgUploadIcon />}</i>
                                    </a>
                                </Upload>
                            </Tooltip>
                        </>
                    )}
                </Space>
            ))}
            <Space>
                {dropdownMenuList.map((item, index) => (
                    <Tooltip key={index + 200} placement="bottomLeft" title={item.tipTitle}>
                        <Dropdown overlay={item.overlay} trigger={['click']}>
                            <a onClick={e => e.preventDefault()}>
                                <i className="cum-i-icon">{item.icon}</i>
                            </a>
                        </Dropdown>
                    </Tooltip>
                ))}
            </Space>
            <Space>
                {otherToolList.map((_, index) => (
                    <a key={index + 400} onClick={_.clickEvent}>
                        <Tooltip placement="bottomLeft" title={_.tipTitle}>
                            <i className="cum-i-icon">{_.icon}</i>
                        </Tooltip>
                    </a>
                ))}
            </Space>
            <Space>
                <Tooltip title="导入markdown">
                    <Upload name="file_path" showUploadList={false} beforeUpload={beforeUpload}>
                        <a onClick={e => e.preventDefault()}>
                            <i className="cum-i-icon">{<UploadIcon />}</i>
                        </a>
                    </Upload>
                </Tooltip>
            </Space>
        </Space>
    );
};
