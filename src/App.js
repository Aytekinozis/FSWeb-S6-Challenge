import React, { useEffect, useState } from "react";
import axios from "axios";
//import Karakterler from "./components/Karakterler";
import Karakter from "./components/Karakter";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/").then((res) => setData(res.data));
  }, []);
  console.log(data);
  //console.log(data.map((item, index) => item.name));
  return (
    <div className="App">
      <h1 className="Header">Karakterler</h1>
      <div className="characters">
        {data.map((item) => {
          return <Karakter data={item} charName={item.name}></Karakter>;
        })}
      </div>
    </div>
  );
};

export default App;
