import React from 'react'
import '../assets/css/style.css';
import planeLogo from '../assets/icons/plane-logo.svg'

const Search = () => {
  return (
    <>
      <section className="search">
            <p>PATENT PORTFOLIO</p>
            <div className="pat-desc flex justify-start align-cntr">
                <div className="plane-logo">
                    <img src={planeLogo} alt="plane-logo" />
                </div>
                <div className="desc">
                    <h2>AEROSPACE</h2>
                    <span>The design, construction and operation of aircraft based on the scientific study or art of flight.</span>
                </div>
            </div>
            <div className="search-box flex justify-end align-cntr">
                <input type="text" name="tech-solution" id="tech-solution" placeholder="Enter Technology-Driven Solutions" />
                <a href="#"><span>GO</span></a>
            </div>
      </section>
    </>
  )
}

export default Search