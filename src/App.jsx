import { BrowserRouter , Routes , Route } from "react-router-dom"
import Body from "./components/Body"
import Login from "./components/Login";
import Feed from "./components/Feed";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Profile from "./components/Profile";
function App() {

  return (
    <>
    <Provider store = {appStore}>
    <BrowserRouter basename="/">
      <Routes>
        <Route path ='/' element={<Body/>}>
          <Route path="/" element= {<Feed/>} /> 
          <Route path="/login" element={<Login/>}/> {/*these children need outlet to run which is in BODY */}
          <Route path="/profile" element= {<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
