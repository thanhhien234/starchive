import React from "react";
import exampleProfile from "../../assets/images/example-profile.svg";
import toggleIcon from "../../assets/icons/toggle-icon.svg";
import { NavbarContainer, ToggleIcon, ProfileIcon } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <ToggleIcon src={toggleIcon} alt="toggle" />
      <ProfileIcon src={exampleProfile} alt="profile" />
    </NavbarContainer>
  );
};

export default Navbar;