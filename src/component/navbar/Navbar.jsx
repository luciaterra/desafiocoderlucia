import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
const Navbar = () => {
  //dentro del navbar llamamos el componente cartWidget que devuelve un icono de un carrito
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        Tienda de Fotos
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                Nuevos
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                Ofertas
              </a>
            </li>
            <li className="nav-item">
              {' '}
              <a className="nav-link active" aria-current="page" href="#">
                Mas Vendidos
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
