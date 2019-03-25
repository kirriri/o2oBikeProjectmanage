import React, { Component } from 'react'
import { Card, Button, message } from 'antd';

class Messages extends Component {
    handleClick = (type) => {
        message[type]("调用message成功")
    }
    
    render() {

        return (
            <div className="home-wrap">
                <Card className="card-wrap">
                    <Button onClick={() => this.handleClick('success')}>success</Button>
                    <Button onClick={() => this.handleClick('info')}>info</Button>
                    <Button onClick={() => this.handleClick('error')}>error</Button>
                    <Button onClick={() => this.handleClick('warning')}>warning</Button>
                </Card>
            </div>
        )
    }
}

export default Messages