import { HeaderContainer } from "./Header";

import logoImg from "../../assets/logo.svg";
import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Historique">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
