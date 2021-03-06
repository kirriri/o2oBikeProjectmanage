import React , { Component, Fragment } from 'react'
import { Menu } from 'antd'
import { NavLink } from "react-router-dom";
import menuList from '../../config/menuConfig'
import './index.less'

const SubMenu = Menu.SubMenu

class NavLeft extends Component {
    componentWillMount () {
      const menuTreeNode = this.renderMenu(menuList)
      this.setState({
          menuTreeNode
      })
    }
    //菜单渲染
    renderMenu = (data) => {
        return data.map( item => {
            if(item.children) {
                return (
                    <SubMenu title={item.title} key={item.key}>
                        { this.renderMenu(item.children) }
                    </SubMenu>
                )
            }
            return (
                <Menu.Item title={item.title} key={item.key}>
                    <NavLink key={item.title} to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }

    render () {
        return (
            <Fragment>
                <div className="logo">
                    <img src="/assets/logo.svg" alt=""/>
                    <h1>ararin项目后台管理</h1>
                </div>
                <Menu
                    theme='dark'
                >
                { this.state.menuTreeNode }
                </Menu>
            </Fragment>
        )
    }
}

export default NavLeft