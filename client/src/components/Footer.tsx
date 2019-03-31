import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
          <div className="footer">
              <div className="social-medias">
                <i className="fab fa-facebook-square fa-3x"></i>
                <i className="fab fa-instagram fa-3x"></i>
                <i className="fab fa-twitter-square fa-3x"></i>
                <i className="fab fa-google-plus-square fa-3x"></i>
              </div>

              <div className="copyright">
                <h1>Developed By KA LONG LEE &copy; All Right Reserved</h1>
              </div>
          </div>
        )
    }
}

export default Footer;