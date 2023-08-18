import React from "react";
import Navbar from "component/Common/Navbar";
import Sidebar from "component/Common/Sidebar";

export const MainLayout = (props) => {
  return (
    <div className="authLayout">
      <Navbar />
      <div className="row w-100">
        {/* <div className="col-3">
          <Sidebar />
        </div> */}
        <div className="col-12">{props.children}</div>
      </div>
    </div>
  );
};