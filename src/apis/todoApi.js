import httpClient from './httpClient'

export const getTodoList = async()=>{
  let res;
  try {
      res = await axios({
          method: 'get',
          url: '/todos',
          headers:{
              Authorization:`Bearer ${localStorage.getItem("LOGIN_JWT")}`
          }
        })
  } catch (error) {
      console.log(error)
  }
  // console.log(res);
  return res.data;
}

export const createTodo = async(e)=>{
  e.preventDefault();
  // console.log(e.target.newTodo.value);
  let res;
  try {
      res = await axios({
          method: 'post',
          url: '/todos',
          data: {
              "todo": e.target.newTodo.value
          },
          headers:{
              Authorization:`Bearer ${localStorage.getItem("LOGIN_JWT")}`
          }
        })
  } catch (error) {
      console.log(error)
  }
}