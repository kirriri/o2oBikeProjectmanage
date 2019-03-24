import React, { Component } from 'react'
import { Card, Button, Radio } from 'antd'
import './index.less'

const style= {
    marginTop: '35px'
}

class Buttons extends Component {
    state = {
        loading: true,
        size: 'default'
    }

    handleClick = () => {
        this.setState({
            loading: false
        })
    }

    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        return (
            <div className="home-wrap">
                {/* <div className="home">欢迎来到ararin后台管理系统</div> */}
                <Card title="基础按钮" style={style}>
                    <Button type="primary">按钮一</Button>
                    <Button>按钮二</Button>
                    <Button type="dashed">按钮三</Button>
                    <Button disabled>按钮四</Button>
                    <Button type="danger">按钮四</Button>
                </Card>
                <Card title="图形按钮" style={style}>
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button icon="plus" type="primary">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button 
                        type="primary" icon="search" shape="circle" loading={this.state.loading}></Button>
                    <Button icon="delete" type="dashed" onClick={this.handleClick}>删除</Button>
                    <Button icon="download" type="danger">下载</Button>
                </Card>
                <Card title="按钮组" style={style}>
                    <Button.Group>
                        <Button type="primary">后退</Button>
                        <Button type="primary">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮组" style={style}>
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>按钮一</Button>
                    <Button size={this.state.size}>按钮二</Button>
                    <Button type="dashed" size={this.state.size}>按钮三</Button>
                    <Button disabled size={this.state.size}>按钮四</Button>
                    <Button type="danger" size={this.state.size}>按钮四</Button>
                </Card>
            </div>
        )
    }
}

export default Buttons