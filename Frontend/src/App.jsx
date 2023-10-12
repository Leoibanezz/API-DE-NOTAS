import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navigation } from "./components/Navigation";
import { NotesList } from "./components/NotesList";
import CreateNote from "./components/CreateNote";
import CreateUser from "./components/CreateUser";

import "./App.css";
import { LandingPage } from "./views/LandingPage";
import Login from "./views/Login";

function App() {
  return (
    <div className="bg-dark vh-100">
      <BrowserRouter>
        <Navigation />
        <div className="container p-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Notes" element={<NotesList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/edit/:id" element={<CreateNote />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/user" element={<CreateUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
