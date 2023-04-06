import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import AppButton from "./components/AppButton";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";

function App() {
  const [showAlert, setShowAlert] = useState(false);

  let items = ["A", "B", "C"];

  const handleSelect = (item: string) => {
    console.log(item);
  };

  return (
    <div className="App">
      {/* <TodoList items={items} heading="Cities" onSelectItem={handleSelect} /> */}
      {showAlert && (
        <Alert onClose={() => setShowAlert(false)}>
          Hello <span>World</span>
        </Alert>
      )}
      <AppButton
        title="Click"
        color="secondary"
        onClick={() => setShowAlert(true)}
      />
    </div>
  );
}

export default App;
