import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Error404 from "../404/Error404";
import Login from "../login/Login";
import CheckIn from "../CheckIn";
import PasswordRecovery from "../PasswordRecovery";
import Profile from "../Profile";
import EnteringNewPassword from "../EnteringNewPassword";
import Testing from "../Testing";
import { Registred } from "./../registred/Registred";
import {Forgot} from "../forgot/Forgot";

export const PATH = {
  LOGIN: "/login",
  REGISTRED: "/registred",
  CHECK_IN: "/check-in",
  PROFILE: "/profile",
  TESTING: "/testing",
  PASSWORD_RECOVERY: "/password-recovery",
  ENTERING_NEW_PASSWORD: "/entering-new-password/:token",
    FORGOT:'/forgot'
};

function Routes() {
  return (
    /*   *Switch выбирает первый подходящий роут**/
    <Switch>
      {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
      {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
      <Route path={"/"} exact render={() => <Redirect to={PATH.LOGIN} />} />

      <Route path={PATH.LOGIN} render={() => <Login />} />
      <Route path={PATH.REGISTRED} render={() => <Registred />} />
      <Route path={PATH.FORGOT} render={() => <Forgot />} />
      <Route path={PATH.PROFILE} render={() => <Profile />} />
      <Route path={PATH.TESTING} render={() => <Testing />} />
      <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery />} />
      <Route path={PATH.ENTERING_NEW_PASSWORD} render={() => <EnteringNewPassword />} />

      {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
      <Route render={() => <Error404 />} />
    </Switch>
  );
}

export default Routes;