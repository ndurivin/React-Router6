// import axios from "axios";
import { useEffect, useState } from "react";

function Albums() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/albums")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="container py-5 mt-5">
      <div className="row row-cols-1 row-cols-md-4 g-3">
        {data.map((album, index) => (
          <div key={index} className="col">
            <div className="card mt-4">
              <img
                src={album.thumbnailUrl}
                className="card-img-top"
                alt={album.title}
              />
              <div className="card-body">
                <h5 className="card-title">{album.title}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Albums;
