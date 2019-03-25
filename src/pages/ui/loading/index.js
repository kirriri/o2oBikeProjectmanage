import React, { Component } from 'react'
import { Card, Spin, Alert } from 'antd';


class Loading extends Component {
    render() {
        return (
            <div className="home-wrap">
                <Card title="卡片" className="card-wrap">
                    <Spin></Spin>
                </Card>
                <Card title="警告弹窗" className="card-wrap">
                    <Alert 
                        showIcon 
                        type="success"
                        message="警告弹窗示例"
                        description="测试警告弹窗内容">
                        <Spin></Spin>
                    </Alert>
                </Card>
            </div>
        )
    }
}

export default Loading