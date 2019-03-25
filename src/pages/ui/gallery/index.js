import React, { Component } from 'react'
import { Card, Spin, Alert, Row } from 'antd';


class Gallery extends Component {

    render() {
        const images = [
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png'],
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['1.png', '2.png', '3.png', '4.png', '5.png'],
            ['1.png', '2.png', '3.png', '4.png', '5.png']
        ]
        const imgList = images.map((list) => list.map((item) => 
            <Card
                cover={<img src={'/gallery'+ item}/>}
            >
                <Card.Meta
                    title="react admin"
                    description="画廊图片"
                />
            </Card>
        ))
        return (
            <div className="home-wrap">
                {
                    this.imgList.map((item) => 
                        <Row>
                            {item}
                        </Row>
                    )
                }
            </div>
        )
    }
}

export default Gallery