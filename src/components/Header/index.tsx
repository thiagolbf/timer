import { HeaderContainer } from "./style";
import { Timer, Scroll } from "phosphor-react";

import { NavLink } from "react-router-dom";
import LogoIgnite from "../../assets/Logo.svg";
import Tomato from "../../assets/tomato.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <img src={Tomato} alt="tomate" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
};
