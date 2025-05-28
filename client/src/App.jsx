import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/AuthLayout";
import AuthLogin from "./pages/auth/AuthLogin";
import AuthRegister from "./pages/auth/AuthRegister";
import AdminLayout from "./components/admin-view/AdminLayout";
import AdminDashBoard from "./pages/admin-view/AdminDashBoard";
import AdminProducts from "./pages/admin-view/AdminProducts";
import AdminOrders from "./pages/admin-view/AdminOrders";
import AdminFeatures from "./pages/admin-view/AdminFeatures";

const App = () => {

  return (

    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        
        <Route path="/auth" element={<AuthLayout/>}>  {/* /auth is the parent route for login,register. because /auth route will be same for both children routes. */}
          <Route path="login" element={<AuthLogin/>}/>
          <Route path="register" element={<AuthRegister/>}/>
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>

          <Route path="dashboard" element={<AdminDashBoard/>}/>
          <Route path="products" element={<AdminProducts/>}/>
          <Route path="orders" element={<AdminOrders/>}/>
          <Route path="features" element={<AdminFeatures/>}/>

        </Route>
      </Routes>
    </div>

  );

};

export default App;