import React, { Component } from 'react'
import './index.less'
import { Card, Button, notification } from 'antd';

class Notification extends Component {
    handleClickNotification = (type, message) => {
        console.log(type)
        console.log(message)
        notification[type]({
            message: message ? message : '调用了默认的notification',
            description: '调用notification'
        })
    }
    
    render() {
        return(
            <div className="home-wrap">
                <Card className="card-wrap">
                    <Button type="primary" onClick={() => this.handleClickNotification('success', '传入第二个参数')}>success</Button>
                    <Button type="primary" onClick={() => this.handleClickNotification('info')}>info</Button>
                    <Button type="primary" onClick={() => this.handleClickNotification('warning')}>warning</Button>
                    <Button type="primary" onClick={() => this.handleClickNotification('error')}>error</Button>
                </Card>
            </div>
        )
    }
}

export default Notification