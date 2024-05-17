const URL = import.meta.env.PUBLIC_URL_PATH; 
console.log("The URL is:", URL);
export default async function userLogin(email: string, password: string) {
    console.log("The URL is:", URL);
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    };
    console.log("The URL is:", URL);
    try {
        console.log("The URL is:", URL);
        const result = await fetch(`${URL}/user/login`, options);
        const user = await result.json();
        if(user.error) console.error(user.error);
        console.log(`Usuario ${user.name} ha iniciado sesión correctamente`);
        return user; 
    } catch (error:any) {
        console.error("Error en login:", error);
        return {error: error.message}
    }
}
