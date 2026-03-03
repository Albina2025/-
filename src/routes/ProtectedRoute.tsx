import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/use-app-selector";

export default function ProtectedRoute() {
  const token = useAppSelector((state) => state.auth.accessToken);

  const isAuthenticated = Boolean(token);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
} 