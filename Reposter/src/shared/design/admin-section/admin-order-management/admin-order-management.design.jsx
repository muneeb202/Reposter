import React from 'react';
import "./admin-order-management.scss"
import * as materialModules from "@/shared/modules/material";

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
import ReactPaginate from 'react-paginate';

const AdminOrderManagementDesign = () => {
    const rows = [
        {
            id: 5921,
            subject: 'Calls are not being received',
            status: "New Order", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 5921,
            subject: 'Problem with the Internet',
            status: "Cancelled", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 5922,
            subject: 'Calls are not being received',
            status: "New Order", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 5923,
            subject: 'Problem with the Internet',
            status: "In Process", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 5922,
            subject: 'Creator account disabled.',
            status: "New Order", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
    ];
    const items = [1, 2, 3];
    return (
        <>
            <div className="flex-container-admin-order-management">
                <div className="col-6-admin-user-profile">
                    <AdminSidebarDesign />
                </div>
                <div className="col-8-admin-user-profile">
                    <h2 className="heading">Orders</h2>
                    <div style={{
                        margin: "10px 0", display: "flex"
                    }}>
                        <div
                            style={{
                                border: "2px solid #770CF1", borderRadius: "3px", width: "100px",
                                display: "flex", padding: "10px",
                            }}>
                            <h5 style={{ paddingTop: "4px", color: "#14141480" }}>Order ID</h5>
                            <ArrowDropDownSharpIcon style={{ color: "#14141480" }} />
                        </div>
                        <div
                            style={{
                                background: "#770CF1", border: "2px solid #770CF1",
                                borderRadius: "3px", display: "flex", alignItems: "center", padding: "10px",
                                width: "25%", justifyContent: "space-between",
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Search"
                                style={{
                                    flex: 1,
                                    border: "none",
                                    outline: "none",
                                    background: "transparent",
                                }}
                                className='admin-order-searchbar-input'
                            />
                            <SearchSharpIcon style={{ color: "#FFFFFF" }} />
                        </div>
                        <div className="orderId"
                            style={{
                                border: "2px solid #770CF1", borderRadius: "3px",
                                display: "flex", padding: "10px", width: "25%",
                                justifyContent: "space-between", marginLeft: '15px'
                            }}>
                            <h5 style={{ paddingTop: "4px", color: "#14141480" }}>Status</h5>
                            <ArrowDropDownSharpIcon style={{ color: "#14141480" }} />
                        </div>
                    </div>
                    <div className="table-admin-order-container">
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "#770CF1" }}>
                                        <TableCell ></TableCell>
                                        <TableCell style={{ fontWeight: "bold", color: "#ffff" }}>orderID</TableCell>
                                        <TableCell style={{ fontWeight: "bold", color: "#ffff" }}>clientName</TableCell>
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
                                    <TableRow >
                                        <TableCell padding="checkbox">
                                        </TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell></TableCell>
                                        <TableCell ></TableCell>
                                        <TableCell></TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div style={{
                        display: "flex", justifyContent: "center", margin: '15px', color: "#333333"
                    }}>
                        <h6 style={{ color: "#333333" }}>Showing 1 to 5 of 97 results</h6>
                    </div>
                    <div style={{
                        display: "flex", justifyContent: "center", margin: '15px', color: "#333333"
                    }}>
                        {/* <div>
                            {items.map((item, index) => (
                                <ul key={index}>{item}</ul>
                            ))}
                        </div> */}

                        {/* Add the pagination component */}
                        <ReactPaginate
                            nextLabel=">"
                            // onPageChange={handlePageClick}
                            pageRangeDisplayed={3}
                            marginPagesDisplayed={2}
                            pageCount={5}
                            previousLabel="<"
                            pageClassName="page-item"
                            pageLinkClassName="page-link"
                            previousClassName="page-item"
                            previousLinkClassName="page-link"
                            nextClassName="page-item"
                            nextLinkClassName="page-link"
                            breakLabel="..."
                            breakClassName="page-item"
                            breakLinkClassName="page-link"
                            containerClassName="pagination"
                            activeClassName="active"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminOrderManagementDesign