import React from 'react';
import { Link } from 'react-router-dom';

const NavbarMenu = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/main">
            Home
          </Link>
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
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/main/distributor"
                >
                  Distributor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/main/brand">
                  Brand
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/main/item">
                  Item
                </Link>
              </li>
              <li className="nav-Transaksi">
                <Link className="nav-link" to="/main/transaction">
                  Transaction
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Exit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarMenu;
