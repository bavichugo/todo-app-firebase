import "./App.scss";
import NavBar from "./components/NavBar";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <>
      <NavBar />
      <Container className="mt-4">
        <Form>
          <Stack direction="horizontal" gap={3}>
            <Form.Control
              className="me-auto"
              placeholder="Add your item here..."
            />
            <Button variant="primary">Submit</Button>
          </Stack>
        </Form>
      </Container>
    </>
  );
}

export default App;
