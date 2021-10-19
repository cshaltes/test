import PropTypes from 'prop-types'
import React from 'react';
import { Button } from 'reactstrap';
import {Link } from "react-router-dom";
import Fake from './Fake'

const Header = ({ title }) => {
    return (
        <header className= 'header'>
            <h1 >{title}</h1>
            <Button color="success" onClick={() => console.log('click')} >Green</Button>{' '}
        </header>
    )
}

Header.defaultProps = {
    title: 'Hello',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
/* CSS in JS
style={headingStyle}
const headingStyle = {
    color: 'blueviolet', 
    backgroundColor: 'green'
}
*/

export default Header
