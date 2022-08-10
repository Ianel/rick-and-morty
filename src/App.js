import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import HomePage from "./pages/Home";
import CharactersPage from "./pages/Characters";
import * as ROUTES from "./constants/routes";

function App() {
  return (
   <Router>
     <MainLayout>
      <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />}></Route>
          <Route path={ROUTES.CHARACTERS} element={<CharactersPage />}></Route>
      </Routes>
    </MainLayout>
   </Router>
  );
}

export default App;
