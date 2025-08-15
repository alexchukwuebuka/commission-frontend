import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
      <footer className='footer'>
        <div className="trusted-patners-section">
            <h2 data-aos="fade-up">quick <span className="highlight">links</span></h2>
            {/* <div className="trusted-patners-img-container">
                <img src="/a-xs-light.png" alt="" className="trusted-patener-icon" data-aos="fade-up"/>
                <img src="/b-xs-light.png" alt="" className="trusted-patener-icon" data-aos="fade-up"/>
                <img src="/c-xs-light.png" alt="" className="trusted-patener-icon" data-aos="fade-up"/>
                <img src="/d-xs-light.png" alt="" className="trusted-patener-icon" data-aos="fade-up"/>
                <img src="/e-xs-light.png" alt="" className="trusted-patener-icon" data-aos="fade-up"/>
            </div> */}
        </div>
        <div className="quicklinks-container">
            <div className="quicklink-card-container">
                
                <div className="quicklink-card" data-aos="fade-up">
                    <Link to='/'>home</Link>
                      <Link to="/">about</Link>
                      <Link to="/">administration</Link>
                </div>
                <div className="quicklink-card" data-aos="fade-up">
                      <Link to="/">contact</Link>
                      <Link to="/">services</Link>
                    <Link to="/">our team</Link>
                </div>
                <div className="quicklink-card" data-aos="fade-up">
                      <Link to="/">news</Link>
                      <Link to="/">local governments</Link>
                    <Link to="/">development centers</Link>
                </div>
                <div className="quicklink-card" data-aos="fade-up">
                      <Link to="/">gallery</Link>
                      <Link to="/">incoporation certificate</Link>
                    <Link to="/">privacy policy</Link>
                </div>

            </div>
            <div className="copyright-container">
                <div className="copyright-txt">
                    <p> copyright &copy; 2025</p>
                </div>
                <div className="policy-txt">
                    <Link to="/">terms and condition</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer