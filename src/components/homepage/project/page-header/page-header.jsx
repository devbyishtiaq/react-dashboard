import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/light.css";
import guidlineicon from "../../../../assets/svg/brands/guideline-icon.svg";
import img3 from "../../../../assets/img/160x160/img3.jpg";
import img10 from "../../../../assets/img/160x160/img10.jpg";
import img9 from "../../../../assets/img/160x160/img9.jpg";
import CustomDropdown from "../../../../ui/custom-dropdown/custom-dropdown";

const PageHeader = () => {
  return (
    <div className="page-header">
      <div className="d-flex mb-3">
        <div className="flex-shrink-0">
          <div className="avatar avatar-lg avatar-4x3">
            <img className="avatar-img" src={guidlineicon} alt="icon" />
          </div>
        </div>
        <div className="flex-grow-1 ms-4">
          <div className="row">
            <div className="col-lg mb-3 mb-lg-0">
              <h1 className="page-header-title">Cloud computing web service</h1>
              <div className="row align-items-center">
                <div className="col-auto">
                  <span>Client:</span>
                  <a href="#">Htmlstream</a>
                </div>
                <div className="col-auto">
                  <div className="row align-items-center g-0">
                    <div className="col-auto">Due date:</div>
                    <div
                      className="col flatpickr-custom-position-fix-sm-down f-flex"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Flatpickr
                        className="flatpickr-custom-form-control form-control"
                        options={{
                          dateFormat: "d/m/Y",
                        }}
                        value="29/06/2020"
                      />
                      <div
                        className="input-group-append input-group-text"
                        style={{ marginLeft: "-80px" }}
                      >
                        <i className="bi-chevron-down"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <CustomDropdown
                    options={[
                      "Mark Williams",
                      "Amanda Harvey",
                      "Assign to owner",
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-auto">
              <span className="text-cap small">Team members:</span>
              <div className="d-flex">
                <div className="avatar-group avatar-circle me-3">
                  <a
                    className="avatar"
                    href="path/to/user-profile.html"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Amanda Harvey"
                  >
                    <img className="avatar-img" src={img10} alt="Description" />
                  </a>
                  <a
                    className="avatar"
                    href="path/to/user-profile.html"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Linda Bates"
                  >
                    <img className="avatar-img" src={img9} alt="Description" />
                  </a>
                  <a
                    className="avatar avatar-soft-info"
                    href="path/to/user-profile.html"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="#digitalmarketing"
                  >
                    <span className="avatar-initials">
                      <i className="bi-people-fill"></i>
                    </span>
                  </a>
                  <a
                    className="avatar"
                    href="path/to/user-profile.html"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="David Harrison"
                  >
                    <img className="avatar-img" src={img3} alt="Description" />
                  </a>
                  <a
                    className="avatar avatar-soft-dark"
                    href="path/to/user-profile.html"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Antony Taylor"
                  >
                    <span className="avatar-initials">A</span>
                  </a>
                  <a
                    className="avatar avatar-light avatar-circle"
                    href="/javascript:;"
                    data-bs-toggle="modal"
                    data-bs-target="#shareWithPeopleModal"
                  >
                    <span className="avatar-initials">+2</span>
                  </a>
                </div>
                <span className="btn btn-primary btn-icon rounded-circle">
                  <i className="bi-share-fill"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav>{/* Include your nav component or links here */}</nav>
    </div>
  );
};

export default PageHeader;
