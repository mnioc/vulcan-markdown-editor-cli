import React from 'react';
import { Modal, Form, Input, Radio, Button, InputNumber } from 'antd';

export const TableModal = props => {
    const onFinish = values => {
        const { col, row } = values;
        let colText = '|';
        let alignText = '|';

        for (var i = 0; i < col; i++) {
            colText += ' |';
            alignText += ` ${values.align}|`;
        }

        let rowText = colText + '\n' + alignText + '\n';

        for (var j = 0; j < row - 1; j++) {
            rowText += colText + '\n';
        }
        props.insertText('before', rowText);
        props.setShowTableModal(false);
    };
    return (
        <Modal
            title="插入表格"
            bodyStyle={{ height: '270px', overflowY: 'auto' }}
            destroyOnClose={true}
            footer={null}
            onCancel={() => {
                props.setShowTableModal(false);
            }}
            visible={props.showTableModal}
        >
            <Form onFinish={onFinish}>
                <Form.Item name="col" initialValue={3} label="行数">
                    <InputNumber />
                </Form.Item>
                <Form.Item name="row" initialValue={3} label="列数">
                    <InputNumber />
                </Form.Item>
                <Form.Item name="align" initialValue={' :----: '} label="对其方式">
                    <Radio.Group>
                        <Radio key="left" value=" :---- ">
                            左对齐
                        </Radio>
                        <Radio key="right" value=" ----: ">
                            右对齐
                        </Radio>
                        <Radio key="center" value=" :----: ">
                            居中对齐
                        </Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit" className="form-submi-btn" type="primary">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export const LinkModal = props => {
    const onFinish = values => {
        const { name, addr } = values;
        props.insertText('before', `[${name}](${addr}${name})`);
        props.setShowLinkModal(false);
    };
    return (
        <Modal
            title="插入链接"
            bodyStyle={{ height: '220px', overflowY: 'auto' }}
            destroyOnClose={true}
            footer={null}
            onCancel={() => {
                props.setShowLinkModal(false);
            }}
            visible={props.showLinkModal}
        >
            <Form onFinish={onFinish}>
                <Form.Item name="addr" initialValue={'http://'} label="链接地址">
                    <Input />
                </Form.Item>
                <Form.Item name="name" initialValue={''} label="链接名称">
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button style={{ marginLeft: 200 }} htmlType="submit" className="form-submi-btn" type="primary">
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
