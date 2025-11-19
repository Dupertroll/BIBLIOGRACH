import { Routes, Route } from "react-router";
import { AuthPage } from "./pages/AuthPage";
import { RegisterPage } from "./pages/RegisterPage";
import { CatalogPage } from "./pages/CatalogPage";
import { StartPage } from "./pages/StartPage";
import { AboutPage } from "./pages/AboutPage";
import { ReflexionPage } from "./pages/ReflexionPage";
import { HistoryPage } from "./pages/HistoryPage";
import { BookDescriptionPage } from "./pages/BookDescriptionPage";
import { ArchivoPage } from "./pages/ArchivoPage";
import { ArchivoMenuPage } from "./pages/ArchivoMenuPage";
import { ArchivoCuentoPage } from "./pages/ArchivoCuentoPage";
import { ConvocatoriaPage } from "./pages/ConvocatoriaPage";
import { AdminPage } from "./pages/AdminPage.jsx";
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
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/archivo" element={<ArchivoPage />} />
        <Route path="/archivo/menu" element={<ArchivoMenuPage />} />
        <Route path="/archivo/cuento" element={<ArchivoCuentoPage />} />
        <Route path="/archivo/convocatoria" element={<ConvocatoriaPage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
