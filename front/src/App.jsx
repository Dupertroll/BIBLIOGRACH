import { Routes, Route } from "react-router";
import { AuthPage } from "./pages/AuthPage";
import { CatalogPage } from "./pages/CatalogPage";
import { BookDescriptionPage } from "./pages/BookDescriptionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<BookDescriptionPage />} />
    </Routes>
  );
}

export default App;
