import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);

  const [input, setInput] = useState("");
  //when the app loads fetch the data from the firebase datbase

  useEffect(() => {
    //this code here fires when the app loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []); //if you leave the array empty it will run once
  //if we put input into the array then it fires when ever the input changes(dependencies)

  const addTodo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); //prevent from refreshing the page

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // setTodos([...todos, input]); //spread operator will overwrite the string
    setInput(""); //clear the input field
  };

  return (
    <div className="App">
      <h1> Daily Tasks</h1>
      <form className="form">
        <FormControl>
          <InputLabel>Write todo</InputLabel>
          <Input
            value={input} //set the value to input state
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          onClick={addTodo}
          variant="contained"
          color="secondary"
          disabled={!input} //disabled the button when nothing is type
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
