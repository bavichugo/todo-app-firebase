import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "src/store/todo-list-slice";

const TodoList = () => {
  const todoList = useSelector((state) => state.todo.todoList);
  const dispatch = useDispatch();

  const onClickCompleteHandler = (id) => {
    dispatch(todoActions.completeTodo(id));
  }

  return (
    <ListGroup>
      {todoList.map((todo) => (
        <ListGroup.Item key={todo.id} className="d-flex align-items-center justify-content-between">
          {todo.todo}
            <Button className="me-1" variant="success" onClick={() => onClickCompleteHandler(todo.id)}>
              Complete
            </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
