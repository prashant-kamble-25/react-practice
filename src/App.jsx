import './App.css'
import Counter from './Counter/Counter'
import BasicRoutes from './Router/basic_routes/Basic_Routes'
import Nested_routes from './Router/nested_routes/Nested_routes'

function App() {
  
  return (
    <div style={{
      border:"1px solid white",
      width:"500px",
      height:"500px"
    }}>
      {/* <Counter /> */}
      {/* <BasicRoutes /> */}
      <Nested_routes />
    </div>
  )
}

export default App
