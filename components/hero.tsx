import React from "react";
type Props = {};
function Hero({ }: Props) {

  return (
    <div className="page-banner instructor-bg-blk">
        <div className="container">
          <div className="row align-items-center student-group">
            <div className="col-lg-6 col-md-12">
              <div className="instructor-profile d-flex align-items-center">
                <div className="instructor-profile-pic">
                  <a href="instructor-profile.html">
                    <img src="/img/profile-desktop-min.jpg" alt="" className="img-fluid" />
                  </a>
                </div>
                <div className="instructor-profile-content">
                  <h4>Anjit Suhag</h4>
                  <p>Instructor</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="instructor-profile-menu">
                <ul className="nav">
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="instructor-profile-menu-img">
                        <img src="/img/icon/icon-25.svg" alt="" />
                      </div>
                      <div className="instructor-profile-menu-content">
                        <h4>32</h4>
                        <p>Courses</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="instructor-profile-menu-img">
                        <img src="/img/icon/icon-26.svg" alt="" />
                      </div>
                      <div className="instructor-profile-menu-content">
                        <h4>11,604</h4>
                        <p>Total Students</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="d-flex align-items-center">
                      <div className="instructor-profile-menu-img">
                        <img src="/img/icon/icon-27.svg" alt="" />
                      </div>
                      <div className="instructor-profile-menu-content">
                        <h4>12,230</h4>
                        <p>Reviews</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="my-student-list">
                <ul>
                  <li><a className="active" href="/">Dashboard</a></li>
                  <li><a href="/class">Classes</a></li>
                  <li><a href="/user">Users</a></li>
                  <li><a href="/review">Reviews</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Hero;