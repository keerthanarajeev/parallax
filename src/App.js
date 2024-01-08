import './App.css';
import ImageSlider from './ImageSlider';
import ParallaxImg from './ParallaxImg';


function App() {
  return (
    <div className="App">

      <div> <ParallaxImg/></div>
       

      <div  style={{marginTop:'100vh'}}> <ImageSlider />
        </div>
       
      </div>
    
  
  );
}

export default App;
