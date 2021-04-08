import {useState, useEffect} from 'react';
import logo from './logo.svg';
import backgrounds from './backgrounds.js';
import './App.css';

function App() {

  const [imgSrc, setImgSrc] = useState({logo}.logo);
  const [vidSrc, setVidSrc] = useState("");

  const changeBackground = (event) => {
    setImgSrc({logo}.logo);
    setVidSrc("");
    backgrounds.map((item, key) => {
      if(item.name == event.target.value && item.type == "mp4")
      {
        setImgSrc("");
        setVidSrc(event.target.value + "." + item.type);
        window.setTimeout(function(){}, 5000);
      }
      else if(item.name == event.target.value && item.type == "jpg")
      {
        setVidSrc("");
        setImgSrc(event.target.value + "." + item.type);
        window.setTimeout(function(){}, 5000);
      }
    });
  };

  useEffect(() => {
    console.log();
  }, [imgSrc],[vidSrc]);
  
  return (
    <div className="App-header">
      {imgSrc != "" && (
        <img src={imgSrc} alt="logo" />
      )}
      {vidSrc != "" && (
        <video src={vidSrc} type="video/mp4" autoPlay muted loop />
      )}
      <select onChange={changeBackground} name="select-bg" id="select-bg">
      <option id="">Please select</option>
        {backgrounds.map((item, key) => 
          <option>{item.name}</option>
        )}
      </select>
    </div>
  );
}

export default App;
