import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './app'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modal'
import NoMatch from './pages/noMatch'
import Loading from './pages/ui/loading';
import Notification from './pages/ui/notification'
import Messages from './pages/ui/messages'
import Tab from './pages/ui/Table'
import Gallery from './pages/ui/gallery'
import Home from './pages/home';

class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={ () => 
                        <Admin>
                            <Switch>
                                <Route path="/admin/home" component={Home}/>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/ui/modals" component={Modals}/>
                                <Route path="/admin/ui/loading" component={Loading}/>
                                <Route path="/admin/ui/notification" component={Notification}/>
                                <Route path="/admin/ui/messages" component={Messages}/>
                                <Route path="/admin/ui/tabs" component={Tab}/>
                                <Route path="/admin/ui/gallery" component={Gallery}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </Admin>
                    } />
                </App>
            </HashRouter>
        )
    }
}

export default IRouter