import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AdminSidebarDesign from '../admin-sidebar/admin-sidebar.design';
import { getAdminStatusColor } from '@/shared/utils/utils';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
const AdminRequesTableDesign = () => {
  const rows = [
    {
      id: 8,
      subject: 'Calls are not being received',
      status: "In Process", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
    },
    {
      id: 8,
      subject: 'Problem with the Internet',
      status: "In the Work", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
    },
    {
      id: 8,
      subject: 'Calls are not being received',
      status: "In Process", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
    },
    {
      id: 8,
      subject: 'Problem with the Internet',
      status: "In the Work", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
    },
    {
      id: 8,
      subject: 'Creator account disabled.',
      status: "In the Work", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
    },
  ];
  return (
    <>
      {/* <div className="container-user-profile"> */}
      <div className="flex-container-admin-user-profile">
        <div className="col-6-admin-user-profile">
          <AdminSidebarDesign />
        </div>
        <div className="col-8-admin-user-profile">
          <h2 className="heading">Request</h2>

          <div className="table-container">
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow style={{ backgroundColor: "#770CF1" }}>
                    <TableCell ></TableCell>
                    <TableCell style={{ fontWeight: "bold", color: "#ffff" }}>Sr No.</TableCell>
                    <TableCell style={{ fontWeight: "bold", color: "#ffff" }}>Subject</TableCell>
                    <TableCell style={{ fontWeight: "bold", color: "#ffff" }}>Status</TableCell>
                    <TableCell ></TableCell>
                    <TableCell ></TableCell>
                    <TableCell ></TableCell>
                    <TableCell ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.id}>
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          // indeterminate={numSelected > 0 && numSelected < rowCount}
                          // checked={rowCount > 0 && numSelected === rowCount}
                          // onChange={onSelectAllClick}
                          inputProps={{
                            'aria-label': 'select all desserts',
                          }}
                        />
                      </TableCell>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.subject}</TableCell>
                      <TableCell style={{ color: getAdminStatusColor(row.status) }}>{row.status}</TableCell>
                      <TableCell>{row.detail}</TableCell>
                      <TableCell style={{ color: "#770CF1" }}>{row.editIcon}</TableCell>
                      <TableCell style={{ color: "#EB5757" }}>{row.deleteIcon}</TableCell>
                      <TableCell>{row.chatIcon}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}

export default AdminRequesTableDesign