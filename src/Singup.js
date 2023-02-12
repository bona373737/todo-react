import styled from 'styled-components'

const SingupContainer = styled.div`

`;

const Singup =()=>{

    return(
        <SingupContainer>
            <h1>Sign Up</h1>
            <label></label>
            <input data-testid="email-input" />
            <label></label>
            <input data-testid="password-input" />
            <button data-testid="signup-button">회원가입</button>
        </SingupContainer>
    )

}
export default Singup;