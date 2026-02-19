import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutPage from "./composants/layout/layout";
import HomePage from "./composants/pages/home";
import ContactPage from "./composants/pages/contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} 

{/* 
  COnfiguration d'un new projet
  1e etape : installation de vite et tailwind ref(site tailwind css)
  2e etape : installation et configuration de react router dom
  3e etape : installation de react icons


  .///////
  dernier etape : configuratiopn de git
  */}