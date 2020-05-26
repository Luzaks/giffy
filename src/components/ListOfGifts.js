import React, {useEffect, useState} from "react";
import Gif from "./Gift";
import getData from "../modules/getData";

export default function ListOfGifs ({ keyword }) {
    const [gifs, setGifs] = useState([]);
    useEffect(function(){
        getData({ keyword }).then((images) => {
            setGifs(images);
        });
    }, [keyword]);
  return gifs.map(({id, title, url}) =>
      <Gif
          key={id}
          title={title}
          id={id}
          url={url}
      />
  )
};