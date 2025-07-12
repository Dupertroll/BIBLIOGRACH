import { Routes, Route } from "react-router";
import { AuthPage } from "./pages/AuthPage";
import { CatalogPage } from "./pages/CatalogPage";
import { BookDescriptionPage } from "./pages/BookDescriptionPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CatalogPage />} />
      <Route path="/books/:id" element={<BookDescriptionPage />} />
      <Route path="/login" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
