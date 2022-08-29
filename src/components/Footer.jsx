import React from "react";

const InformacionContacto = ({ label, firstDiv, secondDiv }) => {
  return (
    <section className="col-lg-3 col-md-6 col-sm-12 col-12">
      <label className="p-4 fw-bold fs-footer">{label}</label>
      <div className="mb-2 fs-footer">{firstDiv}</div>
      <div className="fs-footer">{secondDiv}</div>
    </section>
  );
};

const RedSocial = ({ label, icon }) => {
  return (
    <section className="col-lg-3 col-md-6 col-sm-12 col-12">
      <label className="p-4 fw-bold fs-footer">{label}</label>
      <a
        className={`bi bi-${icon} fs-4 mb-2 list-group-item`}
        href={
          icon == "facebook"
            ? "https://www.facebook.com/cristophermoises.romeromedrano/"
            : "https://www.instagram.com/krizdev_/"
        }
        target="_blank"
      ></a>
      <a
        className={`bi bi-${icon} fs-4 mb-2 list-group-item`}
        href={icon == "facebook" ? "#" : "#"}
        target="_blank"
      ></a>
    </section>
  );
};

function Footer() {
  return (
    <div className="row m-0 bg-info p-5 text-white text-center">
      <InformacionContacto
        label="DESARROLLADO POR"
        firstDiv="CRISTOPHER ROMERO"
        secondDiv="JOEL SANTIAGO"
      />
      <InformacionContacto
        label="CONTACTO"
        firstDiv="+51 986550234"
        secondDiv="+51 917305205"
      />
      <RedSocial label="FACEBOOK" icon="facebook" />
      <RedSocial label="INSTAGRAM" icon="instagram" />
      <section className="derechos text-center pt-3 pt-sm-5">
        <label className="fw-light fs-footer">
          @TODOS LOS DERECHOS RESERVADOS 2022
        </label>
      </section>
    </div>
  );
}

export default Footer;
