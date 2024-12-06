import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="h-screen text-white bg-secondary">
        <Outlet />
    </div>
  )
};