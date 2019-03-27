import React, { Component } from 'react'
import { Card, Spin, Alert, Carousel } from 'antd';
import './index.less'

class Carousels extends Component {
    render() {
        return (
            <div className="home-wrap">
                <Carousel
                    className="card-wrap"
                    className="carousel_box" 
                    autoplay
                    dots
                >
                    <Card ><img src="/gallery/1.png" alt="" /></Card>
                    <Card><img src="/gallery/2.png" alt="" /></Card>
                    <Card><img src="/gallery/3.png" alt="" /></Card>
                    <Card><img src="/gallery/4.png" alt="" /></Card>
                    <Card><img src="/gallery/5.png" alt="" /></Card>
                </Carousel>
            </div>
        )
    }
}

export default Carousels