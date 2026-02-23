// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ProtectedRoute } from "./ProtectedRoute";
// import {LoginPage} from "../pages/LoginPage";
// import {HomePage} from "../pages/HomePage";
// import { MainLayout } from "../components/layout/MainLayout";
// import ObjectPage from "../pages/ObjectPage";
// import SubjectPage from "../pages/SubjectPage";



// export default function AppRouter() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<LoginPage />} />
//          <Route element={<ProtectedRoute />}>
//           <Route element={<MainLayout />}>
//             <Route path="/home" element={<HomePage />} />
//             <Route path="/objects" element={<ObjectPage />} />
//             <Route path="/subjects" element={<SubjectPage />} />
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import { LoginPage } from "../pages/login/LoginPage";
import { MainLayout } from "../layout/MainLayout";
import AIPage from "../pages/objects/AIPage";
import SoftwarePage from "../pages/objects/SoftwarePage";
import PrivateSectorPage from "../pages/subjects/PrivateSectorPage";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<MainLayout />}>
            <Route path="/objects/ai" element={<AIPage />} />
            <Route path="/objects/software" element={<SoftwarePage />} />
            <Route path="/subjects/private-sector" element={<PrivateSectorPage />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}
