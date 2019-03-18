import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Util from '../../utils/utils'
import './index.less'
import axios from '../../axios'

class Header extends Component {
    state = {}
    getWeatherAPIDate() {
        axios.jsonp({
            url: 'https://restapi.amap.com/v3/weather/weatherInfo?city=500103&key=a726fc60f7db1bfc0df3b74ab50d1742'
        }).then((res) => {
            if(res.status == '1') {
                this.setState({
                    city: res.lives[0].city,
                    weather: res.lives[0].weather
                })
                console.log(res.lives)
            }
        })
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
        this.getWeatherAPIDate()
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
                        <span className="wheather-detail">{this.state.city} {this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Header