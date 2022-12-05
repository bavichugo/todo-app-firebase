import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const todoTemp = [{ todo: "something" }, { todo: "else" }];

const TodoList = (props) => {
  const onClickCompleteHandler = () => {
    // TODO: add complete logic
  }

  const onClickDeleteHandler = () => {
    // TODO: add delete logic
  }

  return (
    <ListGroup>
      {todoTemp.map((todo) => (
        <ListGroup.Item className="d-flex align-items-center justify-content-between">
          {todo.todo}
          <div className="todo-list__buttons-container">
            <Button className="me-3" variant="success" onClick={onClickCompleteHandler}>
              Complete
            </Button>
            <Button variant="danger" onClick={onClickDeleteHandler}>Delete</Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
