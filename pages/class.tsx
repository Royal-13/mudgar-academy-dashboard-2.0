import Hero from "@/components/hero";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Classes() {
  const [formData, setFormData] = useState({
    data: [
      { time: "", students: "", link: "" }
    ]
  });

  // Define the pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; // Number of items to display per page

  // Calculate the total number of pages
  const pageCount = Math.ceil(formData.data.length / itemsPerPage);

  // Function to handle page change
  const handlePageClick = (selectedPage: { selected: React.SetStateAction<number>; }) => {
    setCurrentPage(selectedPage.selected);
  };

  // Get the data to display on the current page
  const offset = currentPage * itemsPerPage;
  const currentPageData = formData.data.slice(offset, offset + itemsPerPage);

  return (
    <div className="main-wrapper">
      <Hero />
      <div className="page-content">
        <div className="container">
          <form className="form-style">
            <div className="row">
              <div className="col-xl-12 col-md-12">
                <div className="settings-widget">
                  <div className="settings-inner-blk p-0">
                    <div className="comman-space pb-0">
                      <div className="filter-grp ticket-grp d-flex align-items-center justify-content-between">
                        <h3>Class Details</h3>
                      </div>
                      <div className="settings-tickets-blk table-responsive">
                        <table className="table table-nowrap mb-0">
                          <thead>
                            <tr>
                              <th>Timeline</th>
                              <th>Total Students</th>
                              <th>Class Link</th>
                              <th>Submit</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentPageData.map((entry, index) => (
                              <tr key={index}>
                                <td>{entry.time}</td>
                                <td>{entry.students}</td>
                                <td>
                                  <input
                                    type="text"
                                    name="link"
                                    value={entry.link}
                                    placeholder="link"
                                  />
                                </td>
                                <td>
                                  <button type="submit">Submit</button>
                                </td>
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
    </div>
  );
}
