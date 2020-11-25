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
            description: {
                component:"<h3>When To Use?</h3>A list can be used to display content related to a single subject. The content can consist of multiple elements of varying type and size."
            }
        }
    },
    argTypes: {
        bordered: {
            description: "Whether show border of list or not<h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue: {
                    summary: "true"
                }
            },
            control:{}
        },
        size: {
            description: "The size of list<h6>type</h6>",
            table: {
                type: {
                    summary: '"small" | "default" | "large"'
                },
                defaultValue: {
                    summary: "default"
                }
            }
        },
        style:{
            description:"The style object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"CSSProperties"
                }
            }
        },
        className:{
            description:"The className object of container<br/><h6>type:</h6>",
            table:{
                type:{
                    summary:"string"
                }
            }
        },
        pagination:{
            description:"pagination configuration<h6>type:</h6>",
            table:{
                type:{
                    summary:"boolean | PaginationProps"
                },
                defaultValue:{summary:"false"}
            }
        },
        header:{
            description:"The header component of list<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        footer:{
            description:"The footer component of list<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        loadMore:{
            description:"The loadMore component of list to show part of list<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        rowKey:{
            description:"Item's unique key, could be a string or function that returns a string<h6>type:</h6>",
            table:{
                type:{
                    summary:"string | Function(record): string"
                },
                defaultValue:{summary:"key"}
            }
        },
        dataSource:{
            description:"DataSource for list",
            table:{
                type:{
                    summary:"any[]"
                } 
            }
        },
        itemLayout:{
            description:"The layout of list",
            table:{
                type:{
                    summary:"horizontal | vertical"
                } ,
                defaultValue:{summary:"vertical"}
            }
        },
        renderItem:{
            description:"Function to render list item<h6>type:</h6>",
            table:{
                type:{
                    summary:"(item: any, index: number) => React.ReactNode"
                }
            }
        },
        avatar:{
            name:"avatar (Only in ListItem.Meta)",
            description:"The loadMore component of list item<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        title:{
            name:"title (Only in ListItem.Meta)",
            description:"The title component of list of list item<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        description:{
            name:"description (Only in ListItem.Meta)",
            description:"The description component of list item<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
        actions:{
            name:"actions (Only in ListItem)",
            description:"The actions component of list item<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode[]"
                }
            }
        },
        extra:{
            name:"extra (Only in ListItem)",
            description:"The extra component of list item<h6>type:</h6>",
            table:{
                type:{
                    summary:"ReactNode"
                }
            }
        },
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
    for (let i = 0; i < 6; i++) {
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
                <b>Rong UI</b> footer part
          </div>
        }
        pagination={{pageSize:3}}
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

