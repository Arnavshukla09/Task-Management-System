'use server';

import db from '@/lib/db';
import { revalidatePath } from 'next/cache';

// Fetch all Task Titles for the dropdown
export async function getTaskTitles() {
  return db.prepare('SELECT * FROM Task_Titles').all();
}

// Fetch all Tasks with their Titles (SQL Join)
export async function getTasks() {
  const query = `
    SELECT 
      t.ID, 
      t.Employee_Name, 
      t.Completed, 
      tt.Title as Task_Title
    FROM Task_Management t
    JOIN Task_Titles tt ON t.Task_Title_ID = tt.ID
    ORDER BY t.ID DESC
  `;
  return db.prepare(query).all();
}

// Assign a new task
export async function assignTask(formData) {
  const employeeName = formData.get('employee_name');
  const taskTitleId = formData.get('task_title_id');
  
  if (!employeeName || !taskTitleId) {
    return { error: 'Missing required fields' };
  }
  
  try {
    const stmt = db.prepare('INSERT INTO Task_Management (Employee_Name, Task_Title_ID) VALUES (?, ?)');
    stmt.run(employeeName, parseInt(taskTitleId, 10));
    revalidatePath('/');
    return { success: true };
  } catch (err) {
    return { error: 'Failed to assign task' };
  }
}

// Toggle task status
export async function toggleTaskStatus(taskId, currentStatus) {
  try {
    const stmt = db.prepare('UPDATE Task_Management SET Completed = ? WHERE ID = ?');
    stmt.run(currentStatus ? 0 : 1, taskId);
    revalidatePath('/');
    return { success: true };
  } catch (err) {
    return { error: 'Failed to update task status' };
  }
}
