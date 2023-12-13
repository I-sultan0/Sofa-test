import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={classes.nav}>
      <nav>
        <div className={classes.logoName}>
          <Link to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2603/2603741.png"
              alt="Logo"
            />
            <h2>Bengal Comfort</h2>
          </Link>
        </div>
        <div className={classes.burger_menu} onClick={updateMenu}>
          <div
            className={classes.burger_icon}
            style={{
              transform: menuOpen
                ? "rotate(48deg) translate(0.75em, 1.25em)"
                : "rotate(0) translate(0)",
              transition: menuOpen
                ? "ease-out 0.5s"
                : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s",
            }}
          ></div>
          <div
            className={classes.burger_icon}
            style={{
              transform: menuOpen ? "scale(0.1)" : "rotate(0) translate(0)",
              transition: menuOpen
                ? "ease-out 0.5s"
                : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s",
            }}
          ></div>
          <div
            className={classes.burger_icon}
            style={{
              transform: menuOpen
                ? "rotate(129deg) translate(0.1em, 0.5em)"
                : "rotate(0) translate(0)",
              transition: menuOpen
                ? "ease-out 0.5s"
                : "cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s",
            }}
          ></div>
        </div>
      </nav>

      <div
        style={{
          width: menuOpen ? "100%" : "0vw",
          height: menuOpen ? "99.8vh" : "0vh",
        }}
        className={classes.menu}
      >
        <ul
          style={{ display: menuOpen ? "block" : "none" }}
          className={classes.sidebar_list}
        >
          <li onClick={updateMenu}>
            {" "}
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/sofa"
            >
              Sofa
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            {" "}
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/lshapesofa"
            >
              L Shape Sofa
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/lshapehydraulic"
            >
              L Shape Hydrolic Sofa Cum Bed
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/isofa"
            >
              I Shape Sofa
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/sofacumbed"
            >
              Sofa Cum Bed
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/wardrobe"
            >
              Wardrobe
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/boxbed"
            >
              Box Bed
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/headboard"
            >
              HeadBoard
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/diningchair"
            >
              Dining Chair
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/officechair"
            >
              Office Chair
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/highbackchair"
            >
              High Back Chair
            </NavLink>
          </li>
          <li onClick={updateMenu}>
            <NavLink
              className={(navigationData) =>
                navigationData.isActive ? classes.active : null
              }
              to="/mattress"
            >
              Mattress
            </NavLink>
            <li onClick={updateMenu}>
              <NavLink
                className={(navigationData) =>
                  navigationData.isActive ? classes.active : null
                }
                to="/tvcabinet"
              >
                TV Cabinet
              </NavLink>
            </li>
            {/* <li onClick={updateMenu}>
              <NavLink
                className={(navigationData) =>
                  navigationData.isActive ? classes.active : null
                }
                to="/bosschair"
              >
                Boss Chair
              </NavLink>
            </li> */}
            <li onClick={updateMenu}>
              <NavLink
                className={(navigationData) =>
                  navigationData.isActive ? classes.active : null
                }
                to="/carbonsofa"
              >
                Carbon Sofa
              </NavLink>
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
