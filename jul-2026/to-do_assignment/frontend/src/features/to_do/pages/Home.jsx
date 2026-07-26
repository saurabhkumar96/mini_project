import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/users");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/api/users",
        formData
      );

      setData((prev) => [...prev, res.data]);

      setFormData({
        title: "",
        description: "",
      });
    } catch (err) {
      console.error(err);
    }
  };

  const handleComplete = async (id) => {
    try {
      await axios.put(`http://localhost:3000/api/users/${id}`, {
        status: "completed",
      });

      // Remove completed item from UI
      setData((prev) => prev.filter((item) => item.id !== id));

      // OR simply call fetchUsers();
      // fetchUsers();

    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2>Add User</h2>

      <Link to="/completed">Completed</Link>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit">Add</button>
      </form>

      <hr />

      <h2>Pending Users</h2>

      {data
        .filter((item) => item.status === "pending")
        .map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <p>Status: {item.status}</p>

            <button onClick={() => handleComplete(item.id)}>
              Complete
            </button>
          </div>
        ))}
    </>
  );
};

export default Home;
