import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox, Card, Row, Col, Radio, InputNumber, Select, DatePicker } from 'antd';
import RadioGroup from 'antd/lib/radio/group';
import moment from 'moment'
const FormItem = Form.Item
const Option = Select.Option
const TextArea = Input.TextArea
const FormItemLayout = {
    labelCol: {
        xs: 24,
        sm: 4
    },
    wrapperCol: {
        xs: 24,
        sm: 20
    }
}

class NoWrapRegister extends Component {


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="home-wrap">
                <Card className="card-wrap">
                    <Form layout="horizontal">
                        <FormItem label="用户名" {...FormItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    rules: [
                                        { 
                                            required: true, 
                                            message: '请输入用户名' 
                                        }
                                    ],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )
                            }
                        </FormItem>
                        <FormItem label="密码" {...FormItemLayout}>
                            {
                                getFieldDecorator('password', {
                                    rules: [
                                        { 
                                            initialValue: '',
                                            required: true, 
                                            message: '请输入密码' 
                                        }
                                    ],
                                })(
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                )
                            }
                        </FormItem>
                        <FormItem label="性别" {...FormItemLayout}>
                            {
                                getFieldDecorator('gender', {
                                    initialValue: '1'
                                })(
                                    <RadioGroup>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </RadioGroup>
                                )
                            }
                        </FormItem>
                        <FormItem label="年龄" {...FormItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: '',
                                })(
                                    <InputNumber
                                        min={0}
                                     />
                                )
                            }
                        </FormItem>
                        <FormItem label="选择框测试用例" {...FormItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: '2'
                                })(
                                    <Select mode="multiple">
                                        <Option value="1">测试用例1</Option>
                                        <Option value="2">测试用例2</Option>
                                        <Option value="3">测试用例3</Option>
                                    </Select>
                                )
                            }
                        </FormItem>
                        <FormItem label="生日" {...FormItemLayout}>
                            {  
                                getFieldDecorator('brithday', {
                                    initialValue: moment('2018-08-08')
                                })(
                                    <DatePicker/>
                                )
                            }
                        </FormItem>
                        <FormItem label="联系地址" {...FormItemLayout}>
                            {
                                getFieldDecorator('address', {

                                })(
                                    <TextArea
                                        autosize = {
                                            {
                                                minRows: 4,
                                                maxRows: 6
                                            }
                                        }
                                    />
                                )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
const Register = Form.create({ name: 'normal_login' })(NoWrapRegister);
export default Register