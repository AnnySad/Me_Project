// import { ComponentType } from "react";
// import { connect, useSelector } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { AppStoreType } from "../bll/store";

// type mapStateType = {
//   isAuth: boolean;
// };

// // let mapStateForAuth = (state: RootReduxState): mapStateType => {
// //   return { isAuth: state.auth.isAuth };
// // };

// export function AuthRedirectComponent<T>(Component: ComponentType<T>) {
//   let mapStateForAuth = useSelector<AppStoreType, any>((state) => state.auth.isAuth);
//   const RedirectComponent = (props: mapStateType) => {
//     let { isAuth, ...restProps } = props;
//     return !props.isAuth ? <Redirect to={"/login"} /> : <Component {...(restProps as T)} />;
//   };

//   let ConnetedAuthRedirectComponent = connect<mapStateType>(mapStateForAuth)(RedirectComponent);

//   return ConnetedAuthRedirectComponent;
// }

import { ComponentType } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStoreType } from "../bll/store";

type mapStateType = {
  isAuth: boolean;
};

let mapStateForAuth = (state: AppStoreType): mapStateType => {
  return { isAuth: state.auth.isAuth };
};

export function AuthRedirectComponent<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: mapStateType) => {
    let { isAuth, ...restProps } = props;
    console.log("isAuth: ", isAuth);
    return !props.isAuth ? <Redirect to={"/login"} /> : <Component {...(restProps as T)} />;
  };

  let ConnetedAuthRedirectComponent = connect(mapStateForAuth)(RedirectComponent);

  return ConnetedAuthRedirectComponent;
}
