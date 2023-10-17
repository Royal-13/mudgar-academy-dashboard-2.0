import React, { useState } from "react";
import ReactPaginate from "react-paginate";
type Props = {};
function HomeTable({}: Props) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const itemsPerPage = 10;

  const data = [
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    {
      name: "karan",
      pnumber: "1234567890",
      email: "yo@gmail.com",
      id: "2134",
      status: "done",
    },
    
  ];

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (selectedPage: {
    selected: React.SetStateAction<number>;
  }) => {
    setCurrentPageIndex(selectedPage.selected);
  };

  const offset = currentPageIndex * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  return (
    <div className="page-content">
      <div className="container">
        <div className="form-style">
        <div className="row">
          <div className="col-xl-12 col-md-12">
            <div className="settings-widget">
              <div className="settings-inner-blk p-0">
                <div className="comman-space pb-0">
                  <div className="filter-grp ticket-grp d-flex align-items-center justify-content-between">
                    <div>
                      <h3>Transactions History</h3>
                    </div>
                  </div>
                  <div className="settings-tickets-blk table-responsive">
                    <table className="table table-nowrap mb-0">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Startdate</th>
                          <th>Gender</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th>&nbsp;</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentPageData.map((entry, index) => (
                          <tr key={index}>
                            <td>{entry.name}</td>
                            <td>{entry.pnumber}</td>
                            <td>{entry.email}</td>
                            <td>{entry.id}</td>
                            <td>{entry.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomeTable;
