
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Books from "./pages/Books";
import Borowers from "./pages/Borowers";
import Settings from "./pages/Settings";
import Newbook from "./pages/Newbook";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Books />} />
          <Route path="Borowers" element={<Borowers />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Newbook" element={<Newbook />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
