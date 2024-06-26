import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useRoutes,
} from "react-router-dom";

import Home from "./pages/home/Home";
import NotFound from "./pages/404/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
