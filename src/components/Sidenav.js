import React, { useEffect, useState } from "react";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import legacyWhite from "../assets/img/legacy-white.png";
import router from "../Router";
import { Link } from "react-router-dom";

export default function Sidenav(){
  const [url, setUrl] = useState(window.location.pathname)

  useEffect(() => {
    setUrl(window.location.pathname)
  }, []);
    return(
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block sidebar collapse">
      <img src={legacyWhite} className="img-fluid logo" />
      <div className="position-sticky pt-3">
        <ul className="nav flex-column px-3">
            {
              router.map(e =>{
                  if(e.icon){
                    return (
                  <li key={e.name} className={"nav-item my-2 "+ (url == e.url ? "active": "")}>
                    <Link className="nav-link" to={e.url}>
                       {e.icon}
                       {e.name}
                    </Link>
                  </li>
                )
                  }
                
              })
            }
        </ul>
      </div>
    </nav>
    )
}