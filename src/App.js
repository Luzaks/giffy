import React, {useEffect, useState} from 'react';
import './App.css';
import getData from "./modules/getData";

function App() {

  const [gifs, setGifs] = useState([]);
  useEffect(function(){
        getData().then((images) => {
            setGifs(images);
        });
  }, []);
  return (
    <div className="App">
      <section className="App-header">
          {
              gifs.map(singleGif =>
                  <img src={singleGif} alt="gift"/>
              )
          }
      </section>
    </div>
  );
}

export default App;
