import React, { useEffect, useState } from "react";
import { authAPI } from "../api/api";
import { authThunk } from "../bll/authReducer";
import { useDispatch } from "react-redux";
import { AuthRedirectComponent } from "../hoc/AuthRedirectComponent";

function Profile() {
  const dispatch = useDispatch();

  useEffect(() => {
    // authAPI.authMe().then((res) => console.log(res));
    dispatch(authThunk());
  }, []);

  return <div>Profile</div>;
}

export default AuthRedirectComponent(Profile);
