import { useState } from "react";
import { Container } from "react-bootstrap";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Alert from "./components/Alert";
import AppButton from "./components/AppButton";
import Counter from "./components/Counter";
import NewNote from "./components/NewNote";
import TodoList from "./components/TodoList";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  let items = ["A", "B", "C"];

  const handleSelect = (item: string) => {
    console.log(item);
  };

  return (
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
    // <div className="App">
    //   {/* <TodoList items={items} heading="Cities" onSelectItem={handleSelect} /> */}
    //   {showAlert && (
    //     <Alert onClose={() => setShowAlert(false)}>
    //       Hello <span>World</span>
    //     </Alert>
    //   )}
    //   <AppButton
    //     title="Click"
    //     color="secondary"
    //     onClick={() => setShowAlert(true)}
    //   />
    // </div>
  );
}

export default App;
