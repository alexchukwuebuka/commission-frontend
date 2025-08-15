import {TbChartDots2} from 'react-icons/tb'
import {TfiPieChart} from 'react-icons/tfi'
import {BsBarChartLine} from 'react-icons/bs'
import {BiNetworkChart} from 'react-icons/bi'
import {GiChart} from 'react-icons/gi'
import { MdOutlineAddchart } from 'react-icons/md'
import './news.css'
import {Link } from 'react-router-dom'
const News = () => {
  return (
    <section className='service-section'>
          <div className="why-choose-us-text-container">
            <div className="header" data-aos="fade-up">
                <span className="header-line"></span>
                <h2>Commission Updates & Announcements</h2>
            </div>
            <h1 data-aos="fade-up">Stay informed with the latest developments from the Government Service Commission.</h1>
            <p data-aos="fade-up">Our News Section keeps you up to date with recent activities, official statements, and initiatives of the Government Service Commission. From policy updates and service improvements to key community projects, we ensure that citizens and stakeholders receive timely, accurate, and relevant information. Check back regularly to stay connected with our work and progress.</p>
        </div>
          <div className="service-card-container">
              <div className="gold-card" data-aos="fade-up">
              <img src="/abuja-with-sg.jpg" alt="" />
              <div className="gold-card-text">
                  <small>09/07/17</small>
                  <h3>Commission Launches Digital Records Initiative</h3>
                  <p>The Commission has introduced a new digital system to streamline employee data management, improve record accuracy, and enhance service delivery across all departments...</p>
                  <Link to="/">read more</Link>
              </div>
              </div>
              <div className="gold-card" data-aos="fade-up">
              <img src="/rebasing-coverpicture-052024.jpg" alt="" />
              <div className="gold-card-text">
                  <small>01/09/16</small>
                  <h3>Training Programme for Local Government Staff Begins</h3>
                  <p>A capacity-building workshop is underway to equip local government employees with modern administrative skills for more efficient public service delivery...</p>
                  <Link to="/">read more</Link>
              </div>
              </div>
              <div className="gold-card" data-aos="fade-up">
              <img src="/launch-picture-with-ministers.jpg" alt="" />
              <div className="gold-card-text">
                  <small>03/03/17</small>
                  <h3>Community Outreach on Public Service Awareness</h3>
                  <p>
                    Officials have commenced a series of community forums aimed at educating citizens about available public services and how to access them effectively...</p>
                      <Link to="/">read more</Link>
              </div>
              </div>
          </div>
    </section>
  )
}

export default News