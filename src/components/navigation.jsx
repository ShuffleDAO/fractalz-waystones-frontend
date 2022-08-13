import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul className="nav-items">
        <li className="nav-item-logo">
          <Link to="/">
            <img className="logo" alt="Fracalz Logo" src="/assets/fractalz-logo.png" />
          </Link>
          <button id="audio-button"></button>
        </li>
        <li li className="nav-item-connect">
          <a href="#">
            <img className="connect-link" alt="Link to ETC Wallet" src="/assets/buttons/connect.png" />
          </a>
        </li>
      </ul>
    </nav>
  );
}