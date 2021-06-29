import { useParams } from "react-router-dom";

function EnteringNewPassword() {
  let { token } = useParams<{ token: string }>();
  return (
    <div>
      <input type='email' placeholder={"Email"} />
      <input type='password' placeholder={"Password"} />
    </div>
  );
}

export default EnteringNewPassword;
