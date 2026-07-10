import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Ensure lib directory exists (though this file is in lib, so it exists, but the db will be in root)
const dbPath = path.join(process.cwd(), 'task_management.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

// Initialize database schema
const initDb = () => {
  // Create Task_Titles table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Task_Titles (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      Title TEXT NOT NULL UNIQUE
    )
  `);

  // Create Task_Management table
  db.exec(`
    CREATE TABLE IF NOT EXISTS Task_Management (
      ID INTEGER PRIMARY KEY AUTOINCREMENT,
      Employee_Name TEXT NOT NULL,
      Task_Title_ID INTEGER NOT NULL,
      Completed BOOLEAN NOT NULL DEFAULT 0,
      FOREIGN KEY(Task_Title_ID) REFERENCES Task_Titles(ID)
    )
  `);

  // Seed Task_Titles if empty
  const count = db.prepare('SELECT COUNT(*) as count FROM Task_Titles').get().count;
  if (count === 0) {
    const insertTitle = db.prepare('INSERT INTO Task_Titles (Title) VALUES (?)');
    const initialTitles = ['Excel Sheet Completion', 'Coding', 'Testing', 'ER Diagram'];
    
    db.transaction(() => {
      for (const title of initialTitles) {
        insertTitle.run(title);
      }
    })();
  }
};

initDb();

export default db;
