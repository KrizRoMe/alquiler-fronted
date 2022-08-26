const Header = () => {
  return (
    <nav className=" d-flex bg-white h-100 py-4 row m-0">
      <div className=" d-flex flex-row  container my-2 justify-content-between col-10">
        <a
          href="/"
          className="d-flex flex-row align-items-center text-decoration-none"
        >
          <span className="text-dark fs-5">ALQUILER</span>
          <span className="text-primary fs-5">CUARTOS</span>
        </a>

        <a
          href="/productos/nuevo"
          className="btn btn-outline-primary px-3 px-sm-3 px-md-5"
        >
          LOGIN
        </a>
      </div>
    </nav>
  );
};

export default Header;
