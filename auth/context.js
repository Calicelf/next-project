import React, {useState, createContext, useContext, useEffect} from "react";
import api from "./axios";
import Router from "next/router";
import {setCookie, removeCookie, getCookieFromBrowser} from "./cookies";
import jwt from "jwt-decode";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const login = async(username, password) => {
        const {data: token} = await api.post("/api/login", {
            username,
            password
        })

        if(token) {
            setCookie("token", token);
            api.defaults.headers.Authorization = `Bearer ${token}`;
            const userData = jwt(token);
            const {data: user} = await api.get(`/api/user/${userData._id}`);
            setUser(user);
            await Router.push("/")
        }
    }
       

    const logout = () => {
        removeCookie("token");
        setUser(null);
        Router.push("/");
    }

    return(
        <AuthContext.Provider value={{isAuthenticated: !!user, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}

export default function useAuth() {
    return useContext(AuthContext);
}