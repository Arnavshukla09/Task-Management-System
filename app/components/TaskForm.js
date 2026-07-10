'use client';

import { assignTask } from '../actions/tasks';
import { useRef, useState } from 'react';

export default function TaskForm({ titles }) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  
  async function handleSubmit(formData) {
    setLoading(true);
    await assignTask(formData);
    formRef.current?.reset();
    setLoading(false);
  }
  
  return (
    <form ref={formRef} action={handleSubmit} className="task-form">
      <div className="form-row">
        <div className="input-group">
          <label htmlFor="employee_name">Employee Name</label>
          <input 
            type="text" 
            id="employee_name" 
            name="employee_name" 
            placeholder="John Doe"
            required 
          />
        </div>
        
        <div className="input-group">
          <label htmlFor="task_title_id">Task Title</label>
          <select id="task_title_id" name="task_title_id" required defaultValue="">
            <option value="" disabled>Select a task</option>
            {titles.map((title) => (
              <option key={title.ID} value={title.ID}>
                {title.Title}
              </option>
            ))}
          </select>
        </div>
        
        <div className="input-group form-actions">
          <button type="submit" className="assign-btn" disabled={loading}>
            {loading ? 'Assigning...' : 'Assign Task'}
          </button>
        </div>
      </div>
    </form>
  );
}
