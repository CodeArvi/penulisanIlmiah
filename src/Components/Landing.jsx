import React from "react";

const Landing = () => {
  return (
    <>
      <section>
        {/* Jumbotron */}

        <img
          src="Images/Landing.jpg"
          className="img-fluid"
          alt="Jumbotron"
        ></img>
      </section>

      <div className="container">
        <section className="row row-gap-3 column-gap-3 mt-5">
          {/* Baju Wanita */}
          <article className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="Images/baju_wanita.jpg"
                className="card-img-top"
                alt="Baju Wanita"
              />
              <div className="card-body">
                <h5 className="card-title">Baju Wanita</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </article>

          {/* Baju Pria */}
          <article className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="Images/baju_pria.jpg"
                className="card-img-top"
                alt="Baju Pria"
              />
              <div className="card-body">
                <h5 className="card-title">Baju Pria</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </article>

          {/* Baju Anak */}
          <article className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="Images/baju_anak.png"
                className="card-img-top"
                alt="Baju Anak"
              />
              <div className="card-body">
                <h5 className="card-title">Baju Anak</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </article>

          {/* Peralatan Sekolah */}

          <article className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="Images/peralatan_sekolah.jpg"
                className="card-img-top"
                alt="Peralatan Sekolah"
              />
              <div className="card-body">
                <h5 className="card-title">Peralatan Sekolah</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </article>

          {/* Peralatan Rumah */}
          <article className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="Images/peralatan_rumah.jpeg"
                className="card-img-top"
                alt="peralatan_rumah"
              />
              <div className="card-body">
                <h5 className="card-title">Peralatan Rumah</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </article>

          {/* Peralatan Sholat */}
          <article className="col d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="Images/peralatan_sholat.jpg"
                className="card-img-top"
                alt="peralatan_sholat"
              />
              <div className="card-body">
                <h5 className="card-title">Peralatan Sholat</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};

export default Landing;
