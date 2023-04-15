import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CreateCatForm from "./pages/CreateCatForm/CreateCatForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catForm" element={<CreateCatForm />} />
      </Routes>
    </Router>
  );
};

export default App;
