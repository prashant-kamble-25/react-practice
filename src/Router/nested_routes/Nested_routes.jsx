import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Overview from "../Pages/Dashboard/Overview"
import Settings from "../Pages/Dashboard/Settings"
import Home from "../Pages/Home"
import About from "../Pages/About"

function Nested_routes() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />}>
                <Route path="/about" element={<About />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="overview" element={<Overview />} />
                    <Route path="settings" element={<Settings />} />
                </Route>
            </Route>
        </Routes>
    </Router>
  )
}

export default Nested_routes
