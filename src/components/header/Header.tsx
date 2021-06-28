import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PATH } from "../routes/Routes.";
import s from "./Header.module.css";

function Header() {
  // add NavLinks
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  const toggle = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <div className={s.menuWrapper}>
      <div className={s.burgerMenu} onClick={toggle}>
        &#9776;
      </div>
      <div className={`${s.containerMenuLinks} ${activeMenu && s.activeMenu}`}>
        <NavLink to={PATH.LOGIN} className={s.link}>
          login
        </NavLink>
        <NavLink to={PATH.REGISTRED} className={s.link}>
          registred
        </NavLink>
        <NavLink to={PATH.FORGOT} className={s.link}>
          forgot
        </NavLink>
        <NavLink to={PATH.PROFILE} className={s.link}>
          profile
        </NavLink>
        <NavLink to={PATH.TESTING} className={s.link}>
          testing
        </NavLink>
        <NavLink to={PATH.PASSWORD_RECOVERY} className={s.link}>
          password-recovery
        </NavLink>
        <NavLink to={PATH.ENTERING_NEW_PASSWORD} className={s.link}>
          entering-new-password
        </NavLink>
      </div>
    </div>
  );
}

export default Header;