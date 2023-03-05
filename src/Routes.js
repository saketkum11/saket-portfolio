import { Route } from "react-router-dom";
import { Home } from "./server";

const Routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<></>} />
        <Route path="/articles" element={<Home />} />
        <Route path="/projects" element={<Home />} />
      </Routes>
    </>
  );
};
export { Routes };
