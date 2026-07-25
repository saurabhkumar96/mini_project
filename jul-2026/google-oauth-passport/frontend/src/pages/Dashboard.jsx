import{ useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'


const Dashboard = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/auth/user", { withCredentials: true })
            .then((response) => {
                if (response.status === 200) return response.json();
                throw new Error("authentication has been failed!");
            })
            .then((resObject) => {
                console.log(resObject);
                setUser(resObject.user);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    
  return (
    <div>
        <h1>Dashboard</h1>
        <div>{user && <img src={user.picture} alt={user.name} />}</div>
        <div>{user && <p>{user.email}</p>}</div>
        {user && <p>Welcome, {user.name}!</p>}
        <button onClick={() => window.location.href = "http://localhost:5000/auth/logout"}>Logout</button>
    </div>
  )
}

export default Dashboard