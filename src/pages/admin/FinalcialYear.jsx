import React from 'react';
import Page from '../../layout/Page';
import PageHeader from '../../layout/PageHeader';
import Filter from '../../components/Forms/Filter';
import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { grey } from '@mui/material/colors';
import { TbArrowsSort } from 'react-icons/tb';
import { BsThreeDotsVertical } from 'react-icons/bs';
import ActionMenu from '../../components/Menus/ActionMenu';
import DeleteDialog from '../../components/Dialogs/DeleteDialog';
import { useState } from 'react';
import { financialYears } from '../../__mock/msc';
import FinalcialYearDialog from '../../components/Dialogs/FinalcialYearDialog';

const FinalcialYear = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rowData, setRowData] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [addNewDialog, setAddNewDialog] = useState(false);
    const open = Boolean(anchorEl);
    const [financialYearsData, setFinancialYears] = useState(financialYears);

    const handleClick = (event, row) => {
        setAnchorEl(event.currentTarget);
        setRowData(row);
    };

    const handleSorting = () => {
        const sortedArray = [...financialYearsData];
        sortedArray.reverse();
        setFinancialYears(sortedArray);
    }


    return (
        <Page title='Financial Year'>
            <PageHeader
                title="Financial Year"
                btnText="Add New"
                handleBtn={() => {
                    setRowData(null);
                    setAddNewDialog(true);
                }}
                currentPage="Financial Year" />


            <Filter placeholder="Search..." enableExport />

            <TableContainer component={Paper} className="rad-grad">
                <Table size="medium" sx={{ minWidth: 650, minHeight: '70vh' }} aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{ bgcolor: grey[100] }}>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>
                                <span>#</span> <IconButton title='Sort' onClick={handleSorting}>
                                    <TbArrowsSort size={15} />
                                </IconButton>
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Start Date</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>End Date</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Created on</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {financialYearsData.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="left" sx={{ pl: 3 }}>{index + 1}</TableCell>
                                <TableCell align="center">{row?.start_date}</TableCell>
                                <TableCell align="center">{row?.end_date}</TableCell>
                                <TableCell align="center">{"12/05/2023 10:30 AM"}</TableCell>
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
                handlePrint={() => console.log("Print")}
                hanldeEdit={() => setAddNewDialog(true)}
                handleDeleteDialog={() => setDeleteDialog(true)} />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
            {addNewDialog && <FinalcialYearDialog setOpenDialog={setAddNewDialog} openDialog={addNewDialog} metadata={{ id: rowData?.id }} />}
        </Page>
    );
};

export default FinalcialYear;