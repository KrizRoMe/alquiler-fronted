import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import PaymentsDashboard from "./pages/dashboard/PaymentsDashboard";
import ContractDashboard from "./pages/dashboard/ContractDashboard";
import ManageDashboard from "./pages/dashboard/ManageDashboard";
import ServicesDashboard from "./pages/dashboard/ServicesDashboard";
import ProfileDashboard from "./pages/dashboard/ProfileDashboard";
import HomeDashboard from "./pages/dashboard/HomeDashboard.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />

          <Route path="/dashboard/" element={<HomeDashboard />}>
            <Route path="pagos" element={<PaymentsDashboard />} />
            <Route path="contrato" element={<ContractDashboard />} />
            <Route path="gestionar" element={<ManageDashboard />} />
            <Route path="servicios" element={<ServicesDashboard />} />
            <Route path="perfil" element={<ProfileDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
