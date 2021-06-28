import React from "react";
import {Route, useParams} from "react-router-dom";

function EnteringNewPassword() {

    let { token } = useParams<{token: string}>();
    console.log(token);
    return (
        <Route
            path="/entering-new-password/:token"
            render={({ match }) => {
                // Do whatever you want with the match...
                return <div />;
            }}
        />
    );
}

export default EnteringNewPassword;
