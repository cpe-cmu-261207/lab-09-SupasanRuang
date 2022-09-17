import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="text-bg-primary">
        {/* <!-- big navber --> */}
        <div
          className="d-none d-sm-flex mx-auto align-items-center"
          style={{ maxWidth: "700px" }}
        >
          <div className="me-auto h2 hstack position-relative gap-4">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link href="/ ">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "white" }}
                    rel="noreferrer"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/experience">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "white" }}
                    rel="noreferrer"
                  >
                    Experience
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact ">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "white" }}
                    rel="noreferrer"
                  >
                    Contact
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/lab-07">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    style={{ color: "white" }}
                    rel="noreferrer"
                  >
                    Lab-07
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
