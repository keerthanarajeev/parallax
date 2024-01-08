import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import './parallaximg.css';




function ParallaxImg() {
  return (
    <div>

<div className="ParallaxImg">
<Parallax pages={2} style={{ top: "0", left: "0" }} className="animation">
        <ParallaxLayer offset={0.03} speed={0.1}>
          <div className="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.025} speed={0.4}>
          <div className="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>

       

        <ParallaxLayer offset={0.015} speed={1.2}>
          <div className="animation_layer parallax" id="junglel"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.2}>
          <div className=" p-6 " style={{textAlign:'center', paddingTop:'200px'}}>
            <h1 className=" fw-bold text-center" >
              WELCOME TO PARALLAX EFFECT
            </h1>
            <span style={{textDecoration:'none', fontSize:'14px'}}>-------Scroll to see the magic of Parallax effect--------</span>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.01} speed={1.6}>
          <div className="animation_layer parallax" id="junglel2"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.0}>
          <div className="animation_layer parallax" id="junglel3"></div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={2.4}>
          <div className="animation_layer parallax" id="junglel4"></div>
        </ParallaxLayer>
      </Parallax>

</div>


    </div>
  )
}

export default ParallaxImg