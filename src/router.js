import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import App from './app'
import Login from './pages/login'
import Admin from './admin'
import Buttons from './pages/ui/buttons';
import Modals from './pages/ui/modal'
import NoMatch from './pages/noMatch'

class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    <Route path="/admin" render={ () => 
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons}/>
                                <Route path="/admin/ui/modals" component={Modals}/>
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