import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoWrapper = () => {
  const [tasks, setTasks] = useState([]);

  async function postRequest(data) {
    try {
      await fetch(
        "https://api.elchocrud.pro/api/v1/870d5208017f08644bcfce034aa0788f/todoList",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      toast.success("Успешно Добавлено POST запрос");
      getRequest();
    } catch (error) {
      toast.error(" Error");
      console.log(error);
    }
  }

  async function getRequest() {
    try {
      const response = await fetch(
        "https://api.elchocrud.pro/api/v1/870d5208017f08644bcfce034aa0788f/todoList"
      );
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteRequest(id) {
    try {
      await fetch(
        `https://api.elchocrud.pro/api/v1/870d5208017f08644bcfce034aa0788f/todoList/${id}`,
        {
          method: "DELETE",
        }
      );
      getRequest();
      toast.error("Успешно удалено");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <div>
      <TodoForm postRequest={postRequest} />
      <TodoList tasks={tasks} deleteRequest={deleteRequest} />
      <ToastContainer />
    </div>
  );
};

export default TodoWrapper;
