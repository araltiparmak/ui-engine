import { Route, Routes } from "react-router-dom";
import FormPage from "./FormPage.tsx";
import { Home } from "./components/Home.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forms/:formId" element={<FormPage />} />
    </Routes>
  );
}

export default App;
