import React, { Component } from 'react'
import { Card, Spin, Alert, Row, Col, Modal } from 'antd';


class Gallery extends Component {

    state = {
        visible: false
    }

    cardHandleClick = (imgSrc) => {
        this.setState({
            visible: true,
            currentImg: `/gallery/${imgSrc}`
        })
    }
    handleImgClick = () => {
        this.setState({
            visible: false
        })
    }
    onCancel = () => {
        this.setState({
            visible: false
        })
    }
    onOk = () => {
        this.setState({
            visible: false
        })
    }

    render() {
        const images = [
            ['1.png', '2.png', '3.png', '4.png', '5.png', '3.png'],
            ['6.png', '7.png', '8.png', '9.png', '10.png','3.png'],
            ['1.png', '2.png', '3.png', '4.png', '5.png', '3.png'],
            ['1.png', '2.png', '3.png', '4.png', '5.png', '3.png'],
            ['1.png', '2.png', '3.png', '4.png', '5.png', '3.png'],
            ['1.png', '2.png', '3.png', '4.png', '5.png', '3.png']
        ]
        const imgList = images.map((list) => list.map((item) => 
            <Card
                style={{marginBottom: '10px'}}
                key={item}
                cover={<img src={'/gallery/'+ item}/>}
                onClick={() => this.cardHandleClick(item)}
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
                    imgList.map((item, index) => 
                        <Row key={index} gutter={8}>
                            {
                                item.map((item, index) =>
                                <Col key={index} span={4}>
                                    {item}
                                </Col>
                                )
                            }
                        </Row>
                    )
                }
                <Modal
                    width={600}
                    title="图片画廊"
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    onOk={this.onOk}
                    okText="确认"
                    cancelText="取消"
                    footer={null}
                >
                    <img style={{width: '100%'}} src={this.state.currentImg} alt='' onClick={this.handleImgClick}/>
                </Modal>
            </div>
        )
    }
}

export default Gallery