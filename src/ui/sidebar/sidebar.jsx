import logoShort from "../../assets/svg/logos/logo-short.svg";
import logo from "../../assets/svg/logos/logo.svg";
import styles from "./sidebar.module.css";

function Sidebar({ collapsed, setCollapsed }) {
  const toggleCollapse = (section) => {
    setCollapsed({ ...collapsed, [section]: !collapsed[section] });
  };

  const dropdownStyles = {
    position: "absolute",
    left: "calc(100% + 0.9125rem)",
    zIndex: 2,
    minWidth: "15rem",
    backgroundColor: "#fff",
    boxShadow: "0rem 0.6125rem 2.5rem 0.6125rem rgba(140, 152, 164, 0.175)",
    borderRadius: "0.3125rem",
    padding: ".5rem",
  };

  return (
    <aside
      style={{ width: collapsed.main ? "5.75rem" : "16.25rem" }}
      className={`navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-light bg-light ${styles.customAside}`}
    >
      <div className="navbar-vertical-container">
        <div className="navbar-vertical-footer-offset">
          <a
            className="navbar-brand"
            href="./index.html"
            aria-label="Front"
            style={{
              position: "relative",
            }}
          >
            <img
              className="navbar-brand-logo"
              src={logoShort}
              width="31"
              height="31"
              alt="Logo"
              data-hs-theme-appearance="default"
              style={{
                position: "absolute",
                left: "0",
                transition: "0.2s ease-in-out",
                opacity: collapsed.main ? "1" : "0",
              }}
            />
            <img
              className="navbar-brand-logo"
              src={logo}
              alt="Logo"
              data-hs-theme-appearance="default"
              style={{
                position: "absolute",
                transition: "0.2s ease-in-out",
                opacity: !collapsed.main ? "1" : "0",
              }}
            />
          </a>

          <button
            type="button"
            className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler"
            onClick={() => toggleCollapse("main")}
          >
            <i
              className={`bi-arrow-bar-${
                !collapsed.main ? "left" : "right"
              } navbar-toggler-short-align`}
              title="Collapse/Expand"
            ></i>
          </button>

          <div className="navbar-vertical-content">
            <div
              id="navbarVerticalMenu"
              className="nav nav-pills nav-vertical card-navbar-nav"
            >
              <div className="nav-item">
                <a
                  className={`nav-link dropdown-toggle ${
                    collapsed.main ? "afterNone" : ""
                  } ${
                    collapsed.dashboards
                      ? styles.activeCustomNavLink
                      : styles.customNavLink
                  } active ${styles.dropdownToggle}`}
                  href="#navbarVerticalMenuDashboards"
                  role="button"
                  onClick={() => toggleCollapse("dashboards")}
                  aria-expanded={collapsed.dashboards}
                >
                  <i
                    className="bi-house-door nav-icon"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  ></i>
                  <span
                    className="nav-link-title"
                    style={{ display: collapsed.main ? "none" : "block" }}
                  >
                    Dashboards
                  </span>
                </a>
                <div
                  id="navbarVerticalMenuDashboards"
                  style={collapsed.main ? dropdownStyles : {}}
                  className={`nav-collapse collapse ${
                    collapsed.main ? "hiden" : ""
                  } ${collapsed.dashboards ? "show" : ""}`}
                >
                  <span
                    className={`nav-link active `}
                    style={{ color: "#132144", cursor: "pointer" }}
                  >
                    Default
                  </span>
                  <span
                    className="nav-link"
                    style={{ color: "#132144", cursor: "pointer" }}
                  >
                    Alternative
                  </span>
                </div>
              </div>

              <span
                className="dropdown-header mt-4"
                style={{ display: collapsed.main ? "none" : "block" }}
              >
                Pages
              </span>
              <small
                className="bi-three-dots nav-subtitle-replacer fs-6"
                style={{
                  display: !collapsed.main ? "none" : "block",
                  color: "#8c98a4",
                  textAlign: "center",
                  padding: "0.5rem 0px 0.5rem 4px",
                }}
              ></small>

              <div className="nav-item">
                <a
                  className={`nav-link dropdown-toggle ${
                    collapsed.main ? "afterNone" : ""
                  } ${
                    collapsed.project
                      ? styles.activeCustomNavLink
                      : styles.customNavLink
                  } ${styles.dropdownToggle}`}
                  href="#navbarVerticalMenuPagesProjectMenu"
                  role="button"
                  onClick={() => toggleCollapse("project")}
                  aria-expanded={collapsed.project}
                >
                  <i
                    className="bi-briefcase nav-icon"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  ></i>
                  <span
                    className="nav-link-title"
                    style={{ display: collapsed.main ? "none" : "block" }}
                  >
                    Project
                  </span>
                </a>
                <div
                  id="navbarVerticalMenuPagesProjectMenu"
                  style={collapsed.main ? dropdownStyles : {}}
                  className={`nav-collapse collapse ${
                    collapsed.main ? "hiden" : ""
                  } ${collapsed.project ? "show" : ""}`}
                >
                  <span
                    className="nav-link"
                    style={{ color: "#132144", cursor: "pointer" }}
                  >
                    Overview
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
