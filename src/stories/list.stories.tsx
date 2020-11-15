import React from 'react'
import { List, Avatar } from '../../components'
import { themeIt } from './utils/withTheme'
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';

export default {
    title: 'Data Display / List',
    component: List as any,
    decorators: [themeIt],
    parameters: {
        docs: {
            description: ''
        }
    },
    argTypes: {

    },

};

export const Basic = () => {
    const data = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
        'Los Angeles battles huge wildfires.',
    ];
    return <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (
            <List.Item>
                {item}
            </List.Item>
        )}
    />
}

export const MetaList = () => {
    const data = [
        {
            title: 'Rong UI Title 1',
        },
        {
            title: 'Rong UI Title 2',
        },
        {
            title: 'Rong UI Title 3',
        },
        {
            title: 'Rong UI Title 4',
        },
    ];
    return (<List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
            <List.Item>
                <List.Item.Meta
                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                    title={item.title}
                    description="Rong UI, a modern CSS in JS react library"
                />
            </List.Item>
        )}
    />)
}

export const MoreMetaList = () => {
    const listData = [];
    for (let i = 0; i < 3; i++) {
        listData.push({
            title: `Rong ui design ${i}`,
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            description:
                'Rong is modern CSS in JS react ui library',
            content:
                'We provide over 35 components for developers to build toB or toC product beautifully and efficiently.',
        });
    }
    return (<List
        itemLayout="vertical"
        dataSource={listData}
        footer={
            <div>
                <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
            <List.Item
                key={item.title}
                actions={[
                    <p><StarOutlined />256</p>,
                    <p><LikeOutlined />12</p>,
                    <p><MessageOutlined />6</p>,
                ]}
                extra={
                    <img
                        width={272}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                }
            >
                <List.Item.Meta
                    avatar={<Avatar src={item.avatar} />}
                    title={item.title}
                    description={item.description}
                />
                {item.content}
            </List.Item>
        )}
    />)
}