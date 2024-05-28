export const startSession= (user,jwt)=>{
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem("jwt",jwt)
}