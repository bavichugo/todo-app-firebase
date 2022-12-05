import "./App.scss";
import NavBar from "./components/layout/NavBar";
import Container from "react-bootstrap/Container";
import FormComponent from "./components/FormComponent";
import TodoList from "./components/TodoList";
import Stack from "react-bootstrap/Stack";

function App() {
  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <Stack gap={3}>
          <FormComponent />
          <TodoList />
        </Stack>
      </Container>
    </>
  );
}

export default App;
