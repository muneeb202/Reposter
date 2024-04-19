import React from 'react';
import "./admin-overall-statistics.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import AdminSidebarDesign from '../admin-sidebar/admin-sidebar.design';
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import ReactPaginate from 'react-paginate';
import avOneImg from "@/assets/av-one.png";
import avTwoImg from "@/assets/av-two.png";
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import * as materialModules from "@/shared/modules/material";
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';

const AdminOverallStatisticsDesign = () => {
    const rows = [
        {
            user: {
                userName: "Victoria Perez",
                userImg: `${avOneImg}`,
                userId: `LA-0234`,
                userRole: "Creator",
                joinData: "30 Apr, 2017 to 24 Nov 2023",
                activeProject: 23,

            },
            subject: 'Calls are not being received',
            status: "New Order", detail: 'See Details', editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />
        },
        {
            user: {
                userName: "Lena Page",
                userImg: `${avOneImg}`,
                userId: `LA-0234`,
                userRole: "Talent",
                joinData: "30 Apr, 2017 to 24 Otc 2023",
                activeProject: 213,


            },
            subject: 'Problem with the Internet',
            editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />,
        },
        {
            user: {
                userName: "Devin Harmon",
                userImg: `${avTwoImg}`,
                userId: `LA-0234`,
                userRole: "Brand",
                joinData: "30 Apr, 2017 to 24 Otc 2023",
                activeProject: 13,





            },
            subject: 'Calls are not being received',
            editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />,
        },
        {
            user: {
                userName: "Devin Harmon",
                userImg: `${avTwoImg}`,
                userId: `LA-0234`,
                userRole: "Talent",
                joinData: "30 Apr, 2017 to 24 Nov 2023",
                activeProject: 113,

            },
            editIcon: <BorderColorSharpIcon />, deleteIcon: <DeleteForeverIcon />,
        },

    ];
    return (
        <>
            <div className="flex-container-admin-user-profile">
                <div className="col-6-admin-user-profile">
                    <AdminSidebarDesign />
                </div>
                <div className="col-8-admin-user-profile">
                    <h2 className="heading">Overall Statistics</h2>
                    <div style={{
                        margin: "20px 0", display: "flex", gap: "17px"
                    }}>
                        <div style={{
                            background: "linear-gradient(180deg, #770CF1 0%, rgba(194, 18, 146, 0.3) 100%)",
                            // display: "flex",
                            padding: "10px",
                            width: "200px",
                            height: "90px"
                        }}>
                            <h5 style={{ padding: "5px 20px", color: "#FFFFFF" }}>250</h5>
                            <h5 style={{ padding: "5px 20px", color: "#FFFFFF", fontSize: "10px" }}>Brand User</h5>
                        </div>
                        <div style={{
                            background: "linear-gradient(180deg, #C21292 0%, rgba(119, 12, 241, 0.3) 100%)",
                            // display: "flex",
                            padding: "10px",
                            width: "200px",
                            height: "90px"
                        }}>
                            <h5 style={{ padding: "5px 20px", color: "#FFFFFF" }}>250</h5>
                            <h5 style={{ padding: "5px 20px", color: "#FFFFFF", fontSize: "10px" }}>250 Talent/Creators Users</h5>
                        </div>
                        <div style={{
                            background: "linear-gradient(180deg, #FF0312 0%, rgba(255, 3, 18, 0.3) 100%)",
                            // display: "flex",
                            padding: "10px",
                            width: "200px",
                            height: "90px"
                        }}>
                            <h5 style={{ padding: "5px 20px", color: "#FFFFFF" }}>30,000</h5>
                            <h5 style={{ padding: "5px 20px", color: "#FFFFFF", fontSize: "10px" }}>Active Projects</h5>
                        </div>
                        <div style={{
                            background: "linear-gradient(180deg, #FF0312 0%, rgba(255, 3, 18, 0.3) 100%)",
                            // display: "flex",
                            padding: "10px",
                            width: "200px",
                            height: "90px"
                        }}>
                            <h5 style={{ padding: "5px 20px", color: "#FFFFFF" }}>$40,0000</h5>
                            <h5 style={{ padding: "5px 20px", color: "#FFFFFF", fontSize: "10px" }}>Revenue generated</h5>
                        </div>
                    </div>
                    <div style={{
                        margin: "10px 0", display: "flex", gap: "5px", width: "85%", justifyContent: "space-between"
                    }}
                    >
                        <h2 className="heading" style={{ width: "75%" }}>All users</h2>
                        <div
                            style={{
                                border: "2px solid #770CF1",
                                borderRadius: "3px", display: "flex", alignItems: "center", padding: "10px",
                                justifyContent: "space-between", height: "35px",
                            }}
                        >
                            <SearchSharpIcon style={{ color: "#770CF1" }} />

                            <input
                                type="text"
                                placeholder="Search User"
                                style={{
                                    // flex: 1,
                                    border: "none",
                                    outline: "none",
                                    background: "transparent",
                                    width: "300px",
                                }}
                                className='search-placeholder-a'
                            />
                        </div>
                        <div
                            style={{
                                border: "2px solid #770CF1",
                                borderRadius: "3px", display: "flex", padding: "6px",
                                justifyContent: "space-between", marginLeft: '1px',
                            }}
                        >
                            <FilterAltRoundedIcon style={{ color: "#770CF1", fontSize: "16px" }} />
                            <p style={{ color: "#770CF1", fontSize: "12px" }} >Filter</p>

                        </div>

                    </div>
                    <div className="table-container" style={{ marginTop: "25px", width: "85%" }}>
                        <TableContainer>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow style={{ backgroundColor: "#770CF1" }}>
                                        <TableCell style={{ fontWeight: "bold", color: "#ffff" }}>Name</TableCell>
                                        <TableCell style={{ fontWeight: "bold", color: "#ffff" }}>UserId</TableCell>
                                        <TableCell style={{ fontWeight: "bold", color: "#ffff" }}></TableCell>
                                        <TableCell style={{ fontWeight: "bold", color: "#ffff" }}>Date</TableCell>
                                        <TableCell style={{ fontWeight: "bold", color: "#ffff" }}>Active Project</TableCell>
                                        <TableCell style={{ fontWeight: "bold", color: "#ffff" }}>Action</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row?.id}>

                                            <TableCell style={{ display: "flex" }}>
                                                <img src={row?.user?.userImg} alt="" />
                                                <p style={{ color: "#222B45", padding: "5px" }}>{row?.user?.userName}</p>
                                            </TableCell>
                                            <TableCell>{row?.user?.userId}</TableCell>
                                            <TableCell style={{ color: "#770CF1" }}>
                                                <materialModules.Button className="btn-admin-close-account"
                                                    style={{ width: "110px" }}
                                                >
                                                    {row?.user?.userRole}
                                                </materialModules.Button>

                                            </TableCell>
                                            <TableCell>{row?.user?.joinData}</TableCell>
                                            <TableCell>{row?.user?.activeProject}</TableCell>

                                            <TableCell style={{ color: "#770CF1", display: "flex", paddingRight: "10px", gap: "10px" }}>
                                                {row.editIcon}
                                                {row.deleteIcon}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div style={{
                        display: "flex", justifyContent: "center", margin: '15px',width:"85%", color: "#333333"
                    }}>
                        <h6 style={{ color: "#333333" }}>Showing 1 to 5 of 97 results</h6>
                    </div>
                    <div style={{
                        display: "flex", justifyContent: "center", margin: '15px', color: "#333333",width:"85%"
                    }}>
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

export default AdminOverallStatisticsDesign