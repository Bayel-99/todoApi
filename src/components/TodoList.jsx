import React from "react";
import styled from "styled-components";

const ListContainer = styled.div`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 20px;
`;

const TaskItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin: 8px 0;
  background: #f3f4f6;
  border-radius: 8px;
  border: 1px solid #e2e2e2;
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #e9e9e9;
    transform: translateY(-2px);
  }

  &:last-child {
    border-bottom: none;
  }
`;

const TaskText = styled.span`
  font-size: 16px;
  color: #333;
  flex: 1;
  margin-right: 20px;
`;

const DeleteButton = styled.button`
  padding: 8px 12px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ff1a1a;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const TodoList = ({ tasks, deleteRequest }) => {
  const deleteHandler = (_id) => {
    deleteRequest(_id);
  };

  return (
    <ListContainer>
      <Title>Todo List</Title>
      {tasks.map((item) => (
        <TaskItem key={item._id}>
          <TaskText>{item.inputValue}</TaskText>
          <DeleteButton onClick={() => deleteHandler(item._id)}>
            Delete
          </DeleteButton>
        </TaskItem>
      ))}
    </ListContainer>
  );
};

export default TodoList;
