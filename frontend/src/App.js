
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './pages/Navbar';
function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
          </Routes>
        </BrowserRouter>
      </div>

    </>
  );
}

export default App;
