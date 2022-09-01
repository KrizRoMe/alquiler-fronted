import React from "react";

function CardRoom({ numberRoom, numberEnglish, payMonth }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`flush-heading${numberEnglish}`}>
        <button
          className={`accordion-button collapsed fs-4 text-${
            payMonth == true ? "success" : "danger"
          }`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${numberEnglish}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${numberEnglish}`}
        >
          <label className="">Cuarto {numberRoom}</label>
          <span
            className={`bi bi-emoji-${
              payMonth == true ? "smile" : "frown"
            } mx-3`}
          ></span>
          <span className="position-absolute end-0 mx-5">
            {payMonth == true ? "Actualizado" : "Deuda"}
          </span>
        </button>
      </h2>
      <div
        id={`flush-collapse${numberEnglish}`}
        className="accordion-collapse collapse"
        aria-labelledby={`flush-heading${numberEnglish}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div className="accordion-body d-flex align-items-center">
          <input
            type="text"
            className="form-control mx-2 fs-6"
            placeholder="DNI"
          />
          <button
            type="button"
            className="btn btn-outline-primary col-md-3 col-sm-4 mx-2 col-6 fs-button"
          >
            VER DETALLE
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardRoom;
