import React from "react";
import { NavLink } from "react-router-dom";

export const MyNavbar=(props)=>{
    return(
        <nav className="navbar navbar-expand-lg bg-dark variant-dark navbar fixed-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to='/' className="nav-link" aria-current="page"
                    style={({isActive})=>({color: isActive ? 'green' : 'grey'})}
                    >Főoldal</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/statistic'className="nav-link"
                    style={({isActive})=>({color: isActive ? 'green' : 'grey'})}
                    >Statisztika</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/filter' className="nav-link"
                    style={({isActive})=>({color: isActive ? 'green' : 'grey'})}
                    >Szűrés megyék szerint</NavLink>
              </li>
              </ul>
          </div>
        </div>
      </nav>
    )

}