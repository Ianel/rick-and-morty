import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import HomePage from "./pages/Home";

function App() {
  return (
   <Router>
    <Routes>
      <MainLayout>
        <Route path="/" element={<HomePage />}></Route>
      </MainLayout>
    </Routes>
   </Router>
  );
}

export default App;
