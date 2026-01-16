import { Link, Outlet } from "react-router-dom";

function Dashboard(){
    return(
        <div>
            <h1>Dashboard</h1>
            <nav>
                <Link to="overview">Overview</Link> <br />
                <Link to="settings">Settings</Link>
                <Outlet />
            </nav>
        </div>
    )
}
export default Dashboard;