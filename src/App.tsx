import "./App.css";
import AddNewTodoBox from "./components/AddBox/AddNewTodoBox";
import StatusColumn from "./components/Column/ListStatusColumn";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AddNewTodoBox />
      <StatusColumn />
    </div>
  );
}

export default App;
