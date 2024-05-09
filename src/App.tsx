import React from "react";
import "./App.css";
import AddForm from "./app/components/AddForm";
import Todo from "./app/components/Todo";
import SignupForm from "./app/components/SignUp";

function App() {
  const handleActionChange = () => {};
  return (
    <div className="">
      {/* <AddForm /> */}
      <Todo />
      {/* <SignupForm handleActionChange={handleActionChange} /> */}
    </div>
  );
}

export default App;
