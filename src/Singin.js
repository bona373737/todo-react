import styled from 'styled-components'

const SinginContainer = styled.div`

`;

const Singin =()=>{

    return(
        <SinginContainer>
            <h1>Sign In</h1>
            <label></label>
            <input data-testid="email-input" />
            <label></label>
            <input data-testid="password-input" />
            <button data-testid="signup-button">회원가입</button>
        </SinginContainer>
    )

}
export default Singin;