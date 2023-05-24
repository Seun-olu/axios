import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Update from "./components/Update";
import Delete from "./components/Delete";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div>
          <Routes>
            <Route path="/" Component={Create}/>
          </Routes>
        </div>
        <div>
        <Routes>
            <Route path="/read" Component={Read}/>
          </Routes>
        </div>
      </div>
      <Routes>
        <Route path="/update" Component={Update} />
      </Routes>
      <Routes>
        <Route path="/delete" Component={Delete} />
      </Routes>
    </Router>
  );
};

export default App;
