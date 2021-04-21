import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import "./Todo.css";
import db from "./firebase";

function Todo(props) {
  return (
    <div className="card">
      {/* <li>{props.text}</li> */}

      <Card>
        <CardContent>
          <Typography className="text" color="textSecondary">
            {props.text.todo}
          </Typography>
        </CardContent>
        <DeleteForeverIcon
          onClick={(event) =>
            db.collection("todos").doc(props.text.id).delete()
          }
        />
      </Card>
    </div>
  );
}

export default Todo;
