import React, { useEffect, useState } from 'react'

const Completed = () => {
    const [completedData, setCompletedData] = useState([]);

    useEffect(() => {
  console.log("Completed mounted");

  const fetchCompletedData = async () => {
    console.log("Fetching...");

    try {
      const response = await fetch(
        "http://localhost:3000/api/users?status=completed"
      );

      console.log(response.status);

      const data = await response.json();
      console.log(data);

      setCompletedData(data);
    } catch (err) {
      console.error(err);
    }
  };
}, []);

    return (
        <div>
            <h1>Completed</h1>
            {
                completedData.map((item) => {
                    return (
                        <div key={item.id} style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <p>Status: {item.status}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Completed