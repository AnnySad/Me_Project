import React, {useEffect, useState} from "react";
import {NavLink, Redirect} from "react-router-dom";
import { PATH } from "../routes/Routes.";
import s from "./Header.module.css";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../../bll/store";
import {logOutTC} from "../../bll/authReducer";

function Header() {
  const isLogined = useSelector<AppStoreType, boolean>(state => state.login.isLogined)
  const dispatch= useDispatch()
  const  logoutHandler = ()=>{
    dispatch(logOutTC())
  }

  //console.log('isLogined', isLogined)

  return (
    <div className={s.menuWrapper}>
      <nav className={s.containerMenuLinks}>
        <NavLink to={PATH.LOGIN} onClick={logoutHandler} className={s.link} activeClassName={s.activeLink}>
          {isLogined ? 'logout' : 'login'}
        </NavLink>
        <NavLink to={PATH.REGISTRED} className={s.link} activeClassName={s.activeLink}>
          registred
        </NavLink>
        <NavLink to={PATH.FORGOT} className={s.link} activeClassName={s.activeLink}>
          forgot
        </NavLink>
        <NavLink to={PATH.PROFILE} className={s.link} activeClassName={s.activeLink}>
          profile
        </NavLink>
        {/* <NavLink to={PATH.TESTING} className={s.link}>
          testing
        </NavLink>
        <NavLink to={PATH.PASSWORD_RECOVERY} className={s.link}>
          password-recovery
        </NavLink>
        <NavLink to={PATH.ENTERING_NEW_PASSWORD} className={s.link}>
          entering-new-password
        </NavLink> */}
      </nav>
    </div>
  );
}

export default Header;
