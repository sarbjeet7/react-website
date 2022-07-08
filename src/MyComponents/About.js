import React from "react"
import Heading from "./Heading"

const About = () => {
  return (
    <>
    <section className='hero'>
        <div className='container'>
          <Heading title='Search Your Next Luxury Car ' subtitle='Find new & featured cars located in your local city.' />

          <form className='flex'>
            <div className='box'>
              <span>City/Street</span>
              <input type='text' placeholder='Model' />
            </div>
            <div className='box'>
              <span>Property Type</span>
              <input type='text' placeholder='Max Price' />
            </div>
            <div className='box'>
              <span>Price Range</span>
              <input type='text' placeholder='Postal Code' />
            </div>
            <div className='box'>
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'></i>
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default About
