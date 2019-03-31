import React, { Component } from 'react'
import profile_img from '../assets/img/hero2.jpg';

export default class AboutMe extends Component {
  render() {
    return (
        <section className="aboutme"> 
          <div className="aboutme__content">
            <h1 className="section-title">About Me</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Pariatur harum aliquam rem cumque, animi atque repellat incidunt 
              nesciunt voluptatum soluta unde, quod at doloribus repellendus. 
              Maxime aliquid sed ex, iure, perferendis, 
              eius quasi delectus nihil itaque quo repudiandae!
              Cum ab doloribus qui sit ratione ipsam ducimus quam at 
              praesentium vel?
            </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Pariatur harum aliquam rem cumque, animi atque repellat incidunt 
              nesciunt voluptatum soluta unde, quod at doloribus repellendus. 
              Maxime aliquid sed ex, iure, perferendis, 
              eius quasi delectus nihil itaque quo repudiandae!
              Cum ab doloribus qui sit ratione ipsam ducimus quam at 
              praesentium vel?
            </p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Pariatur harum aliquam rem cumque, animi atque repellat incidunt 
              nesciunt voluptatum soluta unde, quod at doloribus repellendus. 
              Maxime aliquid sed ex, iure, perferendis, 
              eius quasi delectus nihil itaque quo repudiandae!
              Cum ab doloribus qui sit ratione ipsam ducimus quam at 
              praesentium vel?
            </p>
          </div>
          <div className="aboutme__profile">
            <img className="aboutme__profile_profile-img" src={profile_img} alt="eric_profile"/>
            <div className="aboutme__profile__award">
              <h3>Award & Metions</h3>
              <p>- Griffith College High Destination</p>
              <p>- Griffith College High Destination</p>
              <p>- Griffith College High Destination</p>
              <p>- Griffith College High Destination</p>
            </div>
            
            <div className="aboutme__profile__exp">
              <h3>Experience</h3>
              <p>- Working in CSIRO</p>
              <p>- Working in QUT Geo App Team</p>
            </div>
          </div>
        </section>
    )
  }
}
