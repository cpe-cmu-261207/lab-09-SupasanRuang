import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Experience() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto px-2" style={{ maxWidth: "1000px" }}>
        {/* <!-- single status --> */}

        <div className="vstack gap-2 border text-bg-light border-2 rounded-3 p-2">
          {/* <!-- text --> */}
          <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
            {" "}
            Project Experience{" "}
          </h2>
          <br />

          {/* <!-- Card --> */}
          <div
            className="card mb-3"
            style={{ maxWidth: "540px", margin: "auto" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="/project game.png"
                  className="img-fluid rounded-start"
                  alt="Project Game"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Project game</h5>
                  <p
                    className="card-text"
                    style={{
                      color: "rgb(40, 42, 53)",
                      fontFamily: "Kanit, sans-serif",
                    }}
                  >
                    Project เป็นในวิชา Basic Computer Engineering ที่สร้างเกม
                    โดยใช้ scratch
                    <a
                      rel="noreferrer"
                      href="https://scratch.mit.edu/projects/560295700/"
                      target="_blank"
                    >
                      Link Game
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Card --> */}
          <div
            className="card mb-3"
            style={{ maxWidth: "540px", margin: "auto" }}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="/project restaurant.png"
                  className="img-fluid rounded-start"
                  alt="Project Restaurant"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Project Restaurant</h5>
                  <p
                    className="card-text"
                    style={{
                      color: "rgb(40, 42, 53)",
                      fontFamily: "Kanit, sans-serif",
                    }}
                  >
                    Project เป็นในวิชา Computer Programming เป็นโปรแกรม
                    ระบบจัดการ ร้านอาหาร
                  </p>
                </div>
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
