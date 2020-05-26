import React, {useEffect, useState} from 'react';
import './App.css';
import ListOfGifs from "./components/ListOfGifts";

function App() {
    const [keyword, setKeyword] = useState('rock');

    return (
    <div className="App">
      <section className="App-header">
          <button onClick={() => setKeyword('party')}>
              Change keyword
          </button>
          <ListOfGifs keyword={keyword} />
      </section>
    </div>
  );
}

export default App;
