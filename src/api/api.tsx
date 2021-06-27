import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:7542/2.0/",
  withCredentials: true,
});
const message = `<div style="background-color: lime; padding: 15px">	
	password recovery link: 
	<a href='http://localhost:3000/#/set-new-password/$token$'>
	link</a></div>`
// api
export const API = {
  createLogin(payload: any) {
    const promise = instance.post<any>("auth/login", payload);
    return promise;
  },

  checkIn(email: string, password: string) {
    return instance.post("auth/register", { email, password });
  },
  forgot(email: string, from: string) {
    return instance.post("auth/forgot",  {email, from, message} );
  },
  setNewPassword(password:string, 	resetPasswordToken: string	) {
    return instance.post("auth/set-new-password",  {password,resetPasswordToken} );
  },
};

