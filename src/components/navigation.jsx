import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <ul class="nav-items">
        <li class="nav-item-logo">
          <Link to="/">
            <img class="logo" alt="Fracalz Logo" src="/assets/fractalz-logo.png" />
          </Link>
        </li>
        <li li class="nav-item-connect">
          <a href="#">
            <img class="connect-link" alt="Link to ETC Wallet" src="/assets/buttons/connect.png" />
          </a>
        </li>
      </ul>
    </nav>
  );
}