import React, { Component } from 'react'
import { Row, Col } from 'antd'
import 'antd/dist/antd.css'
import './index.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
import Container from './components/Container'
import Home from './pages/home'

class Admin extends Component {
    render() {
        return (
            <Row>
                <Col span={4} className="nav-left-block">
                    <NavLeft></NavLeft>
                </Col>
                <Col span={20} className="content-right-block">
                    <Header>
                    </Header>
                        <Row>
                            <Col span={24}>
                                {this.props.children}
                            </Col>
                        </Row>
                    <Footer>
                    </Footer>
                </Col>
            </Row>
        )
    }
}

export default Admin