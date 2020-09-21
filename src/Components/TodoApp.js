import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Todolist from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  // const initialTodos = [
  //   { id: uuidv4(), task: "Eat breakfast", completed: false },
  //   { id: uuidv4(), task: "Create porfolio", completed: false },
  //   { id: uuidv4(), task: "Create more projects", completed: false },
  // ];
  const [todos, setTodos] = useState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  });

  const addTodo = (newTodoText) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: newTodoText,
        completed: false,
      },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, updatedText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task: updatedText } : todo
    );
    setTodos(updatedTodos);
  };
  return (
    <Paper
      style={{ backgroundColor: "#b5bbbf", height: "100vh" }}
      elevation={0}>
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <ToolBar>
          <Typography color="inherit">Todo App React</Typography>
        </ToolBar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <Todolist
            todos={todos}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}
