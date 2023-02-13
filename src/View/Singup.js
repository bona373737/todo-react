import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import CommonForm from '../components/CommonForm';

const SingupContainer = styled.div`
    width: 600px;
    margin: auto;
    
    h1{
        color: #4B0082;
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
        let response
        try {
            response =  await axios({
                method: 'post',
                url: 'https://pre-onboarding-selection-task.shop/auth/signup',
                headers: { "Content-Type": `application/json`},
                data: inputValue
              })
        } catch (error) {
            console.log(error)
        }
        console.log(response);
       
    }


    return(
        <SingupContainer>
            <h1 className='title'>Sign Up</h1>
            <CommonForm btnName="Sing Up" onSubmitEvent={handleSignUp}></CommonForm>
        </SingupContainer>
    )

}
export default Singup;