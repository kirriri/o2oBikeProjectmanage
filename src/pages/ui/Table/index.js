import React, { Component } from 'react'
import './index.less'
import { Card, Tabs, message, Icon } from 'antd';
const TabPane = Tabs.TabPane

class Tab extends Component {
    componentWillMount() {
        this.newTabIndex = 0;
        const tabs = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3'
            }
        ]
        this.setState({
            activeKey: tabs[1].key,
            panes: tabs
        })
    }


    handleCallback = (key) => {
        message.info('点击了'+ key)
        this.setState({
            activeKey: key
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
      }
    
    add = () => {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: `newTab${this.newTabIndex}`, content: 'Content of new Tab', key: activeKey });
    this.setState({ panes, activeKey });
    }
    
    remove = (targetKey) => {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
        if (pane.key === targetKey) {
        lastIndex = i - 1;
        }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (panes.length && activeKey === targetKey) {
        if (lastIndex >= 0) {
        activeKey = panes[lastIndex].key;
        } else {
        activeKey = panes[0].key;
        }
    }
    this.setState({ panes, activeKey });
    }
    
    render() {
        return (
            <div className="home-wrap">
                <Card className="card-wrap">
                    <Tabs 
                        activeKey={this.state.activeKey}
                        onChange={this.handleCallback}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panes) => {
                                return <TabPane
                                    tab={panes.title}
                                    key={panes.key}
                                    closable={panes.closable}
                                >
                                {panes.content}
                                </TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}

export default Tab