import React from "react";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./home";
import Test from "./test";

export default class RouteHome extends React.Component {
    render() {
        return(
            <BrowserRouter>
            <Switch>
                <Route exact path ="/" component={Home}/>
                <Route exact path ="/test" component={Test}/>
            </Switch>
            </BrowserRouter>
        );
    }
}