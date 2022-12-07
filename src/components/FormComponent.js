import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "src/store/todo-list-slice";


const FormComponent = () => {
  const todoRef = useRef();
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newTodo = {todo: todoRef.current.value};
    dispatch(todoActions.addTodo(newTodo));
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
