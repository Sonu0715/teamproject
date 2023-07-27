import React, { useState } from "react";
import './photos.css';

const Photos = () => {
  const [photo, setPhoto] = useState([]);
  fetch("https://jsonplaceholder.typicode.com/todos/").then((resp) => {
    resp.json().then((result) => {
      //   console.log(result);
      setPhoto(result);
      //   console.log(photo);
    });
  });

  return (
    <div>
      <input type="text" placeholder="Search.." name="search" className="search"/>
      {/* <button type="submit"><i class="fa fa-search"></i></button> */}
      <div className="grid-container">
        {photo.map((item, i) => (
        <div key={item.id} className="grid-item">
          <h4>{item.title}</h4>
          <p>{item.id}</p>
          <p>{item.url}</p>
          <p>{item.thumbnailUrl}</p>
        </div>
      ))}
    </div>

    </div>
  );
};

export default Photos;
