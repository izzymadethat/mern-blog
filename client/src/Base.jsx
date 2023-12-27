import { Outlet } from "react-router-dom";
import Header from "./Header";

const Base = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};

export default Base;
