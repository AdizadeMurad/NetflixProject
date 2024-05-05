import React, { useState, useEffect } from 'react';

function NMainSection() {
  const [myData, setMyData] = useState([]);

  async function getAllInformation() {
    try {
      const res = await fetch("http://localhost:3000/YourNextWatch");
      const data = await res.json();
      setMyData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getAllInformation();
  }, []);

  return (
<></>
  );
}

export default NMainSection;