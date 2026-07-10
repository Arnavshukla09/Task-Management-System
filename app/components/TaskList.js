'use client';

import { toggleTaskStatus } from '../actions/tasks';
import { useTransition } from 'react';

export default function TaskList({ tasks }) {
  const [isPending, startTransition] = useTransition();

  const handleToggle = (taskId, currentStatus) => {
    startTransition(() => {
      toggleTaskStatus(taskId, currentStatus);
    });
  };

  if (!tasks || tasks.length === 0) {
    return <div className="no-tasks">No tasks assigned yet.</div>;
  }

  return (
    <div className="table-responsive">
      <table className="task-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Employee Name</th>
            <th>Task Title</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.ID} className={task.Completed ? 'completed-row' : ''}>
              <td>#{task.ID}</td>
              <td className="employee-name">{task.Employee_Name}</td>
              <td>
                <span className="task-badge">{task.Task_Title}</span>
              </td>
              <td>
                <span className={`status-badge ${task.Completed ? 'completed' : 'pending'}`}>
                  {task.Completed ? 'Completed' : 'Pending'}
                </span>
              </td>
              <td>
                <label className="toggle-switch">
                  <input 
                    type="checkbox" 
                    checked={!!task.Completed} 
                    onChange={() => handleToggle(task.ID, task.Completed)}
                    disabled={isPending}
                  />
                  <span className="slider round"></span>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
