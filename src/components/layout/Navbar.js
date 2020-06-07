import React from "react";
import  { Link , NavLink } from "react-router-dom"; //Link, used to not reload page when click on link change a tag to link navLink used for active
//eg: <Link class="nav-link" to="/">Home</Link>
//eg:
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
                <a className="navbar-brand" href="#">React user</a>
                {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/Contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/About">About</NavLink>
                        </li>                        
                        <li className="nav-item">
                            <a className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link className="btn btn-outline-light" to="/user/add">ADD USER</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;