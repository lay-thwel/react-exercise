import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomeBanner extends Component {
    render() {
        return (
            <div>
                <section id="hero" className="d-flex justify-content-center align-items-center">
                    <div className="container position-relative">
                        <h1>Learning Today,Leading Tomorrow</h1>
                        <h2>We are team of talanted designers making websites with Bootstrap</h2>
                        <Link to="/" className="btn-get-started">Get Started</Link>
                    </div>
                </section>
            </div>
        )
    }
}
