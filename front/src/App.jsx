import { Routes, Route } from "react-router";
import { AuthPage } from "./pages/AuthPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
