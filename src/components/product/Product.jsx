import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
      <section className='service-section'>
          <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>Our Core Services</h2>
            </div>
            <h1 data-aos="fade-up">Building capacity, sharing knowledge, and preserving accurate records for effective governance.</h1>
            <p data-aos="fade-up">The Government Service Commission delivers a range of essential services designed to strengthen public administration and promote professional excellence. We provide comprehensive staff training programmes to enhance skills, host seminars and workshops for knowledge sharing, and maintain accurate records of all commission employees as well as personnel in local government areas and development centres. Through these services, we ensure efficient governance, improved service delivery, and sustainable community growth.</p>
        </div>
          <div className="service-card-container">
              <div className="gold-card" data-aos="fade-up">
              <img src="/seminar1.jpg" alt="" />
              <div className="gold-card-text">
                  <small>09/07/17</small>
                  <h3>Commission Launches Digital Records Initiative</h3>
                  <p>The Commission has introduced a new digital system to streamline employee data management, improve record accuracy, and enhance service delivery across all departments...</p>
                  <Link to="/">read more</Link>
              </div>
        </div>
        <div className="gold-card" data-aos="fade-up">
              <img src="/seminar2.jpg" alt="" />
              <div className="gold-card-text">
                  <small>09/07/17</small>
                  <h3>Commission Launches Digital Records Initiative</h3>
                  <p>The Commission has introduced a new digital system to streamline employee data management, improve record accuracy, and enhance service delivery across all departments...</p>
                  <Link to="/">read more</Link>
              </div>
        </div>
        <div className="gold-card" data-aos="fade-up">
              <img src="/seminar3.jpg" alt="" />
              <div className="gold-card-text">
                  <small>09/07/17</small>
                  <h3>Commission Launches Digital Records Initiative</h3>
                  <p>The Commission has introduced a new digital system to streamline employee data management, improve record accuracy, and enhance service delivery across all departments...</p>
                  <Link to="/">read more</Link>
              </div>
              </div>
          </div>
    </section>
  )
}

export default Product
