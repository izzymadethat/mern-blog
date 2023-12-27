import "./App.css";
import { Route, Routes } from "react-router-dom";
import Base from "./Base";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContextProvider } from "./UserContext";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<HomePage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/create"} element={<CreatePostPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
