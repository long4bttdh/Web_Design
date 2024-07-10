import React, { useState, useEffect } from 'react';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('../db.json')
      .then(response => response.json())
      .then(data => setData(data.New));
  }, []);

  return (
    <div>
      ádf
      
      {data.map(item => (
        <div key={item.id} className="card">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <img src={item.imagePreviewUrl} alt={item.title} />
        </div>
      ))}
    </div>
  );
}

export default App;
