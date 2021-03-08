import { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import OrdersManagement from './containers/OrdersManagement';
import { Container } from '@material-ui/core';

export default class Routes extends Component<{}, {}> {
    render() {
        return (
            <Container className="Main_Container">                     
                <Switch>
                    <Route exact path={["/orders", "/"]} component={OrdersManagement} />
                </Switch>
            </Container>
        );
    }
}