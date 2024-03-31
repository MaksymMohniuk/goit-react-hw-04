// import { useState } from 'react'

import "./App.css";

import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    async function fetchPhotos() {
      const { data } = await axios.get(
        "https://api.unsplash.com/photos/?client_id=oGYzQqArk2YQGtYqQNUjoqd5R_WjC4bentc-JV8nvfk"
      );
      console.log(data);
      setPhotos(data);
    }
    fetchPhotos();
  }, []);

  return <div>AppWithHTTPRequests</div>;
};

export default App;
