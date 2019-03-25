import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd';
import './index.less'

class Modals extends Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
        showModal4: false
    }
    
    handleOpenClick = (type) => {
        this.setState({
            [type] : true
        })
    }
    
    render() {

        return (
            <div className="home-wrap">
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleOpenClick('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() => this.handleOpenClick('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() => this.handleOpenClick('showModal3')}>顶部20px弹窗</Button>
                    <Button type="primary" onClick={() => this.handleOpenClick('showModal4')}>水平垂直居中</Button>
                </Card>
                <Modal
                  title="react"
                  visible={this.state.showModal1}
                  onCancel={() => {
                    this.setState({
                        showModal1: false
                    })
                  }}
                >
                    <p>测试用例1</p>
                </Modal>
                <Modal
                  title="react"
                  visible={this.state.showModal2}
                  onCancel={() => {
                    this.setState({
                        showModal2: false
                    })
                  }}
                >
                    <p>测试用例2</p>
                </Modal>
            </div>
        )
    }
}

export default Modals