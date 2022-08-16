import React from "react";

function CardRoom({ emoji, estadoPago, numeroCuarto, palabraId }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading${palabraId}`}>
        <button
          className="accordion-button collapsed fs-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${palabraId}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${palabraId}`}
        >
          <label className="">Cuarto {numeroCuarto}</label>
          <span className={`bi bi-emoji-${emoji} mx-3`}></span>
          <span className="position-absolute end-0 mx-5">{estadoPago}</span>
        </button>
      </h2>
      <div
        id={`flush-collapse${palabraId}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${palabraId}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body d-flex align-items-center">
          <input type="text" className="form-control mx-2 " placeholder="DNI" />
          <button
            type="button"
            className="btn btn-outline-primary col-md-3 col-sm-4 mx-2 col-6"
          >
            VER DETALLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardRoom;
