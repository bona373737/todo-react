import { createGlobalStyle } from 'styled-components';
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${ reset };

    :root{
        --fontBig :60px; 
        --fontMiddle : 16px;
        --mainColor : #4B0082;
    }
        
    li{
        list-style: none;
    }

    .title{
        font-size: var(--fontBig);
        font-weight: bolder;
        color: var(--mainColor)
    }

    .btn{
        width: 100px;
        height: 30px;
        border: none;
        border-radius: 6px;
        margin: 10px;
        background-color: var(--mainColor);
        color: white;
        cursor: pointer;
    }

    .style_input{
        width: 100%;
        height: 30px;
        border-radius: 6px;
        text-indent: 10px;
        border: 0.2px solid var(--mainColor);
        outline: none;
    }
`
export default GlobalStyles;