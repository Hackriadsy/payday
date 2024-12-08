import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="h-screen text-primary-content bg-gradient-to-r from-green-50 via-green-100 to-green-50">
        <Outlet />
    </div>
  )
};