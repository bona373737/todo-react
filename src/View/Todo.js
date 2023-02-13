import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const TodoContainer =styled.div`

`;


const Todo =()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem("LOGIN_JWT")){
            navigate("/signin")
        }
    },[])

    return(
        <TodoContainer>
            <form>
                <input data-testid="new-todo-input" />
                <button data-testid="new-todo-add-button">추가</button>
            </form>

        <ul>
            <li>
            <label>
                <input type="checkbox" />
                <span>TODO 1</span>
                <button data-testid="modify-button">수정</button>
                <button data-testid="delete-button">삭제</button>
            </label>
            </li>
            <li>
            <label>
                <input type="checkbox" />
                <input data-testid="modify-input" />
                <button data-testid="submit-button">제출</button>
                <button data-testid="cancel-button">취소</button>
            </label>
            </li>
        </ul>
        </TodoContainer>
    )
}
export default Todo;