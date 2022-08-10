import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/main.layout";
import HomePage from "./pages/Home";
import CharactersPage from "./pages/Characters";
import * as ROUTES from "./constants/routes";
import CharacterPage from "./pages/Characters/Character";
import LocationsPage from "./pages/Locations";
import LocationPage from "./pages/Locations/Location";
import EpisodesPage from "./pages/Episodes";
import EpisodePage from "./pages/Episodes/Episode";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />}></Route>
          <Route path={ROUTES.CHARACTERS} element={<CharactersPage />}></Route>
          <Route path={ROUTES.CHARACTER} element={<CharacterPage />}></Route>
          <Route path={ROUTES.LOCATIONS} element={<LocationsPage />}></Route>
          <Route path={ROUTES.LOCATION} element={<LocationPage />}></Route>
          <Route path={ROUTES.EPISODES} element={<EpisodesPage />}></Route>
          <Route path={ROUTES.EPISODE} element={<EpisodePage />}></Route>
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
