export const loginUser = async (data)  =>{
    const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data),
    }); 
    const res = await response.json(); 
    return res; 
} 

export const signUpUser = async (data) => {
    const response = await fetch("http://localhost:4000/sign-up", {
        method: "POST",
        headers: {"Content-type": "application/json; charset=UTF-8"},
        body: JSON.stringify(data),
    }); 
    const res = await response.json(); 
    return res; 
} 