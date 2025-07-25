import { Routes, Route } from "react-router";
import { AuthPage } from "./pages/AuthPage";
import { CatalogPage } from "./pages/CatalogPage";
import { StartPage } from "./pages/StartPage";
import { AboutPage } from "./pages/AboutPage";
import { ReflexionPage } from "./pages/ReflexionPage";
import { HistoryPage } from "./pages/HistoryPage";
import { BookDescriptionPage } from "./pages/BookDescriptionPage";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <Toaster position="top-center" richColors />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/books" element={<CatalogPage />} />
        <Route path="/books/:id" element={<BookDescriptionPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/reflexion" element={<ReflexionPage />} />
        <Route path="/about/history" element={<HistoryPage />} />
        <Route path="/login" element={<AuthPage />} />
      </Routes>
    </>
  );
}

export default App;
