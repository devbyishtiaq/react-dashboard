import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img6 from "../../assets/img/160x160/img6.jpg";
import atlasian from "../../assets/svg/brands/atlassian-icon.svg";
import frontapp from "../../assets/svg/brands/frontapp-icon.svg";
import googlewebdev from "../../assets/svg/brands/google-webdev-icon.svg";
import slackicon from "../../assets/svg/brands/slack-icon.svg";
import reviewratting from "../../assets/svg/illustrations/review-rating-shield.svg";
import styles from "./header.module.css";
import NotificationDropdown from "./notification-dropdown/notification-dropdown";

const Header = ({ collapsed, setCollapsed }) => {
  return (
    <header
      id="header"
      style={{
        marginLeft: !collapsed.main ? "16.25rem" : "5.75rem",
        transition: "0.2s ease-in-out",
      }}
      className={`navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white ${styles.customNavbar}`}
    >
      {/* Logo */}
      {/* <Link className={`navbar-brand ${styles.customNavbarBrand}`}>
        <img
          className="navbar-brand-logo"
          src={logo}
          alt="Logo"
          data-hs-theme-appearance="default"
        />
      </Link> */}
      {/* End Logo */}

      <div className="navbar-nav-wrap-content-start d-flex">
        {/* Navbar Vertical Toggle */}
        {/* <button
          type="button"
          className={`js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler ${styles.customNavbarToggler}`}
        >
          <i
            className="bi-arrow-bar-right navbar-toggler-full-align"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            title="Expand"
          ></i>
        </button> */}
        {/* End Navbar Vertical Toggle */}

        {/* Search Form */}
        <div className="dropdown ms-2">
          <div className="d-none d-lg-block">
            <div className="input-group input-group-merge input-group-borderless input-group-hover-light navbar-input-group">
              <div className="input-group-prepend input-group-text">
                <i className="bi-search"></i>
              </div>
              <input
                type="search"
                className={`js-form-search form-control ${styles.customHeaderSearch}`}
                placeholder="Search in front"
                aria-label="Search in front"
              />
              <a
                className="input-group-append input-group-text"
                href="javascript:;"
              >
                <i
                  id="clearSearchResultsIcon"
                  className="bi-x-lg"
                  style={{ display: "none" }}
                ></i>
              </a>
            </div>
          </div>
          <button
            className="js-form-search js-form-search-mobile-toggle btn btn-ghost-secondary btn-icon rounded-circle d-lg-none"
            type="button"
          >
            <i className="bi-search"></i>
          </button>
          <div
            id="searchDropdownMenu"
            className="hs-form-search-menu-content dropdown-menu dropdown-menu-form-search navbar-dropdown-menu-borderless"
          >
            <div className="card">
              <div className="card-body-height">
                <div className="d-lg-none">
                  <div className="input-group input-group-merge navbar-input-group mb-5">
                    <div className="input-group-prepend input-group-text">
                      <i className="bi-search"></i>
                    </div>
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search in front"
                      aria-label="Search in front"
                    />
                    <a
                      className="input-group-append input-group-text"
                      href="javascript:;"
                    >
                      <i className="bi-x-lg"></i>
                    </a>
                  </div>
                </div>
                <span className="dropdown-header">Recent searches</span>
                <div className="dropdown-item bg-transparent text-wrap">
                  <a
                    className="btn btn-soft-dark btn-xs rounded-pill"
                    href="./index.html"
                  >
                    Gulp <i className="bi-search ms-1"></i>
                  </a>
                  <a
                    className="btn btn-soft-dark btn-xs rounded-pill"
                    href="./index.html"
                  >
                    Notification panel <i className="bi-search ms-1"></i>
                  </a>
                </div>
                <div className="dropdown-divider"></div>
                <span className="dropdown-header">Tutorials</span>
                <a className="dropdown-item" href="./index.html">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <span className="icon icon-soft-dark icon-xs icon-circle">
                        <i className="bi-sliders"></i>
                      </span>
                    </div>
                    <div className="flex-grow-1 text-truncate ms-2">
                      <span>How to set up Gulp?</span>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="./index.html">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <span className="icon icon-soft-dark icon-xs icon-circle">
                        <i className="bi-paint-bucket"></i>
                      </span>
                    </div>
                    <div className="flex-grow-1 text-truncate ms-2">
                      <span>How to change theme color?</span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <span className="dropdown-header">Members</span>
                <a className="dropdown-item" href="./index.html">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="avatar avatar-xs avatar-circle"
                        alt="Description"
                        src={img6}
                      />
                    </div>
                    <div className="flex-grow-1 text-truncate ms-2">
                      <span>
                        Amanda Harvey{" "}
                        <i
                          className="tio-verified text-primary"
                          data-toggle="tooltip"
                          data-placement="top"
                          title="Top endorsed"
                        ></i>
                      </span>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="./index.html">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="avatar avatar-xs avatar-circle"
                        alt="Description"
                        src={img6}
                      />
                    </div>
                    <div className="flex-grow-1 text-truncate ms-2">
                      <span>David Harrison</span>
                    </div>
                  </div>
                </a>
                <a className="dropdown-item" href="./index.html">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-xs avatar-soft-info avatar-circle">
                        <span className="avatar-initials">A</span>
                      </div>
                    </div>
                    <div className="flex-grow-1 text-truncate ms-2">
                      <span>Anne Richard</span>
                    </div>
                  </div>
                </a>
              </div>
              <a className="card-footer text-center" href="./index.html">
                See all results <i className="bi-chevron-right small"></i>
              </a>
            </div>
          </div>
        </div>
        {/* End Search Form */}
      </div>

      <div className="navbar-nav-wrap-content-end ms-auto">
        <ul className="navbar-nav" style={{ flexDirection: "row" }}>
          <li className="nav-item d-none d-sm-inline-block">
            <NotificationDropdown />
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-icon btn-ghost-secondary rounded-circle"
                id="navbarAppsDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-dropdown-animation
              >
                <i className="bi-app-indicator"></i>
              </button>
              <div
                className="dropdown-menu dropdown-menu-end dropdown-card navbar-dropdown-menu navbar-dropdown-menu-borderless"
                aria-labelledby="navbarAppsDropdown"
                style={{ width: "25rem" }}
              >
                <div className="card">
                  <div className={`card-header ${styles.appsDropdowHeader}`}>
                    <h4 className="card-title">Web apps &amp; services</h4>
                  </div>
                  <div className="card-body card-body-height">
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-xs avatar-4x3"
                            src={atlasian}
                            alt="Description"
                          />
                        </div>
                        <div className="flex-grow-1 text-truncate ms-3">
                          <h5 className="mb-0">Atlassian</h5>
                          <p className="card-text text-body">
                            Security and control across Cloud
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-xs avatar-4x3"
                            src={slackicon}
                            alt="Description"
                          />
                        </div>
                        <div className="flex-grow-1 text-truncate ms-3">
                          <h5 className="mb-0">
                            Slack{" "}
                            <span className="badge bg-primary rounded-pill text-uppercase ms-1">
                              Try
                            </span>
                          </h5>
                          <p className="card-text text-body">
                            Email collaboration software
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-xs avatar-4x3"
                            src={googlewebdev}
                            alt="Description"
                          />
                        </div>
                        <div className="flex-grow-1 text-truncate ms-3">
                          <h5 className="mb-0">Google webdev</h5>
                          <p className="card-text text-body">
                            Work involved in developing a website
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-xs avatar-4x3"
                            src={frontapp}
                            alt="Description"
                          />
                        </div>
                        <div className="flex-grow-1 text-truncate ms-3">
                          <h5 className="mb-0">Frontapp</h5>
                          <p className="card-text text-body">
                            The inbox for teams
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            className="avatar avatar-xs avatar-4x3"
                            src={reviewratting}
                            alt="Description"
                          />
                        </div>
                        <div className="flex-grow-1 text-truncate ms-3">
                          <h5 className="mb-0">HS Support</h5>
                          <p className="card-text text-body">
                            Customer service and support
                          </p>
                        </div>
                      </div>
                    </a>
                    <a className="dropdown-item" href="#">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avatar avatar-sm avatar-soft-dark">
                            <span className="avatar-initials">
                              <i className="bi-grid"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1 text-truncate ms-3">
                          <h5 className="mb-0">More Front products</h5>
                          <p className="card-text text-body">
                            Check out more HS products
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <a
                    className={`card-footer text-center ${styles.appsDropdowFooter}`}
                    href="#"
                  >
                    View all apps <i className="bi-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item d-none d-sm-inline-block me-2">
            <button
              className="btn btn-ghost-secondary btn-icon rounded-circle"
              type="button"
            >
              <i className="bi-x-diamond"></i>
            </button>
          </li>
          <li className="nav-item">
            <div className="dropdown">
              <a
                className="navbar-dropdown-account-wrapper"
                href="javascript:;"
                id="accountNavbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-bs-auto-close="outside"
                data-bs-dropdown-animation
              >
                <div className="avatar avatar-sm avatar-circle">
                  <img className="avatar-img" src={img6} alt="Description" />
                  <span className="avatar-status avatar-sm-status avatar-status-success"></span>
                </div>
              </a>
              <div
                className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account"
                aria-labelledby="accountNavbarDropdown"
                style={{ width: "16rem" }}
              >
                <div className="dropdown-item-text">
                  <div className="d-flex align-items-center">
                    <div className="avatar avatar-sm avatar-circle">
                      <img
                        className="avatar-img"
                        alt="Description"
                        src={img6}
                      />
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="mb-0">Mark Williams</h5>
                      <p className="card-text text-body">mark@site.com</p>
                    </div>
                  </div>
                </div>
                <div className="dropdown-divider"></div>
                <div className="dropdown">
                  <div
                    className={`navbar-dropdown-submenu-item dropdown-item dropdown-toggle ${styles.customDropdownLink}`}
                    id="navSubmenuPagesAccountDropdown1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Set status
                  </div>
                  <div
                    className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu"
                    aria-labelledby="navSubmenuPagesAccountDropdown1"
                  >
                    <a className="dropdown-item" href="#">
                      <span className="legend-indicator bg-success me-1"></span>{" "}
                      Available
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="legend-indicator bg-danger me-1"></span>{" "}
                      Busy
                    </a>
                    <a className="dropdown-item" href="#">
                      <span className="legend-indicator bg-warning me-1"></span>{" "}
                      Away
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Reset status
                    </a>
                  </div>
                </div>
                <a className="dropdown-item" href="#">
                  Profile &amp; account
                </a>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar avatar-sm avatar-dark avatar-circle">
                        <span className="avatar-initials">HS</span>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-2">
                      <h5 className="mb-0">
                        Htmlstream{" "}
                        <span className="badge bg-primary rounded-pill text-uppercase ms-1">
                          PRO
                        </span>
                      </h5>
                      <span className="card-text">hs.example.com</span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-divider"></div>
                <div className="dropdown">
                  <div
                    className={`navbar-dropdown-submenu-item dropdown-item dropdown-toggle ${styles.customDropdownLink}`}
                    id="navSubmenuPagesAccountDropdown2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Customization
                  </div>
                  <div
                    className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-sub-menu"
                    aria-labelledby="navSubmenuPagesAccountDropdown2"
                  >
                    <a className="dropdown-item" href="#">
                      Invite people
                    </a>
                    <a className="dropdown-item" href="#">
                      Analytics <i className="bi-box-arrow-in-up-right"></i>
                    </a>
                    <a className="dropdown-item" href="#">
                      Customize Front{" "}
                      <i className="bi-box-arrow-in-up-right"></i>
                    </a>
                  </div>
                </div>
                <a className="dropdown-item" href="#">
                  Manage team
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
