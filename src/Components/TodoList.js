import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";

export default function TodoList({ todos, deleteTodo, updateTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo) => (
            <div key={todo.id}>
              <Todo
                task={todo.task}
                id={todo.id}
                completed={todo.completed}
                deleteTodo={deleteTodo}
                updateTodo={updateTodo}
              />
              <Divider />
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}
