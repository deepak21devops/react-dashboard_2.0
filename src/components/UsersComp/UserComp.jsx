import React from "react";
import "./userscomp.scss";
import { DataGrid } from "@mui/x-data-grid";

import { rows, columns } from "../../DataSource";

const UserComp = () => {
  const action = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: () => {
        return (
          <div className="actionContent">
            <div className="viewButton">View</div>
            <div className="DelButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="userscomp">
      <div style={{ height: 500, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns.concat(action)}
          pageSize={7}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserComp;
