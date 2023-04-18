import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import {AiOutlineLogout} from 'react-icons/ai' 

const TodoContainer = styled.div`
    width: 600px;
    margin: auto;

    .top{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0;

        svg{
            font-size: 26px;
            cursor: pointer;
            color: var(--mainColor);
        }
    }

    .todo_contents{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .add_todo{
            width: 100%;
            border-radius: 8px;
            margin: 20px 0;
            display: flex;
            align-items: center;
        }
    
        li{
            width: 100%;
            label{
                width:100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .todo_wrap{
                    .item{
                        flex: 1;
                    }
                }
                .submit_btn,.cancle_btn{
                    display: none;
                }
            }
        
        }
    }

`;

const Todo =()=>{
    const navigate = useNavigate();
    const [todoList, setTodoList]= useState();
    const inputRef = useRef(null);

    

    const handleComplete = async(e)=>{
        let res;
        try {
            res = await axios({
                method: 'put',
                url: `/todos/${e.currentTarget.dataset.no}`,
                data: {
                    "todo": e.currentTarget.dataset.todo,
                    "isCompleted": e.currentTarget.checked
                },
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("LOGIN_JWT")}`,
                    "Content-Type": "application/json"
                }
              })
        } catch (error) {
            console.log(error)
        }
    }

    const editMode=(e)=>{
        let index = e.currentTarget.dataset.index;
        inputRef.current.children[index].children[0].children[1].readOnly=false;
        inputRef.current.children[index].children[0].children[2].style.display="none";
        inputRef.current.children[index].children[0].children[3].style.display="block";
        inputRef.current.children[index].children[0].children[4].style.display="none";
        inputRef.current.children[index].children[0].children[5].style.display="block";
    }

    const updateTodo = async(e)=>{
        let index = e.currentTarget.dataset.index;
        let inputValue = inputRef.current.children[index].children[0].children[1].value;
        let ischecked = inputRef.current.children[index].children[0].children[0].checked;

        let res;
        try {
            res = await axios({
                method: 'put',
                url: `/todos/${e.currentTarget.dataset.no}`,
                data: {
                    "todo": inputValue,
                    "isCompleted": ischecked
                },
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("LOGIN_JWT")}`,
                    "Content-Type": "application/json"
                }
              })
        } catch (error) {
            console.log(error)
        }
        inputRef.current.children[index].children[0].children[1].readOnly=true;
        inputRef.current.children[index].children[0].children[2].style.display="block";
        inputRef.current.children[index].children[0].children[3].style.display="none";
        inputRef.current.children[index].children[0].children[4].style.display="block";
        inputRef.current.children[index].children[0].children[5].style.display="none";
    }

    const deleteTodo = async(e)=>{
        let id = e.currentTarget.dataset.no
        console.log(id);
        try {
            await axios({
                method: 'delete',
                url: `/todos/${id}`,
                headers:{
                    Authorization:`Bearer ${localStorage.getItem("LOGIN_JWT")}`
                }
              })
        } catch (error) {
            console.log(error)
        }

        setTodoList((data)=>{
            console.log(data)
            return data.filter((todo)=>todo.id !== Number(id));
        })
    }

    const editCancle=(e)=>{
        let index = e.currentTarget.dataset.index;
        
        let defaultValue = inputRef.current.children[index].children[0].children[1].defaultValue;
        inputRef.current.children[index].children[0].children[1].value = defaultValue;

        inputRef.current.children[index].children[0].children[1].readOnly=true;
        inputRef.current.children[index].children[0].children[2].style.display="block";
        inputRef.current.children[index].children[0].children[3].style.display="none";
        inputRef.current.children[index].children[0].children[4].style.display="block";
        inputRef.current.children[index].children[0].children[5].style.display="none";

    }

    const logout=()=>{
        if(localStorage.getItem("LOGIN_JWT")){
            localStorage.removeItem("LOGIN_JWT")
            navigate("/signin")
        }
    }

    useEffect(()=>{
        if(!localStorage.getItem("LOGIN_JWT")){
            navigate("/signin")
        }
        getTodoList();

    },[])

    return(
        <TodoContainer>
            <div className="top">
                <h1 className="title">MY TODO</h1>
                <div onClick={logout}><AiOutlineLogout/></div>
            </div>
            <section className="todo_contents">
                <form className="add_todo" onSubmit={createTodo}>
                    <input className="style_input" id="newTodo" data-testid="new-todo-input" />
                    <button className="btn" data-testid="new-todo-add-button">추가</button>
                </form>
                <ul ref={inputRef}>
                {
                    todoList&&
                    todoList.map((todo,index)=>{
                        return(
                            <li key={todo.id}>
                            <label>
                                <input type="checkbox" data-todo={todo.todo} data-no={todo.id} onClick={handleComplete} defaultChecked={todo.isCompleted}/>
                                <input type="text" className="style_input item"defaultValue={todo.todo}  data-testid="modify-input" readOnly/>
                                <button className="btn" data-testid="modify-button" data-no={todo.id} data-index={index} onClick={editMode}>수정</button>
                                <button className="btn submit_btn" data-testid="submit-button"  data-no={todo.id} data-index={index} onClick={updateTodo}>제출</button>
                                <button className="btn" data-index={index} data-testid="delete-button" data-no={todo.id} onClick={(e)=>deleteTodo(e)}>삭제</button>
                                <button className="btn cancle_btn" data-testid="cancel-button" data-index={index} onClick={editCancle}>취소</button>
                                {/* <>
                                </> */}
                            </label>
                            </li>
                        )
                    })
                }
                </ul>
            </section>
        </TodoContainer>
    )
}
export default Todo;