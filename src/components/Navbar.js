import React from 'react';
import {Link} from 'react-router-dom';
const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container">
            <Link className="navbar-brand" href="#">FoodParadise</Link>
        </div>
    </nav>
)

export default Navbar;