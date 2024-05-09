/* import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";

interface TodoProps {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

const Todo: React.FC = () => {
  const [todo, setTodo] = useState<TodoProps>({
    id: 0,
    title: "",
    description: "",
    dueDate: "",
  });
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleAddTodo = (values: TodoProps) => {
    if (isEditing) {
      // Update existing todo
      const updatedTodos = todos.map((t) => (t.id === todo.id ? values : t));
      setTodos(updatedTodos);
      setIsEditing(false);
    } else {
      // Add new todo
      const newTodo: TodoProps = {
        ...values,
        id: todos.length + 1,
      };
      setTodos([...todos, newTodo]);
    }

    setTodo({
      id: 0,
      title: "",
      description: "",
      dueDate: "",
    });
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEditTodo = (id: number) => {
    let todoEdit = todos.find((todo) => todo.id === id);
    if (todoEdit) {
      setTodo(todoEdit);
      setIsEditing(true);
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    dueDate: Yup.string().required("Due Date is required"),
  });

  console.log(todos, "success");

  return (
    <div className="container text-center">
      <h1>Todo List</h1>
      <Formik
        initialValues={todo}
        validationSchema={validationSchema}
        onSubmit={(values) => handleAddTodo(values)}
      >
        {({ errors, touched, handleChange, handleBlur }) => (
          <Form className="shadow px-4 py-3 rounded mb-4">
            <div className="form-group">
              <label className="form-label">Title:</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {errors.title && touched.title && (
                <p className="text-danger">{errors.title}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Description:</label>
              <input
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {errors.description && touched.description && (
                <p className="text-danger">{errors.description}</p>
              )}
            </div>
            <div className="form-group">
              <label className="form-label">Due Date:</label>
              <input
                type="date"
                name="dueDate"
                onChange={handleChange}
                onBlur={handleBlur}
                className="form-control"
              />
              {errors.dueDate && touched.dueDate && (
                <p className="text-danger">{errors.dueDate}</p>
              )}
            </div>
            <div className="">
              <button type="submit" className="btn btn-success mt-3">
                {isEditing ? "Update Todo" : "Add Todo"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <ul>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.description}</td>
                <td>{todo.dueDate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm me-2"
                    onClick={() => handleDeleteTodo(todo.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={() => handleEditTodo(todo.id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ul>
    </div>
  );
};

export default Todo;
 */

import React, { useState } from "react";

interface Todo {
  id: number;
  title: string;
  description: string;
  dueDate: string;
}

const TodoApp: React.FC = () => {
  const [todo, setTodo] = useState<Todo>({
    id: 0,
    title: "",
    description: "",
    dueDate: "",
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const handleAddTodo = () => {
    if (
      todo.title.trim() !== "" &&
      todo.description.trim() !== "" &&
      todo.dueDate.trim() !== ""
    ) {
      if (isEditing) {
        // Update existing todo
        const updatedTodos = todos.map((t) => (t.id === todo.id ? todo : t));
        setTodos(updatedTodos);
        setIsEditing(false);
      } else {
        // Add new todo
        const newTodo: Todo = {
          ...todo,
          id: todos.length + 1,
        };
        setTodos([...todos, newTodo]);
      }
      setTodo({
        id: 0,
        title: "",
        description: "",
        dueDate: "",
      });
    }
  };

  const handleEditTodo = (id: number) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    if (todoToEdit) {
      setTodo(todoToEdit);
      setIsEditing(true);
    }
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container text-center">
      <h1>Todo List</h1>
      <div className="shadow px-4 py-3 rounded mb-4">
        <div className="form-group">
          <label className="form-label">Title:</label>
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Description:</label>
          <input
            type="text"
            name="description"
            value={todo.description}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={todo.dueDate}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <button onClick={handleAddTodo} className="btn btn-success mt-3">
          {isEditing ? "Update Todo" : "Add Todo"}
        </button>
      </div>
      <ul>
        {todos?.length > 0 && (
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.title}</td>
                  <td>{todo.description}</td>
                  <td>{todo.dueDate}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm me-2"
                      onClick={() => handleDeleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => handleEditTodo(todo.id)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </ul>
    </div>
  );
};

export default TodoApp;
