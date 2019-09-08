import React, { useState } from "react";
import data from "./data.json";
import Loader from "./loader";
import img from "../../assets/images/platzi.png";
import video from "../../assets/video/que-es-core.mp4";

function App() {
  const [loaderList, setLoaderList] = useState([]);
  function handleClick() {
    setLoaderList(data.loaders);
  }
  return (
    <div>
      <img src={img} alt="logo Platzi" />
      <h1> React en acción </h1>
      <p>Esto es un ejemplo de react con webpack</p>
      <ul>
        {loaderList.map(item => (
          <Loader {...item} key={item.id} />
        ))}
      </ul>
      <button onClick={handleClick}>
        Mostrar lo aprendido hasta el momento
      </button>
      <video src={video} width="360" controls poster={img}></video>
    </div>
  );
}

export default App;
