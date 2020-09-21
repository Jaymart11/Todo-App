import React from "react";
import useInputState from "../Hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

export default function EditTodoForm({ task, toggle, updateTodo, id }) {
  const [value, handleChange] = useInputState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTodo(id, value);
    toggle();
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={{ width: "100%", display: "flex" }}>
        <TextField
          style={{ width: "100%", margin: "0 0.5rem" }}
          value={value}
          onChange={handleChange}
          autoFocus
        />
        <Button
          variant="contained"
          style={{
            backgroundColor: "green",
            color: "white",
            marginRight: "0.5rem",
          }}
          type="submit">
          Save
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "red",
            color: "white",
          }}
          onClick={toggle}>
          Cancel
        </Button>
      </form>
    </>
  );
}
