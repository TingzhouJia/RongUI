import React from 'react'
import { Card, Avatar } from '../../components'
import { Meta } from '@storybook/react/types-6-0';
import { themeIt } from './utils/withTheme'
import { SettingOutlined, EditOutlined, EllipsisOutlined, ControlFilled } from '@ant-design/icons';

export default {
    title: 'Data Display / Card',
    component: Card as any,
    decorators: [themeIt],
    parameters: {
        componentSubtitle: "Card container",
        docs: {
            description: {
                component: "<h3>When To Use?</h3>A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes."
            }
        }
    },
    argTypes: {
        title: {
            description: "The title of card<h6>type</h6>",
            table: {
                type: {
                    summary: "ReactNode"
                }
            },
            control:{}
        },
        extra: {
            description: "The extra node of card in header<h6>type</h6>",
            table: {
                type: {
                    summary: "ReactNode"
                }
            }
        },
        cover: {
            description: "The cover image of card<h6>type</h6>",
            table: {
                type: {
                    summary: "ReactNode"
                }
            }
        },
        size: {
            description: "The size of card<h6>type</h6>",
            table: {
                type: {
                    summary: '"small" | "default"'
                },
                defaultValue: {
                    summary: "default"
                }
            }
        },
        headStyle: {
            description: "The head style object of container<br/><h6>type:</h6>",
            table: {
                type: {
                    summary: "CSSProperties"
                }
            }
        },
        bodyStyle: {
            description: "The body style object of container<br/><h6>type:</h6>",
            table: {
                type: {
                    summary: "CSSProperties"
                }
            }
        },
        bordered: {
            description: "Whether show border of card or not<h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue: {
                    summary: "true"
                }
            }
        },
        hoverable: {
            description: "Zoom in card when hover<h6>type:</h6>",
            table: {
                type: {
                    summary: "boolean"
                },
                defaultValue: {
                    summary: "false"
                }
            }
        },
        style: {
            description: "The  style object of container<br/><h6>type:</h6>",
            table: {
                type: {
                    summary: "CSSProperties"
                }
            }
        },
        className: {
            description: "The className object of container<br/><h6>type:</h6>",
            table: {
                type: {
                    summary: "string"
                }
            }
        },
        actions: {
            description: "A list of action bar for card<h6>type:</h6>",
            table: {
                type: {
                    summary: "ReactNode"
                }
            }
        },
        avatar: {
            name: "avatar (Only for Meta content )",
            table: {
                type: {
                    summary: "ReactNode"
                },
            },
            description: "An avatar  in Card.Meta<h6>type:</h6>"
        },
        metaTitle: {
            name: "title (For Meta content )",
            table: {
                type: {
                    summary: "ReactNode"
                },
            },
            description: "The title in Card.Meta<h6>type:</h6>"
        },
        description: {
            name: "description (The description for Meta content)",
            description:"Detail content for Meta<h6>type:</h6>",
            table: {
                type: {
                    summary: "ReactNode"
                },
            },
        }
    },

} as Meta

export const Basic = () => (
    <Card title="title">content</Card>
)

export const Extra = () => {
    return (
        <Card title="title" extra={<SettingOutlined />}>content</Card>
    )
}

export const CardMeta = () => {
    return (
        <Card
            style={{ width: '300px' }}
            actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1533882233514-8086852d08da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />}>
            <Card.Meta
                title="Europe Street beat"
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                description="www.instagram.com" />
        </Card>
    )
}

export const Borderless = () => (
    <Card title="title" bordered={false} >content</Card>
)