import React from "react";
import { Radio } from "antd";
import { STATUS } from "../../config/status";

const ToDoFilter = (props) => {
  const { filterStatus, onFilterStatus } = props;

  const handleStatusChange = (e) => {
    const value = e.target.value;
    onFilterStatus && onFilterStatus(value);
  };

  return (
    <div className="todo-filter">
      <Radio.Group value={filterStatus} onChange={handleStatusChange}>
        <Radio.Button value={`${STATUS.IS_CREATE}, ${STATUS.IS_DONE}`}>
          全部
        </Radio.Button>
        <Radio.Button value={`${STATUS.IS_CREATE}`}>未完成</Radio.Button>
        <Radio.Button value={`${STATUS.IS_DONE}`}>完成</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default ToDoFilter;
