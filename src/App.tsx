import { Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import AsyncThunkPage from "./pages/AsyncThunkPage";
import StateChangePage from "./pages/StateChangePage";
import TodoAppPage from "./pages/TodoAppPage";

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<StateChangePage />} />
          <Route path="/todoAppPage" element={<TodoAppPage />} />
          <Route path="/asyncThunkPage" element={<AsyncThunkPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
