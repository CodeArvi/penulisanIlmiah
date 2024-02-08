import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/Dashboard")
      .then((res) => {
        if (res.data.valid) {
          navigate("/Dashboard");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/login", values)
      .then((res) => {
        if (res.data.success) {
          navigate("/Dashboard");
        } else {
          alert("Login failed. Please check your credentials.");
        }
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <main className="d-flex justify-content-center m-5">
        <div
          className="card text-bg-secondary mb-3"
          style={{ maxWidth: "20rem" }}
        >
          <div className="card-header text-center">Admin</div>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={handleInput}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
