
import Dashboard from "./pages/Dashboard";
import { SharedBrainDashboard } from "./pages/SharedBrainDashboard";
import { Signin } from "./pages/Signin";
import { Signup } from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  
  return <div>
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/signin" element={<Signin />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/share/brain/:shareLink" element={<SharedBrainDashboard />}></Route>
    </Routes>
    </BrowserRouter>
  </div>
}

export default App