import { Routes, Route } from "react-router-dom";
import HomeView from "./views/home/home.view";

function App() {

  return (
    <div>
     <Routes>
        <Route path="/">
          <Route index element={<HomeView />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} /> */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
