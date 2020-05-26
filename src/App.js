import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const urlAPI =  'https://api.giphy.com/v1/gifs/search?api_key=Cjgi2R0t4kg36Y9hoxpkqYiEqg22KdTd&q=panda&limit=10&offset=0&rating=G&lang=en';
  const [gifs, setGifs] = useState([]);
  useEffect(function(){
      fetch(urlAPI,  { mode: 'cors' })
          .then(response => response.json())
          .then((response) => {
              const {data} = response;
              const gifs = data.map(
                  image => image.images.downsized_medium.url
              );
              setGifs(gifs);
          })
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
