import React from 'react'
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css'; import 'bootstrap/js/dist/dropdown';

const NavBar = () => {

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src='news.png' style={{ height: "auto", width: "30px" }} alt='Logo'></img>
                    <Link className="navbar-brand" to="/general"> NewsFetcher</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                            </li>


                            <li>

                                <div className="dropdown">
                                    <Link className="nav-link dropdown-toggle" data-toggle="dropdown" to="/#" role="button" aria-haspopup="true" aria-expanded="false">Category</Link>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link className="dropdown-item" to="/business">Business</Link>
                                        <Link className="dropdown-item" to="/entertainment">Entertainment</Link>
                                        <Link className="dropdown-item" to="/general">General</Link>
                                        <Link className="dropdown-item" to="/health">Health</Link>
                                        <Link className="dropdown-item" to="/science">Science</Link>
                                        <Link className="dropdown-item" to="/sports">Sports</Link>
                                        <Link className="dropdown-item" to="/technology">Technology</Link>

                                    </div>



                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/help">Help</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )

}

export default NavBar
