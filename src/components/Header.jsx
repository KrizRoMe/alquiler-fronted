const Header = () => {
  return (
    <nav className=" d-flex bg-white h-100 py-4">
      <div className=" d-flex flex-row  container my-2 ">

        <a
          href="/"
          className="d-flex flex-row align-items-center text-decoration-none container "
        >
          <span className="text-info fs-6  @media (min-width: 768px) and (max-width: 991.98px) { fs-4 }">
            ALQUILER
          </span>
          <span className="ms-2 text-blue fs-6 @media (min-width: 768px) and (max-width: 991.98px) { fs-4 }">
            CUARTOS
          </span>
        </a>

        <a
          href="/productos/nuevo"
          className="btn btn-outline-primary px-4 @media (min-width: 768px) and (max-width: 991.98px) { px-5 }"
        >
          LOGIN
        </a>
      </div>
    </nav>
  );
};

export default Header;
