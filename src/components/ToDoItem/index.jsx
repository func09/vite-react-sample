import { useState } from "react";
import { Input, Button } from "antd";
import { STATUS } from "../../config/status";

const ToDoItem = (props) => {
  const { onSubmit } = props;

  const [todoItem, setToDoItem] = useState({});

  const handelChange = (e) => {
    setToDoItem({
      id: Math.random(),
      content: e.target.value,
      status: STATUS.IS_CREATE,
    });
  };

  const handleSubmit = () => {
    onSubmit && onSubmit(todoItem);
  };
  return (
    <div className="todo-item-input">
      <Input
        value={todoItem.content}
        onPressEnter={handleSubmit}
        onChange={handelChange}
        placeholder="入力"
      />
      <Button size="large" type="primary" onClick={handleSubmit}>
        提出
      </Button>
    </div>
  );
};

export default ToDoItem;
