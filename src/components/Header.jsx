const Header = () => {
  return (
    <nav className=" d-flex bg-white h-100 py-4 ">
      <div className=" d-flex flex-row  container my-2 justify-content-between">
        <a
          href="/"
          className="d-flex flex-row align-items-center text-decoration-none"
        >
          <span className="text-dark fs-4">ALQUILER</span>
          <span className="text-blue fs-4">CUARTOS</span>
        </a>

        <a
          href="/productos/nuevo"
          className="btn btn-outline-primary px-5 p-btn"
        >
          LOGIN
        </a>
      </div>
    </nav>
  );
};

export default Header;
