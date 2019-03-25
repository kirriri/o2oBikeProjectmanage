import React, { Component } from 'react'
import './index.less'
import { Card, Tabs } from 'antd';
const TabPane = Tabs.TabPane

class Tab extends Component {y
    callback = () => {

    }
    
    render() {
        return (
            <div className="home-wrap">
                <Card className="card-wrap">
                    <Tabs defaultActiveKey="2" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">content of tabpane 1</TabPane>
                        <TabPane tab="Tab 2" key="2">content of tabpane 2</TabPane>
                        <TabPane tab="Tab 3" key="3">content of tabpane 3</TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}

export default Tab