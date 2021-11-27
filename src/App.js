import React from "react";
import Sidenav from "./components/Sidenav";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./views/dashboard/Dashboard";
import router from './Router.js';
import UserMenu from "./components/UserMenu";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
  <div className="row">
    <Sidenav/>
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
        <h5 className="font-weight-bold">Dashboard</h5>
        <div className="btn-toolbar mb-2 mb-md-0">
          <UserMenu />
        </div>
      </div>
        
          <Routes>
            {
              router.map(e =>{
                return (
                  <Route key={e.name} path={e.url} element={e.component}/>
                )
              })
            }
            
          </Routes>
      
    </main>
  </div>
  </BrowserRouter>
</div>
  );
}

export default App;
