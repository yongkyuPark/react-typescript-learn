import { Pagination } from "antd";
// import "antd/dist/reset.css";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";



const PaginationStatusBar = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalData, setTotalData] = useState(0);

    const handlePageChange = (page: number, pageSize: number) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(totalData / pageSize);
        if (currentPage < totalPages) {
          setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    return (
        <div style={{ marginTop: "10px", textAlign: "center" }}>
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalData}
          onChange={handlePageChange}
          showSizeChanger
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          pageSizeOptions={["10", "20", "30", "50"]}
          prevIcon={<RiArrowLeftSLine />}
          nextIcon={<RiArrowRightSLine />}
          showPrevNextJumpers={false}
          showQuickJumper
        />
      </div>
  );
};

export default PaginationStatusBar;
