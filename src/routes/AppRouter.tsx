import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginPage } from "../pages/login/LoginPage";
import { MainLayout } from "../layout/MainLayout";
import {AIPage} from "../pages/objects/AIPage";
import {SoftwarePage} from "../pages/objects/SoftwarePage";
import {PrivateSectorPage} from "../pages/subjects/PrivateSectorPage";



export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/subjects/private-sector" element={<PrivateSectorPage />} />
            <Route path="/objects/ai" element={<AIPage />} />
            <Route path="/objects/software" element={<SoftwarePage />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
