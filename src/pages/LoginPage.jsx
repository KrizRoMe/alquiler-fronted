import React, { Fragment } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function LoginPage() {
  return (
    <Fragment>
      {/* <Header /> */}
      <Header />
      {/*Main*/}

      <div className=" bg-secondary  h-100 @include media-breakpoint-up(md) { py-5 }">
        <div className="box-login   mx-auto  @include media-breakpoint-up(md) { py-5 bg-info my-3 }">

          <div className="bg-white  mx-auto px-2  @include media-breakpoint-up(md) { w-50 px-5 pt-5 my-4 } ">

            <div className="mb-5">
              <div className="d-flex flex-row justify-content-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="86"
                  height="86"
                  fill="#9aafd6"
                  class="bi bi-person-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>

              <h3 className="fs-5 text-sm-center">ADMINISTRADOR</h3>
    
            </div>

            <div className="d-flex flex-column py-4">
              <div className="d-flex flex-row border-bottom border-3">
                <label htmlFor="" className="me-2">Usuario:</label>
                <input type="text" className="frm-button-login border-0 pe-auto w-100" />
              </div>

              <div className="d-flex flex-row border-bottom border-3 mt-4">
                <label htmlFor="" className="me-2">Contraseña:</label>
                <input type="text" className="frm-button-login border-0 pe-auto w-100" />
              </div>

              <div className="d-flex flex-row justify-content-center mt-4">
                     <input type="submit" className="btn btn-primary px-4" value="INGRESAR" />
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
