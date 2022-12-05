import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef } from "react";


const FormComponent = () => {
  const todoRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    // TODO: obtain todo string value and add it to list to be rendered
    // TODO: install redux and start putting the logic for the server there
    // todoRef.current.value 
    todoRef.current.value = "";
  }

  return (
    <Form onSubmit={onSubmitHandler}>
      <Stack direction="horizontal" gap={3}>
        <Form.Control ref={todoRef} type="text" placeholder="Type your todo here" />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Stack>
    </Form>
  );
};

export default FormComponent;
