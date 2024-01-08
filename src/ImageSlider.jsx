import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './imageslider.css';


function ImageSlider () {
   

    return (



      <div className="slidebar" >
      <Slide
      autoplay={false}
      onChange={function noRefCheck(){}}
      onStartChange={function noRefCheck(){}}
    >


      <div className="each-slide-effect" id='slide'>
        
        <div
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
            height: '100vh'
          
          }}
        >
          <span>
            Call of the Wild
          </span>
        </div>
      </div>
      <div className="each-slide-effect" id='slide'>
        <div
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)',
            height: '100vh'
          
          }}
        >
          <span>
            Over the Moon
          </span>
        </div>
      </div>
      <div className="each-slide-effect" id='slide'>
        <div
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
            height: '100vh'
          }}
        >
          <span>
            Child of Nature
          </span>
        </div>
      </div>
    </Slide>
    </div>
    );
};

export default ImageSlider;