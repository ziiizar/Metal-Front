import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({isAllowed, children}) => {

    if(!isAllowed) { <Navigate to={"/LogIn"}></Navigate>}
    else
    return children ? <>{children}</> : <Outlet></Outlet>
}