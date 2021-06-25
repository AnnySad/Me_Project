import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true

})

// api
export const API = {

    createLogin(payload: any) {
        const promise = instance.post<any>('auth/login', payload);
        return promise;
    }
}




