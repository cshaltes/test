import React, { Component } from 'react';
import './App.css';
import RouteHome from './components/RouteHome';
import TopNav from './components/nav';
import Container from "reactstrap/es/Container";

class App extends Component {
    render() {
        return (
                <div className="App">
                    <Container>
                        <div className={"mt-lg-4 mb-lg-4"}>
                            <TopNav/>
                        </div>
                        <RouteHome/>
                    </Container>

                </div>
        );
    }
}

export default App;
