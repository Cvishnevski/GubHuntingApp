import { VacancySearch } from "./components/VacancySearch/VacancySearch";
import "./App.css";
import { BrowserRouter, Route, NavLink, Routes } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { VacancyInfo } from "./components/VacancyInfo/VacancyInfo";
import { VacancyList } from "./components/VacancyList/VacancyList";

export default function App() {
  const logo: string = require("./assets/images/logo.svg").default;

  return (
    <BrowserRouter>
      <div className="app">
        <header className="app__header">
          <img src={logo} className="app__header-logo" alt="logo"></img>
          <div className="app__header-links">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "app__header-link active" : "app__header-link"
              }
            >
              Поиск вакансий
            </NavLink>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                isActive ? "app__header-link active" : "app__header-link"
              }
            >
              Избранные
            </NavLink>
          </div>
        </header>
        <main className="app__main">
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/favorites" element={<VacancyList />} />
            <Route path="/vacancy/:vacancyId" element={<VacancyInfo />} />
            <Route path="/" element={<VacancySearch />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
