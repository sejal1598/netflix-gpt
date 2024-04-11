export const checkValidation = (email ,password)=>{
    const isEmailValid =/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
    if(!isEmailValid) return "Email is not valid"
    if(!isPasswordValid) return "password is not valid"
    return null
}