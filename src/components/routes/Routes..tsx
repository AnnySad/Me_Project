import React from "react";
import {Redirect, Route, Switch } from "react-router-dom";
import Error404 from "../404/Error404";
import Login from "../Login";
import CheckIn from "../CheckIn";
import PasswordRecovery from "../PasswordRecovery";
import Profile from "../Profile";
import EnteringNewPassword from "../EnteringNewPassword";
import Testing from "../Testing";

export const PATH = {
    LOGIN: '/login',
    CHECK_IN: '/check-in',
    PROFILE: '/profile',
    TESTING: '/testing',
    PASSWORD_RECOVERY:'/password-recovery',
    ENTERING_NEW_PASSWORD:'/entering-new-password'
}

function Routes() {
    return (
        <div>
            {/*Switch выбирает первый подходящий роут*/}
            <Switch>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                <Route path={'/'} exact render={() => <Redirect to={PATH. LOGIN}/>}/>

                <Route path={PATH. LOGIN} render={() => <Login/>}/>
                <Route path={PATH. CHECK_IN} render={() => <CheckIn/>}/>
                <Route path={PATH. PROFILE} render={() => <Profile/>}/>
                <Route path={PATH. TESTING} render={() => <Testing/>}/>
                <Route path={PATH.  PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH. ENTERING_NEW_PASSWORD} render={() => <EnteringNewPassword/>}/>

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
