import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import UserRepos from "./pages/UserRepos";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userRepos" element={<UserRepos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
