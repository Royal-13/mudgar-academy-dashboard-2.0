import React from "react";
type Props = {};
function Section1({ }: Props) {

  return (
    <div className="settings-top-widget student-deposit-blk">
        <div className="row">
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card stat-info ttl-tickets">
              <div className="card-body">
                <div className="view-all-grp d-flex">
                  <div className="student-ticket-view">
                    <h3>50</h3>
                    <p>Total Students</p>
                    <a href="/login">View All</a>
                  </div>
                  <div className="img-deposit-ticket">
                    <img src="/img/students/book.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card stat-info open-tickets">
              <div className="card-body">
                <div className="view-all-grp d-flex">
                  <div className="student-ticket-view">
                    <h3>30</h3>
                    <p>Total revenue</p>
                    {/* <a href="transactions-instructor.html">View All</a> */}
                  </div>
                  <div className="img-deposit-ticket">
                    <img src="/img/students/receipt-text.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card stat-info close-tickets">
              <div className="card-body">
                <div className="view-all-grp d-flex">
                  <div className="student-ticket-view">
                    <h3>20</h3>
                    <p>Monthly Earnings</p>
                    {/* <a href="deposit-student.html">View All</a> */}
                  </div>
                  <div className="img-deposit-ticket">
                    <img src="/img/students/empty-wallet-tick.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card stat-info medium-tickets">
              <div className="card-body">
                <div className="view-all-grp d-flex">
                  <div className="student-ticket-view">
                    <h3>$2055</h3>
                    <p>Total Transactions</p>
                    {/* <a href="withdrawal-instructor.html">View All</a> */}
                  </div>
                  <div className="img-deposit-ticket">
                    <img src="/img/students/empty-wallet-change.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card stat-info blue-tickets">
              <div className="card-body">
                <div className="view-all-grp d-flex">
                  <div className="student-ticket-view">
                    <h3>30</h3>
                    <p>Total visits</p>
                  </div>
                  <div className="img-deposit-ticket">
                    <img src="/img/students/profile-user.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex">
            <div className="card stat-info ttl-tickets">
              <div className="card-body">
                <div className="view-all-grp d-flex">
                  <div className="student-ticket-view">
                    <h3>50</h3>
                    <p>Total Clicks</p>
                    {/* <a href="dashboard-instructor.html">View All</a> */}
                  </div>
                  <div className="img-deposit-ticket">
                    <img src="/img/students/book.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
export default Section1;