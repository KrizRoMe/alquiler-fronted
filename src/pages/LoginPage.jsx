import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LoginPage() {
  return (
    <Fragment>
      {/* <Header /> */}
      <Header />
      {/*Main*/}

      <div className=" bg-secondary  h-100 w-100 py-5 py-sm-3 row m-0">
        <div className=" mx-auto py-4 py-sm-5  bg-secondary my-2 my-sm-4 col-11 col-sm-10  px-sm-5 row  ">
          <div className="bg-white mx-auto p-4 p-sm-5 col-12 col-sm-12 col-md-8 col-lg-7 col-xl-5 row">
            <div className="mb-3 mb-sm-5">
              <div className="d-flex flex-row justify-content-center pb-3">
                <script src=""></script>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="86"
                  fill="#0d6efd"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                </svg>
              </div>

              <h1 className="text-center fs-5 fs-sm-2 fw-semibold">
                ADMINISTRADOR
              </h1>
            </div>

            <div className="d-flex flex-column py-2 px-2 px-sm-5">
              <div className="d-flex flex-row border-bottom border-1 border-dark py-1 my-2">
                <input
                  type="text"
                  className="frm-input-login border-0 pe-auto w-100 fs-6"
                  placeholder="Usuario"
                />
              </div>

              <div className="d-flex flex-row border-bottom border-1 border-dark mt-sm-4 py-1 my-2">
                <input
                  type="text"
                  className="frm-input-login border-0 pe-auto w-100 fs-6"
                  placeholder="Contraseña"
                />
              </div>

              <div className="d-flex flex-row justify-content-center mt-4 pt-4">
                <input
                  type="submit"
                  className="btn btn-primary text-white px-2 px-sm-3 px-md-4 fs-button"
                  value="INGRESAR"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </Fragment>
  );
}

export default LoginPage;
