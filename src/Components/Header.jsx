import React from "react";

const Header = () => {
  return (
    <>
      <main className="bg-body-tertiary">
        <nav className=" container navbar navbar-expand-lg ">
          <div className="container-fluid">
            <img
              src="Images/Logo_Toko.jpeg"
              alt="logo"
              className="img-fluid"
              style={{ width: "50px" }}
            />
            <form className="border rounded h5">
              <span className="bi bi-search "></span>
              <input
                type="text"
                placeholder="Cari Disini"
                className="border-0 rounded"
                style={{ width: "300px" }}
              />
            </form>
            <button
              typeof="button"
              className="bi bi-cart h3 border-0 bg-transparent"
            ></button>
          </div>
        </nav>
      </main>
    </>
  );
};

export default Header;
