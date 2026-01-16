import { Link, Outlet } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1>Home</h1>
            <nav>
                <Link to="/about" style={{margin:"50px"}}>About</Link>
                <Link to="/dashboard" style={{ margin: "50px" }}>Dashboard</Link>
            </nav>            
            <Outlet />
        </div>
    )
}
export default Home;