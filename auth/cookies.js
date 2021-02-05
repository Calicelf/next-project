import cookie from "js-cookie";

export const setCookie = (key, value) => {
    if(process.browser){
        cookie.set(key, value, {
            expires: 2,
            path: "/"
        })
    }
}

export const removeCookie = (key) => {
    if(process.browser) {
        cookie.remove(key)
    }
}

export const getCookieFromBrowser = (key) => {
    return cookie.get(key)
}

export const getCookieFromServer = (key, request) => {
    if(!request.headers.cookie) {
        return undefined;
    }
    const rawCookie = req.headers.cookie.split(";").find(c => c.trim().startsWith(`${key}=`));
    if(!rawCookie) {
        return undefined;
    }
    return rawCookie.split("=")[1];
}