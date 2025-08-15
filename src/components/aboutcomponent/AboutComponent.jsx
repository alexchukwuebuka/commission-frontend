import React from 'react'
import './aboutcomponent.css'
const AboutComponent = () => {
  return (
      <section className='aboutComponentSection' id='about'>
          <div className="landpage-text-container" 
            >
                <h1
                    initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.2}}
                >
                   
                    About us
                </h1>
                <p
                    initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.4}}
                >
                    The Government Service Commission is dedicated to ensuring transparency, efficiency, and fairness in public service administration. We oversee recruitment, staff welfare, and capacity development across all local government areas, upholding the highest standards of integrity and professionalism. Our mission is to build a skilled, motivated workforce that delivers quality service to citizens and drives sustainable community development.
                  </p>
                <button className="cssbuttons-io"initial={{y:45, opacity:0}}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.4}} onClick={()=>{
                        navigate('/about')
                    }} >
                  <span>read more</span>
                </button>
            </div>
              <div className="landpage-img-container">
                  <img src="/commissionBuilding.jpg" alt="" className='phone'
                    initial={{ y: 45, opacity: 0 }}
                    animate={{y:0, opacity:1}}
                    transition={{duration:0.65,delay:0.6}}/>
            </div>
    </section>
  )
}

export default AboutComponent