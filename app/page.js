import { getTasks, getTaskTitles } from './actions/tasks';
import { logout } from './actions/auth';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const tasks = await getTasks();
  const titles = await getTaskTitles();

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>Manager Dashboard</h1>
          <form action={logout}>
            <button type="submit" className="logout-btn">Logout</button>
          </form>
        </div>
      </header>
      
      <main className="dashboard-main">
        <section className="assign-task-section">
          <h2>Assign New Task</h2>
          <div className="glass-panel">
            <TaskForm titles={titles} />
          </div>
        </section>

        <section className="task-list-section">
          <h2>Task Overview</h2>
          <div className="glass-panel">
            <TaskList tasks={tasks} />
          </div>
        </section>
      </main>
    </div>
  );
}
