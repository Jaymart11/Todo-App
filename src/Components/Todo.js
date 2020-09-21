import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CheckBox from "@material-ui/core/Checkbox";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "../Hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

export default function Todo({ task, completed, deleteTodo, id, updateTodo }) {
  const [complete, handleToggle] = useToggle(completed);
  const [isEditting, toggle] = useToggle(false);

  return (
    <ListItem>
      {isEditting ? (
        <EditTodoForm
          task={task}
          toggle={toggle}
          updateTodo={updateTodo}
          id={id}
        />
      ) : (
        <>
          <CheckBox tabIndex={-1} checked={complete} onChange={handleToggle} />
          <ListItemText
            style={{
              textDecoration: complete ? "line-through" : "none",
              color: complete ? "red" : "black",
              transition: "all ease-in-out 300ms",
            }}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={toggle}>
              <EditIcon style={{ fill: "green" }} />
            </IconButton>
            <IconButton aria-label="Edit" onClick={() => deleteTodo(id)}>
              <DeleteIcon color="secondary" />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}
