export const checkSession = async ()  =>{
    const response = await fetch("http://localhost:4000/check-session", {
        method: "GET",
        credentials: "include",
    }); 
    const res = await response.json(); 
    return res; 
} 

export const loginUser = async (data)  =>{
    const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data),
    }); 
    const res = await response.json(); 
    return res; 
} 

export const signUpUser = async (data) => {
    const response = await fetch("http://localhost:4000/sign-up", {
        method: "POST",
        credentials: "include",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data),
    }); 
    const res = await response.json(); 
    return res; 
} 


export const logoutUser = async () => {
    const response = await fetch("http://localhost:4000/logout", {
        method: "GET",
        credentials: "include",
    }); 
    const res = await response.json(); 
    return res; 
}