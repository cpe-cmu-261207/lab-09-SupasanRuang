import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function contact() {
  return (
    <div>
      <Navbar />

      {/* <!-- Status container --> */}
      <div className="mx-auto px-2 " style={{ maxWidth: "1000px" }}>
        {/* <!-- single status --> */}
        <div className="vstack gap-1 border text-bg-light border-2 rounded-3 p-2">
          {/* <!-- text --> */}
          <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
            {" "}
            Contact Me{" "}
          </h2>
          <div className="mx-auto px-2 " style={{ maxWidth: "900px" }}>
            <div className="hstack gap-3 ">
              <img
                src="/mypic.jpg"
                width="200"
                height="200"
                style={{
                  objectFit: "cover",
                  marginLeft: "300",
                  marginRight: "1000",
                }}
                className="rounded-circle"
              />
              <span style={{ fontWeight: "bold" }}> </span>
              <div
                className="mx-auto px-2 vstack gap-1 "
                style={{
                  color: "rgb(40, 42, 53)",
                  fontFamily: "Kanit, sans-serif",
                  maxWidth: "500px",
                }}
              >
                <br />
                <br />
                <p>
                  <span style={{ fontWeight: "bold" }}>Name </span>:Supasan
                  Ruangchutipopan
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Nickname </span>:Fong
                  Fong
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}> Address</span>:318/24
                  Bueng Phra Chan Rd. Nai Mueang Mueang Phitsanulok 65000
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}> Facebook </span>:
                  <a
                    href="https://www.facebook.com/SupasanRuangchutipopan"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://www.facebook.com/SupasanRuangchutipopan
                  </a>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}> Email</span>:
                  <a href="mailto:Supasan_ruang@cmu.ac.th" rel="noreferrer">
                    Supasan_ruang@cmu.ac.th
                  </a>
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}> Phone</span>
                  :098-192-8418
                </p>
              </div>
            </div>
          </div>
          <br />
          <hr className="my-0" />
          <Footer />
          <br />
        </div>
      </div>
    </div>
  );
}
