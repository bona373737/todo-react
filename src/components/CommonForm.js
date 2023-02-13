import { useState } from "react";
import styled from "styled-components";
import {emailValidCheck, passwordValidCheck} from '../utils/validCheck';

const FormContainer = styled.form`
    width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .input_wrap{
        width: 100%;
        margin: 10px 0;
        
        input{
            width: 100%;
            height: 30px;
            border-radius: 8px;
            text-indent: 10px;
        }
    }
    button{
        width: 100px;
        height: 30px;
        border-radius: 8px;
        margin: 10px;
        background-color: #4B0082;
        color: white;
    }

`;

const CommonForm =({btnName,onSubmitEvent})=>{
    const [btnStatus, setBtnStatus] = useState(false)

    const onChangeEmail=(e)=>{
        setBtnStatus(false);
        try {
            emailValidCheck(e.target.value)
        } catch (error) {
            setBtnStatus(true);
        }
    }
    const onChangePassword=(e)=>{
        setBtnStatus(false);
        try {
            passwordValidCheck(e.target.value)
        } catch (error) {
            setBtnStatus(true);
        }
    }


    return(
        <FormContainer onSubmit={onSubmitEvent}>
            <div className="input_wrap">
                <label htmlFor="email">email</label>
                <input id="email" data-testid="email-input" onChange={onChangeEmail} />
            </div>
            <div className="input_wrap">
                <label htmlFor="password">password</label>
                <input id="password" data-testid="password-input" onChange={onChangePassword}  />
            </div>
            <button data-testid="signup-button" disabled={btnStatus}>{btnName}</button>
        </FormContainer>
    )
}
export default CommonForm;