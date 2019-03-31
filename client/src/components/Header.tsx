import React, { Component } from 'react'
import profile_img from '../assets/img/profile_small.jpg';

export default class Header extends Component {
  state = {
    jobIndex: 0
  };

  componentDidMount(){
    setInterval( () => {
      this.setState({ 
        jobIndex: this.state.jobIndex === 2 ? 0 : this.state.jobIndex + 1
      });
    },4000);
  }

  render() {
    const jobTitle = [
      <h3 className="se-text-animation">Software Engineer</h3>,
      <h3 className="fullstack-text-animation">Full Stack Web Developer</h3>,
      <h3 className="mobile-text-animation">Mobile App Developer</h3>
    ];

    return (
      <section className="header">

          <div className="header__description">
              <h1 className="header__description_greeting">Hello World!</h1>
                <h3 className="header__description_fullname">I'm KA LONG LEE</h3>
                { jobTitle[this.state.jobIndex] }
              <h3>In Hong Kong & Brisbane</h3>
          </div>

          <div className="header__profile">
            <img src={profile_img} alt="eric_profile"/>
          </div>
      </section>
    )
  }
}
