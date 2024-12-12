import { BrowserRouter , Routes , Route } from "react-router-dom"
import Body from "./Body"
import Login from "./Login";
function App() {

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path ='/' element={<Body/>}>
           <Route path="/login" element={<Login/>}/> {/*these children need outlet to run which is in BODY */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
