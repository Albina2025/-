import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../hooks/use-app-selector";

export const ProtectedRoute = () => {

  const token  = useAppSelector((state) => state.auth); 

 
  const isAuthenticated = Boolean(token);

  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

// import { Navigate, Outlet } from "react-router-dom";
// import { useAppSelector } from "../hooks/use-app-selector";

// export const ProtectedRoute = () => {
//   const token = useAppSelector((state) => state.auth.accessToken);

//   if (!token) {
//     return <Navigate to="/" replace />;
//   }

//   return <Outlet />;
// };