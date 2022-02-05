import React from 'react'
import './Home.css'
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div className="container">
                <div className="main">
                    <header>
                        <img src={'./collection/logo1.png'} alt="not found" />
                        <h4>Unit Converter</h4>
                    </header>
                    <div className="icons">
                        <Link className="icon" to='/Temperature'>
                            <i class="fa fa-thermometer-empty fa-2x" aria-hidden="true"></i><span>Temperature</span>
                        </Link>
                        <Link className="icon" to='/Speed'>
                            <i class="fa fa-fighter-jet fa-2x" aria-hidden="true"></i>
                            <span>Speed</span>
                        </Link>
                        <Link className="icon" to='/Mass'>
                            <i class="fa fa-balance-scale fa-2x" aria-hidden="true"></i>
                            <span>Mass</span>
                        </Link>
                        <Link className="icon" to='/Number'>
                            <i class="fa fa-list-ol fa-2x" aria-hidden="true"></i>
                            <span>Number</span>
                        </Link>
                        <Link className="icon" to='Volume'>
                            <i class="fa fa-coffee fa-2x" aria-hidden="true"></i>
                            <span>Volume</span>
                        </Link>
                        <Link className="icon" to='/Area'>
                            <i class="fa fa-adjust fa-2x" aria-hidden="true"></i>
                            <span>Area</span>
                        </Link>
                        <Link className="icon" to='/Length'>
                            <i class="fa fa-pause fa-2x" aria-hidden="true"></i>
                            <span>Length</span>
                        </Link>
                        <Link className="icon" to='/Time'>
                            <i class="fas fa-clock fa-2x" aria-hidden="true"></i>
                            <span>Time</span>
                        </Link>
                        <Link className="icon" to='/Currency'>
                            <i class="fab fa-btc fa-2x" aria-hidden="true"></i>
                            <span>Currency</span>
                        </Link>
                    </div>

                </div>

            </div>

        </>
    )
}

export default Home
