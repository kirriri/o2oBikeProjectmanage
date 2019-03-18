import React, { Component } from 'react'
import { HashRouter, Router, Switch } from 'react-router-dom'
import App from './App'
import login from './pages/login'

class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Router path="/login" component={}/>
                    <Router path="admin" component={}/>
                </App>
            </HashRouter>
        )
    }
}