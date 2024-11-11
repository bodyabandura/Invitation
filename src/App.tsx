import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Invitation from "./pages/Invitation";
import UseCase from "./pages/UseCase";
import Setup from "./pages/Setup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<MainLayout />}>
          <Route element={<Invitation />} path="/invitation" />
          <Route element={<UseCase />} path="/use-case" />
          <Route element={<Setup />} path="/setup" />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
