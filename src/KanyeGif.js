import React, { useState, useEffect } from "react";

const kanyeGifs = [
  "https://media.giphy.com/media/3pDwzu7sYmF4k/giphy.gif",
  "https://media.giphy.com/media/9qvkhbHg3NOKI/giphy.gif",
  "https://media.giphy.com/media/bnhtSlVeo7BxC/giphy.gif",
  "https://media.giphy.com/media/16e1J9ztaZ3na/giphy.gif",
  "https://media.giphy.com/media/9cmVjltMzhPUY/giphy.gif",
  "https://media.giphy.com/media/9Xh1CGm4Hzo4g/giphy.gif",
  "https://media.giphy.com/media/26uflOGFZAKurnp7O/giphy.gif",
  "https://media.giphy.com/media/l2Sqi7aWyZ5jBKwGk/giphy.gif"
];

const KanyeGif = () => {
  const [kanyeGif, setKanyeGif] = useState("");

  useEffect(() => {
    setKanyeGif(kanyeGifs[Math.floor(Math.random() * kanyeGifs.length)]);
  }, []);

  return (
    <>{kanyeGif && <img className="kayneGif" src={kanyeGif} alt="Kanye West" height="300"/>}</>
  );
};

export default KanyeGif;
