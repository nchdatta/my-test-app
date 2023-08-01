import React, { useState } from 'react';
import Page from '../../layout/Page';
import PageHeader from '../../layout/PageHeader';
import Filter from '../../components/Forms/Filter';
import { IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { grey } from '@mui/material/colors';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ActionMenu from '../../components/Menus/ActionMenu';
import DeleteDialog from '../../components/Dialogs/DeleteDialog';
import { salesArrayData } from '../../__mock/msc';
import { TbArrowsSort } from 'react-icons/tb';

const SalesManage = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rowData, setRowData] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const open = Boolean(anchorEl);
    const [salesData, setSalesData] = useState(salesArrayData);

    const handleClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setRowData(row);
    };

    const handleSorting = () => {
        const sortedArray = [...salesData];
        sortedArray.reverse();
        setSalesData(sortedArray);
    }



    return (
        <Page title='Manage Sales'>
            <PageHeader
                title="Manage Sales"
                btnText="Add New"
                navigate='/sales/add'
                currentPage="Manage Sales" />

            <Filter enableExport />


            <TableContainer component={Paper} className="rad-grad">
                <Table size="medium" sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: grey[100] }}>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>
                                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={1}>
                                    <span>#</span> <IconButton title='Sort' onClick={handleSorting}>
                                        <TbArrowsSort size={15} />
                                    </IconButton>
                                </Stack>
                            </TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Invoice</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Party</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Net Amount</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Invoice Date</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Vat Challan Number</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Bill Number </TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Invoice Submission Date</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {salesData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="center" >{index + 1}</TableCell>
                                <TableCell align="left">{row?.invoice}</TableCell>
                                <TableCell align="left">{row?.party}</TableCell>
                                <TableCell align="left">{row?.net_amount}</TableCell>
                                <TableCell align="center">{row?.invoice_date}</TableCell>
                                <TableCell align="center">{row?.vat_challan}</TableCell>
                                <TableCell align="center">{row?.bill_number}</TableCell>
                                <TableCell align="center">{row?.invoice_sub_date}</TableCell>
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
                viewUrl={`/sales/view/${rowData?.id}`}
                editUrl={`/sales/edit/${rowData?.id}`}
                handleDeleteDialog={() => setDeleteDialog(true)} />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
        </Page>
    )
};

export default SalesManage;