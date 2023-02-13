export const emailValidCheck =(email)=>{
    // console.log(obj.email.includes("@"));

    if(!email.includes("@")){
        throw new Error("email 형식이 올바르지 않습니다.");
    } 
}

export const passwordValidCheck =(password)=>{
    // console.log(obj.password.length>=8);

    if(password.length<8){
        throw new Error("비밀번호는 8자 이상입니다.");
    }  
}