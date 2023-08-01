import React, { useState } from 'react';
import { IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { grey } from '@mui/material/colors';
import { TbArrowsSort } from 'react-icons/tb';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { openingBalanceArray } from '../../../__mock/msc';
import Page from '../../../layout/Page';
import PageHeader from '../../../layout/PageHeader';
import Filter from '../../../components/Forms/Filter';
import ActionMenu from '../../../components/Menus/ActionMenu';
import DeleteDialog from '../../../components/Dialogs/DeleteDialog';

const BankReceive = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rowData, setRowData] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const open = Boolean(anchorEl);
    const [openingBalanceData, setOpeningBalanceData] = useState(openingBalanceArray);

    const handleClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setRowData(row);
    };

    const handleSorting = () => {
        const sortedArray = [...openingBalanceData];
        sortedArray.reverse();
        setOpeningBalanceData(sortedArray);
    }

    return (
        <Page title='Bank Receive'>
            <PageHeader
                title="Bank Receive"
                btnText="Add New"
                navigate='/vouchers/bank-receive/add'
                currentPage="Bank Receive" />

            <Filter enableExport />


            <TableContainer component={Paper} className="rad-grad">
                <Table size="medium" sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: grey[100] }}>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} >
                                    <span>#</span> <IconButton title='Sort' onClick={handleSorting}>
                                        <TbArrowsSort size={15} />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                            <TableCell align="left" width={200} sx={{ fontWeight: "bold" }}>Voucher No.</TableCell>
                            <TableCell align="left" width={200} sx={{ fontWeight: "bold" }}>Voucher Type</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Company</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Date</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Total Amount</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {openingBalanceData?.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="center" >{index + 1}</TableCell>
                                <TableCell align="left">{"BR10112300004"}</TableCell>
                                <TableCell align="left">{"Bank Receive"}</TableCell>
                                <TableCell align="left">{"Frontdesk Bangladesh Limited"}</TableCell>
                                <TableCell align="center">{"05/21/2023"}</TableCell>
                                <TableCell align="center">{4000.00}</TableCell>
                                <TableCell align="right">
                                    <IconButton
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={(e) => handleClick(e, row)}  >
                                        <BsThreeDotsVertical />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <TablePagination
                    component="div"
                    count={100}
                    page={page}
                    onPageChange={(e, newPage) => {
                        setPage(newPage);
                    }}
                    rowsPerPage={limit}
                    onRowsPerPageChange={(e) => {
                        setLimit(parseInt(e.target.value, 10));
                        setPage(0);
                    }}
                />

            </TableContainer>



            <ActionMenu
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                open={open}
                handlePrint={() => console.log("Printing")}
                editUrl={`/vouchers/bank-receive/edit/${rowData?.id}`}
                handleDeleteDialog={() => setDeleteDialog(true)} />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
        </Page>
    );
};

export default BankReceive;