import {BrowserRouter, Route, Routes} from "react-router-dom";
import SharedLayout from "./Pages/SharedLayout";
import Home from "./Pages/Home";
import SubmitStudent from "./Pages/SubmitStudent";
import GetStudent from "./Pages/GetStudent";
import UpdateStudent from "./Pages/UpdateStudent";
import DeleteStudent from "./Pages/DeleteStudent";
import Login from "./Pages/Login";
import AllStudent from "./Pages/AllStudent";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Login/>}/>
              <Route path={"dashboard"} element={<SharedLayout/>}>
                  <Route index element={<Home/>}/>
                  <Route path={"submit"} element={<SubmitStudent/>}/>
                  <Route path={"get"} element={<GetStudent/>}/>
                  <Route path={"update"} element={<UpdateStudent/>}/>
                  <Route path={"delete"} element={<DeleteStudent/>}/>
                  <Route exact path={"AllStudent"} element={<AllStudent/>}/>
                  
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
