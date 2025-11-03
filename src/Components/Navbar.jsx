// import { Link } from "react-router-dom";

function Navbar({ title, about, home, mode, toggleMode, GreenMode }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} `}>
        <div className="container-fluid">
          {/* <Link className="navbar-brand " to="/">
            {title}
          </Link> */}
          <a className="navbar-brand " href="#">
            {title}
          </a>
          {/* {props.title} */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item ">
                {/* <Link className="nav-link active " aria-current="page" to="/">
                  {home}
                </Link> */}
                <a className="nav-link active " aria-current="page" href="#">
                  {home}
                </a>
              </li>
              <li className="nav-item">
                {/* <Link className="nav-link " to="/about"> 
                    {about}
                </Link> 
                */}
                {/* <a className="nav-link " href="/about">
                  {about}
                </a> */}
                {/* {props.about} */}
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-primary" type="submit">
                Search
              </button>
            </form> */}
            {/* <div className="form-check form-switch ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={GreenMode}
              />
              <label
                className={`form-check-label text-${
                  mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable Green Mode
              </label>
            </div> */}
            <div className="form-check form-switch ms-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={toggleMode}
              />
              <label
                className={`form-check-label text-${
                  mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Enable {mode} Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
