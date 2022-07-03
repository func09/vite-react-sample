import { List } from "antd";
import { CheckCircleTwoTone, CloseCircleTwoTone } from "@ant-design/icons";
import { STATUS } from "../../config/status";

const ToDoContainer = (props) => {
  const { todos = [], onOperate, filterStatus } = props;
  const handleOperate = (operate, item) => {
    switch (operate) {
      case "is-delete":
        onOperate &&
          onOperate({
            ...item,
            status: STATUS.IS_DELETE,
          });
        break;
      case "is-done":
        onOperate &&
          onOperate({
            ...item,
            status:
              item.status === STATUS.IS_DONE
                ? STATUS.IS_CREATE
                : STATUS.IS_DONE,
          });
        break;
      default:
        break;
    }
  };

  const showTodos = todos.filter((todo) => {
    console.log(todo)
    return (
      todo.status !== STATUS.IS_DELETE &&
      filterStatus.indexOf(todo.status.toString()) > -1
    );
  });

  return (
    <div className="todo-container">
      <div>ToDoContainer</div>
      <List
        dataSource={showTodos}
        renderItem={(item) => (
          <List.Item
            className={
              item.status === STATUS.IS_DONE
                ? "todo-container-list-done"
                : "todo-container-list"
            }
          >
            {item.content}
            <div className="todo-item-operat">
              {item.status === STATUS.IS_DONE ? (
                ""
              ) : (
                <CheckCircleTwoTone
                  onClick={() => handleOperate("is-done", item)}
                />
              )}
              <CloseCircleTwoTone
                onClick={() => handleOperate("is-delete", item)}
              />
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ToDoContainer;
