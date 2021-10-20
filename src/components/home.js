import React from 'react'
import Jumbotron from "reactstrap/es/Jumbotron"

const Home = () => {
    return (
        <div>
             <Jumbotron>
                            <div  className="jumbotron-text-container">
                                <h1 className="display-4 font-weight-bold text-white">HOME!</h1>
                                <hr className="my-2" />
                                <p className="font-weight-bold h4 text-white"></p>
                            </div>
                        </Jumbotron> 
        </div>
    )
}

export default Home
