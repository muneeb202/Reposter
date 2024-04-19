import React from 'react'
import DashboardDesign from '@/shared/design/brand-section/dashboard-b/dashboard.design';
import * as materialModules from "@/shared/modules/material";
import "./request-table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { getStatusColor } from '@/shared/utils/utils';

const RequestTableDesign = () => {
    const rows = [
        {
            id: 1,
            subject: 'Calls are not being received',
            status: "Pending", detail: 'See Details', deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 2,
            subject: 'Problem with the Internet',
            status: "Done", detail: 'See Details', deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 3,
            subject: 'Calls are not being received',
            status: "Pending", detail: 'See Details', deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 4,
            subject: 'Problem with the Internet',
            status: "In the queue", detail: 'See Details', deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 5,
            subject: 'Creator account disabled.',
            status: "Done", detail: 'See Details', deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 6,
            subject: 'Calls are not being received',
            status: "In the work", detail: 'See Details', deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 7,
            subject: 'Reactor not responded',
            status: "Pending", detail: 'See Details', deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
        {
            id: 8,
            subject: 'Calls are not being received',
            status: "In the work", detail: 'See Details', deleteIcon: <DeleteForeverIcon />, chatIcon: <ChatBubbleIcon />
        },
    ];



    return (
        <>
            <div className="flex-container-request-table">
                <div className="col-6-request-table">
                    <DashboardDesign />
                </div>
                <div className="col-8-request-table">
                    <h2 className="heading responsive-heading">Request</h2>
                    <div className="table-container">
                        <TableContainer>
                            <Table aria-label="simple table">
                                {/* <hr style={{ borderTop: '2px solid red'}} /> */}
                                <TableHead>
                                    <TableRow>
                                        <TableCell ></TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}>Sr No.</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}>Subject</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}>Status</TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}></TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}></TableCell>
                                        <TableCell style={{ fontWeight: "bold" }}></TableCell>
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
                                            <TableCell style={{ color: getStatusColor(row.status) }}>{row.status}</TableCell>
                                            <TableCell>{row.detail}</TableCell>
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
        </>
    );
}

export default RequestTableDesign;