import React, {  } from "react";
import "./Pagination.scss";
import ReactPaginate from "react-paginate";
import left from "../../assets/svg/LIcon.svg";
import Right from "../../assets/svg/RIcon.svg";

// import { MdArrowRight,MdArrowLeft} from "react-icons/md";

const Pagination = (props) => {
  const {
    totalPage = 0,
    pageChange,
  } = props;




  const handlePageChange = (page) => {
    pageChange(page);
  };


  return (
    totalPage > 0 && (
      <div className="mt-3 px-3">
        <div className="div-pagination">
          {/* <div className="show-product">
            <span>Show</span>
          <div className="show-product">
            <span>show</span>
            <select
              className="cursor-pointer"
              aria-label="Default select example"
              onChange={(e) => handlePageSize(e.target.value)}
              value={pageSize}
            >
              {options?.map((option, index) => (
                <option value={option?.value} key={index}>
                  {option?.label}
                </option>
              ))}   
            </select>
            <span>Entries</span>
          </div> */}
          <div className="ml-auto">
            <ReactPaginate
              disableInitialCallback={true}
              previousLabel={
                <div>
                  <img src={left} alt="left"/> <label className="pre">Previous</label>
                </div>
              }
              nextLabel={
                <div>
                  <label className="nxt">Next</label> <img src={Right} alt="right" />
                </div>
              }
              breakLabel={<span>...</span>}
              breakClassName=" my-auto"
              pageCount={Math.ceil(totalPage)}
              pageRangeDisplayed={1}
              onPageChange={(e) => handlePageChange(e.selected + 1)}
              containerClassName="pagination custom-pagination"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              activeClassName="active"
              previousClassName="page-item"
              nextClassName="page-item"
              previousLinkClassName="page-link"
              nextLinkClassName="page-link"
              disabledClassName={"disabled"}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Pagination;
