import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <header id="header" className="fixed-top">
                    <div className="container d-flex align-items-center">
                        <h1 className="logo mr-auto"><Link to="/">Mentor</Link></h1>
                        <nav className="nav-menu d-none d-lg-block">
                            <ul>
                            <li className="active"><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/">Events</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }
}
