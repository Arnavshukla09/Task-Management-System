import "./globals.css";

export const metadata = {
  title: "Manager Task Management Dashboard",
  description: "Task Management System for Managers and Employees",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
