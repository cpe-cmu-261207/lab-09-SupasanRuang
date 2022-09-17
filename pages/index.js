import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="mx-auto px-2 " style={{ maxWidth: "1000px" }}>
        {/* <!-- single status --> */}
        <div className="vstack gap-1 border text-bg-light border-2 rounded-3p -2 ">
          {/* <!-- text --> */}
          <br />

          <div className="mx-auto px-2 " style={{ maxWidth: "900px" }}>
            <div className="hstack gap-3 ">
              <img
                src="/mypic.jpg"
                width="200"
                height="200"
                style={{
                  objectFit: "cover",
                  // marginLeft: "100px",
                  // marginRight: "100px",
                }}
                className="rounded-circle"
              />
              <span style={{ fontWeight: "bold" }}> </span>
              <div
                className="mx-auto px-2 vstack gap-1 "
                style={{
                  color: "rgb(40, 42, 53)",
                  fontFamily: "Kanit, sans-serif ",
                  maxWidth: "500px",
                }}
              >
                <br />
                <h3
                  style={{
                    color: "rgb(40, 42, 53)",
                    fontFamily: "Kanit, sans-serif ",
                    fontWeight: "bold",
                  }}
                >
                  Supasan Ruangchutipopan
                </h3>

                <p>
                  สวัสดีครับ ผม นาย ศุภสัณห์ เรืองจุติโพธิ์พาน กำลังศึกษาอยู่ที่
                  มหาวิทยาลัย เชียงใหม่ คณะ วิศวกรรมศาสตร์
                  สาขาวิศวกรรมคอมพิวเตอร์
                </p>
              </div>
            </div>

            <br />
          </div>
          <br />
          {/* <!-- text --> */}
          <h2 style={{ fontWeight: "bold", textAlign: "center" }}>
            {" "}
            My Skills{" "}
          </h2>

          <br />
          <div className="mx-auto px-2 " style={{ maxWidth: "700px" }}>
            <div className="hstack gap-3 ">
              {/* <!-- Card --> */}
              <div
                className="card mb-3"
                style={{ maxWidth: "540px", margin: "auto" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src="/ProgrammingIllustration.png"
                      className="img-fluid rounded-start"
                      alt="ProgrammingIllustration"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Programming</h5>
                      <p
                        className="card-text"
                        style={{
                          color: "rgb(40, 42, 53)",
                          fontFamily: "Kanit, sans-serif",
                        }}
                      >
                        มีความสามารถ ในการเขียน ภาษา C++ ได้
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <hr className="my-0" />
          <Footer />
          <br />
        </div>
      </div>
    </>
  );
}
