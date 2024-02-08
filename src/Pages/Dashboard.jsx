import React, { useEffect } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/Dashboard")
      .then((res) => {
        if (!res.data.valid) {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Header></Header>
      <h1>home component</h1>
      <Footer></Footer>
    </>
  );
};

export default Dashboard;
