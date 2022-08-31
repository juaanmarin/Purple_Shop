import React from 'react'
import { Slide } from 'react-slideshow-image';
import { Header } from '../../layout/Header/Header'
import { Nav } from '../../layout/Nav/Nav'
import "./Home.css"
import "./styles.css"
import { presentation } from "./data"
import { Card } from '../../UI/Card/Card';

export const Home = () => {
  return (
    <>
      <Header/>
      <Nav/>  
      <section>
        <div className='main_slide_container'>
          <div className="slide-container">
            <Slide>
              {presentation.map((slideImage, index)=> (
                <div className="each-slide" key={index}>
                  <div> 
                    <img src={slideImage.img} alt='img'></img>
                  </div>
                </div>
              ))} 
            </Slide>
          </div>
        </div>
        <div className='main_cards_container'>
          {presentation.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <Card img={slideImage.img}></Card>
              {/* <div> 
                <img src={slideImage.img} alt='img'></img>
              </div> */}
            </div>
          ))} 
        </div>
        
      </section>
    </>
  )
}
