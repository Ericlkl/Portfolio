import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav>
            <div className="navlinks">
                <h3>KA LONG LEE</h3>
                <h3>Awards</h3>
                <h3>Projects</h3>
                <h3>Contact</h3>
            </div>

            <div className="social-links">
                <i className="fab fa-2x fa-instagram"></i>
                <i className="fab fa-2x fa-facebook"></i>
                <i className="fab fa-2x fa-github"></i>
            </div>
        </nav>
    )
  }
}
