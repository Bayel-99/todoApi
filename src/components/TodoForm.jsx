import React, { useState } from "react";

const TodoForm = ({ postRequest }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const maxLength = 10;

  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > maxLength) {
      setError(`Максимальное количество символов: ${maxLength}`);
    } else {
      setError("");
      setInputValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      postRequest({
        inputValue,
      });
      setInputValue("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={inputValue}
          type="text"
          required
          maxLength={maxLength}
        />
        <button type="submit">Добавить</button>
      </form>
      {error && <span>{error}</span>}
    </div>
  );
};

export default TodoForm;
