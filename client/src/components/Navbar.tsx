import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav>
            <div className="navlinks">
                <h3>Eric</h3>
                <h3>Awards</h3>
                <h3>Projects</h3>
                <h3>Contact</h3>
            </div>

            <div className="social-links">
              <a href="https://www.instagram.com/ericlkl3333/"><i className="fab fa-2x fa-instagram"></i></a>
              <a href="https://www.facebook.com/long.ka.980"><i className="fab fa-2x fa-facebook"></i></a>
              <a href="https://github.com/Ericlkl"><i className="fab fa-2x fa-github"></i></a>
            </div>
        </nav>
    )
  }
}
