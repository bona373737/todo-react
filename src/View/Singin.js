import axios from 'axios';
import { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import CommonForm from '../components/CommonForm';

const SinginContainer = styled.div`
    width: 600px;
    margin: auto;

    .top{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0;
    }
`;

const Singin =()=>{
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("LOGIN_JWT")){
            navigate("/todo")
        }
    },[])

    const handleSignIn=async(e)=>{
        e.preventDefault();
        // console.log(e.target.email.value);
        // console.log(e.target.password.value);
        const inputValue ={
            email : e.target.email.value,
            password: e.target.password.value
        };
        
        //로그인요청api전송->응답받은 JWT는 로컬 스토리지에 저장하고 "/todo"로 이동 
        await axios({
            method: 'post',
            url: '/auth/signin',
            data: inputValue
          })
          .then((data)=>{
            // console.log(data)
            localStorage.setItem("LOGIN_JWT",data.data.access_token)
            navigate("/todo")
          })
          .catch((error)=>{
            console.log(error)
          })
    }

    return(
        <SinginContainer>
            <div className='top'>
                <h1 className='title'>Sign In</h1>
                <NavLink to="/signup">Sign Up</NavLink>
            </div>
            <CommonForm btnName="Sign In" btnId="signin-button"  onSubmitEvent={handleSignIn}></CommonForm>
        </SinginContainer>
    )
}
export default Singin;