/*
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/user");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const postData = async () => {
    try {
      const response = await axios.post("/user", { data: inputValue });
      console.log(response.data);
      fetchData(); // Fetch data again after posting
    } catch (error) {
      console.error(error);
    }
  };

  const dbinit = async () => {
    try {
      const response = await axios.post("/dbinit");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const tbinit = async () => {
    try {
      const response = await axios.post("/tbinit");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Welcome Please Submit User Name  ...!</h1>
      <input name="input-parameter" onChange={handleChange} />
      <br />
      <br />
      <button onClick={postData}>Submit</button> <br />
      <br />
      <button style={{ backgroundColor: "red" }} onClick={dbinit}>
        DB Init
      </button>
      <br />
      <br />
      <button style={{ backgroundColor: "orange" }} onClick={tbinit}>
        Table Init
      </button>
      <br />
      <hr />
      <h2>Users List</h2>
      <center>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

export default App;
*/
import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

// Home component with your user form and list
function Home() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("/user");
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const postData = async () => {
    try {
      await axios.post("/user", { data: inputValue });
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const dbinit = async () => {
    try {
      const response = await axios.post("/dbinit");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const tbinit = async () => {
    try {
      const response = await axios.post("/tbinit");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome Please Submit User Name  ...!</h1>
      <input name="input-parameter" onChange={handleChange} />
      <br /><br />
      <button onClick={postData}>Submit</button>
      <br /><br />
      <button style={{ backgroundColor: "red" }} onClick={dbinit}>DB Init</button>
      <br /><br />
      <button style={{ backgroundColor: "orange" }} onClick={tbinit}>Table Init</button>
      <br />
      <hr />
      <h2>Users List</h2>
      <center>
        <table>
          <thead>
            <tr><th>ID</th><th>Name</th></tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}><td>{user.id}</td><td>{user.name}</td></tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}

// Contact page component
function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>Email: contact@example.com</p>
      <p>Phone: +1 234 567 8900</p>
    </div>
  );
}

// Service page component
function Service() {
  return (
    <div>
      <h1>Our Services</h1>
      <ul>
        <li>Web Development</li>
        <li>Cloud Solutions</li>
        <li>DevOps Consulting</li>
      </ul>
    </div>
  );
}

// Login page component
function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input placeholder="Username" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

// Main App component with Router and navigation
function App() {
  return (
    <Router>
      <div className="App">
        <nav style={{ marginBottom: "20px" }}>
          <Link to="/home">Home</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/service">Service</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
