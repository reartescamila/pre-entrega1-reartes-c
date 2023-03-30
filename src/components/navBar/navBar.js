import CartWidget from "../CartWidget/CartWidget";
const NavBar = () => {
  return (
    <nav className="barra navbar navbar-expand-lg">
      <div className="container-fluid">
        <h3 className="titulo fw-bold">FC Sport</h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav col-12">
            <div className="col-1"></div>
            <li className="nav-item col-1">
              <button
                className="itemNav rounded-3 border border-warning  bg-secondary fs-3 fw-bold text-center"
                href="#"
              >
                Top
              </button>
            </li>
            <li className="nav-item col-2">
              <button
                className="itemNav rounded-3 border border-warning  bg-secondary fs-3 fw-bold text-center"
                href="#"
              >
                Remeras
              </button>
            </li>
            <li className="nav-item col-1">
              <button
                className="itemNav rounded-3  border border-warning bg-secondary fs-3 fw-bold text-center"
                href="#"
              >
                Calzas
              </button>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
