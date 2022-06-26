import React, { useState } from 'react'
import Logo from './Logo.png'
import {
  Link
} from "react-router-dom";

export default function Navbar(props) {
  const [sKey, setSKey] = useState('')

  const handleChange = (e) => {
    setSKey(e.target.value)
    if (sKey.length === 1)
      props.setSearchKey('')
  }

  const setSearchKey = (e) => {
    e.preventDefault();
    props.setSearchKey(sKey)
  }

  return (
    <>

      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={Logo} alt="" width="30" height="24" className="d-inline-block align-text-top me-2" />
            <span style={{ color: "#48AAAD", fontWeight: "bold" }}>NewsGlory</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Country
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="dropdown-item" onClick={() => { props.setCountry('in') }}>India</li>
                  <li className="dropdown-item" onClick={() => { props.setCountry('us') }}>US</li>
                  <li className="dropdown-item" onClick={() => { props.setCountry('au') }}>Australia</li>
                  <li className="dropdown-item" onClick={() => { props.setCountry('ch') }}>China</li>
                  <li className="dropdown-item" onClick={() => { props.setCountry('nz') }}>New Zealand</li>
                  <li className="dropdown-item" onClick={() => { props.setCountry('ru') }}>Russia</li>
                  <li className="dropdown-item" onClick={() => { props.setCountry('pk') }}>Pakistan</li>

                </ul>
              </li>
            </ul>

            <div className={`form-check form-switch me-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>

            <form className="d-flex ">
              <input className="form-control me-2" value={sKey} onChange={handleChange} type="search" placeholder="Search Keyword" aria-label="Search" />
              <button className={`btn btn-outline-${props.mode === 'light' ? 'dark' : 'light'}`} onClick={setSearchKey} >Search</button>
            </form>
          </div>
        </div>
      </nav>

      <h2 className={`my-3 mx-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>NewsGlory - Top Headlines</h2>

    </>
  )
}
