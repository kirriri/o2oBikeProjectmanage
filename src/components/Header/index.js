import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Util from '../../utils/utils'
import './index.less'

class Header extends Component {
    state = {

    }
    getWeatherAPIDate() {
        
    }
    
    componentWillMount() {
        this.setState({
            uerName: 'ararin'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000)
    }
    
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎</span>
                        <a>{this.state.uerName}</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span="4" className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span="20" className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="wheather-detail">晴转多云</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header