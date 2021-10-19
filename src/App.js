import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import {useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Fake from './components/Fake'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Row,
    Col,
    Jumbotron,
    Button
} from 'reactstrap';

const App = () => {
    return (
        <Router>
    <div className='container'>
        <Header />


        <Route path='/Fake' component={Fake} />
       <Footer />
    </div>
    </Router>
    )
}

export default App;
