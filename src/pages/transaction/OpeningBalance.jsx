import React from 'react';
import Page from '../../layout/Page';
import PageHeader from '../../layout/PageHeader';
import Filter from '../../components/Forms/Filter';
import { IconButton, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';
import { grey } from '@mui/material/colors';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { TbArrowsSort } from 'react-icons/tb';
import ActionMenu from '../../components/Menus/ActionMenu';
import DeleteDialog from '../../components/Dialogs/DeleteDialog';
import { useState } from 'react';
import { openingBalanceArray } from '../../__mock/msc';
import OpeningBalanceDialog from '../../components/Dialogs/OpeningBalanceDialog';
import ViewOpeningBalanceModal from '../../components/Modals/ViewOpeningBalanceModal';

const OpeningBalance = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [rowData, setRowData] = useState(null);
    const [deleteDialog, setDeleteDialog] = useState(false);
    const [viewModal, setViewModal] = useState(false);
    const [addNewDialog, setAddNewDialog] = useState(false);
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
        <Page title='Opening Balance'>
            <PageHeader
                title="Opening Balance"
                btnText="Add New"
                handleBtn={() => {
                    setRowData(null);
                    setAddNewDialog(true);
                }}
                currentPage="Opening Balance" />

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
                            <TableCell align="left" width={200} sx={{ fontWeight: "bold" }}>Party Name</TableCell>
                            <TableCell align="left" width={200} sx={{ fontWeight: "bold" }}>Project Name</TableCell>
                            <TableCell align="left" sx={{ fontWeight: "bold" }}>Account Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Opening Balance</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Type</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>Opening Date</TableCell>
                            <TableCell align="right" sx={{ fontWeight: "bold" }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {openingBalanceData?.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell align="center" >{index + 1}</TableCell>
                                <TableCell align="left">{row?.party_name}</TableCell>
                                <TableCell align="left">{row?.project_name}</TableCell>
                                <TableCell align="left">{row?.account_name}</TableCell>
                                <TableCell align="center">{row?.opening_balance}</TableCell>
                                <TableCell align="center">{row?.type}</TableCell>
                                <TableCell align="center">{row?.opening_date}</TableCell>
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
                handleView={() => setViewModal(true)}
                hanldeEdit={() => setAddNewDialog(true)}
                handleDeleteDialog={() => setDeleteDialog(true)} />


            {deleteDialog && <DeleteDialog setOpenDialog={setDeleteDialog} openDialog={deleteDialog} />}
            {addNewDialog && <OpeningBalanceDialog setOpenDialog={setAddNewDialog} openDialog={addNewDialog} metadata={{ id: rowData?.id }} />}
            {viewModal && <ViewOpeningBalanceModal setOpenModal={setViewModal} openModal={viewModal} metadata={{ title: "Opening Balance Information", data: rowData }} />}
        </Page>
    );
};

export default OpeningBalance;