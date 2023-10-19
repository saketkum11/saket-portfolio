import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { About, Article, Home, HomeLayout, NotFound } from "./server";
// router

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="article" element={<Article />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
