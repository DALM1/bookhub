//
//
//
//  Created by Dimitri ALMON (DALM1) on 16/11/2023.
//  Copyright DALM AGENCY © - 2023
//

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <ul>About</ul>
      </Link>
      <Link to="/book">
        <ul>Library</ul>
      </Link>
      <a
        href="https://dalm1chat.online/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <ul className="signin">Sign in</ul>
        </div>
      </a>
    </div>
  );
}

export default Header;
