import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import CommonForm from '../components/CommonForm';

const SingupContainer = styled.div`
    width: 600px;
    margin: auto;

    h1{
        margin: 40px 0;
    }


`;

const Singup =()=>{
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("LOGIN_JWT")){
            navigate("/todo")
        }
    },[])

    const handleSignUp=async(e)=>{
        e.preventDefault();
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
     
        const inputValue ={
            email: e.target.email.value,
            password: e.target.password.value
        };
        
        //회원가입 api전송
        let response;
        try {
            response =  await axios({
                method: 'post',
                url: '/auth/signup',
                data: inputValue
              })
        } catch (error) {
            console.log(error)
        }
        if(response.status===201){
            alert(`${inputValue.email}님 회원가입 되었습니다.`)
            navigate("/signin")
        }
    }


    return(
        <SingupContainer>
            <h1 className='title'>Sign Up</h1>
            <CommonForm btnName="Sing Up" onSubmitEvent={handleSignUp}></CommonForm>
        </SingupContainer>
    )

}
export default Singup;