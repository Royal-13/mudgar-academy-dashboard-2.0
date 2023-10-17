import React, { useState } from "react";
import ReactPaginate from "react-paginate";

type Props = {};
function HomeTable({ }: Props) {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const itemsPerPage = 10;
  const data = [
    { name: "karan", pnumber: "1234567890", email: "yo@gmail.com", id: "2134", status: "done" },
    { name: "john", pnumber: "9876543210", email: "john@gmail.com", id: "5678", status: "in progress" },
    { name: "alice", pnumber: "5555555555", email: "alice@gmail.com", id: "1111", status: "done" },
    { name: "bob", pnumber: "7777777777", email: "bob@gmail.com", id: "9999", status: "pending" },
    { name: "eve", pnumber: "6666666666", email: "eve@gmail.com", id: "7777", status: "in progress" },
    { name: "charlie", pnumber: "4444444444", email: "charlie@gmail.com", id: "4444", status: "done" },
    { name: "dave", pnumber: "2222222222", email: "dave@gmail.com", id: "2222", status: "pending" },
    { name: "frank", pnumber: "8888888888", email: "frank@gmail.com", id: "8888", status: "in progress" },
    { name: "grace", pnumber: "9999999999", email: "grace@gmail.com", id: "9999", status: "done" },
    { name: "harry", pnumber: "7777777777", email: "harry@gmail.com", id: "7777", status: "pending" },
    { name: "irene", pnumber: "6666666666", email: "irene@gmail.com", id: "6666", status: "in progress" },
    { name: "jane", pnumber: "5555555555", email: "jane@gmail.com", id: "5555", status: "done" },
  ];

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (selectedPage: { selected: React.SetStateAction<number>; }) => {
    setCurrentPageIndex(selectedPage.selected);
  };

  const offset = currentPageIndex * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);

  return (
    <div className="page-content">
      <div className="container">
        <form className="form-style">
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
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Status</th>
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
        </form>

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
  );
}

export default HomeTable;
